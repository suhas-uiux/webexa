// index.js
// --- Simple Tech Stack Detector ---
// Uses Axios (fast fetch) + Puppeteer (deep DOM inspection)

const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const axios = require("axios");

// Load detection rules
const rules = JSON.parse(
  fs.readFileSync(path.join(__dirname, "rules.json"), "utf-8")
);

// --- Utility: match HTML against detection rules ---
function matchRules($, html, rules) {
  let score = 0;

  // Meta tags
  if (rules.meta) {
    for (const [key, values] of Object.entries(rules.meta)) {
      const content = $(`meta[name="${key}"]`).attr("content") || "";
      for (const value of values) {
        if (content.toLowerCase().includes(value.toLowerCase())) score += 5;
      }
    }
  }

  // Linked CSS
  if (rules.link) {
    $('link[rel="stylesheet"]').each((_, el) => {
      const href = $(el).attr("href") || "";
      for (const value of rules.link) {
        if (href.toLowerCase().includes(value.toLowerCase())) score += 5;
      }
    });
  }

  // Script tags
  if (rules.script) {
    $("script").each((_, el) => {
      const src = $(el).attr("src") || "";
      for (const value of rules.script) {
        if (src.toLowerCase().includes(value.toLowerCase())) score += 5;
      }
    });
  }

  // Raw HTML search
  if (rules.html) {
    const htmlLower = html.toLowerCase();
    for (const value of rules.html) {
      const regex = new RegExp(value.toLowerCase());
      if (regex.test(htmlLower)) score += 5;
    }
  }

  return score;
}

// --- Backend tech detection from headers ---
function detectBackendFromHeaders(headers) {
  const results = [];

  if (headers.server) {
    const server = headers.server.toLowerCase();
    if (server.includes("nginx")) results.push("NGINX");
    if (server.includes("apache")) results.push("Apache");
    if (server.includes("cloudflare")) results.push("Cloudflare");
    if (server.includes("amazon")) results.push("AWS Cloud Hosting");
  }

  if (headers["x-powered-by"]) {
    const powered = headers["x-powered-by"].toLowerCase();
    if (powered.includes("express")) results.push("Express.js");
    if (powered.includes("php")) results.push("PHP");
  }

  if (headers.via && headers.via.toLowerCase().includes("cloudfront")) {
    results.push("AWS CloudFront");
  }

  return results;
}

// --- Quick regex frontend detection ---
function detectFrontendFromHTML(html) {
  const detected = [];

  if (/React\.createElement/.test(html) ||
      /_REACT_DEVTOOLS_GLOBAL_HOOK_/.test(html) ||
      /data-reactroot/.test(html)) detected.push("React");

  if (/data-v-/.test(html) || /_VUE_DEVTOOLS_GLOBAL_HOOK_/.test(html)) detected.push("Vue.js");
  if (/ng-version/.test(html) || /ng-app/.test(html)) detected.push("Angular");
  if (/_NEXT_DATA/.test(html) || /id="_next"/.test(html)) detected.push("Next.js");
  if (/\bjQuery\b/.test(html) || /\$\(/.test(html)) detected.push("jQuery");
  if (/bootstrap(\.min)?\.css/.test(html)) detected.push("Bootstrap");
  if (/data-svelte/.test(html)) detected.push("Svelte");
  if (/_REMIX_MANIFEST_/.test(html)) detected.push("Remix");
  if (/astro\/client/.test(html)) detected.push("Astro");

  return detected;
}

(async () => {
  const url = process.argv[2];
  if (!url) {
    console.error("Usage: node index.js <URL>");
    process.exit(1);
  }

  const detected = new Set();

  // --- STEP 1: Axios first (fast) ---
  try {
    const res = await axios.get(url);
    detectBackendFromHeaders(res.headers).forEach(t => detected.add(t));
    detectFrontendFromHTML(res.data).forEach(t => detected.add(t));
  } catch (err) {
    console.warn(`Axios fetch failed — falling back to Puppeteer. Error: ${err.message}`);
  }

  // --- STEP 2: Puppeteer fallback ---
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  let serverHeaders = {};

  page.on("response", (response) => {
    const headers = response.headers();
    if (headers["x-powered-by"]) serverHeaders["x-powered-by"] = headers["x-powered-by"];
    if (headers.server) serverHeaders["server"] = headers.server;
    if (headers.via) serverHeaders["via"] = headers.via;
  });

  try {
    await page.goto(url, {
      waitUntil: "domcontentloaded", // safer than networkidle2
      timeout: 60000
    });
    await page.waitForTimeout(2000); // small buffer
  } catch (err) {
    console.warn(`Puppeteer navigation failed: ${err.message}`);
  }

  // Safely grab HTML
  let html = "";
  try {
    html = await page.content();
  } catch (err) {
    console.warn(`Could not get page content: ${err.message}`);
  }

  const $ = cheerio.load(html || "");

  // Run rule-based detection
  for (const tech of rules) {
    const score = matchRules($, html, tech.rules);
    if (score >= tech.threshold) detected.add(tech.name);
  }

  // JS runtime detection
  try {
    const jsEnv = await page.evaluate(() => {
      const detected = {};
      detected.hasReact =
        !!window.REACT_DEVTOOLS_GLOBAL_HOOK ||
        !!document.querySelector("[data-reactroot]") ||
        !!Object.keys(window).some(k => k.startsWith("__reactFiber$"));
      detected.hasNext = !!window._NEXT_DATA_ || !!document.querySelector("#__next");
      detected.hasVue = !!window.Vue || !!document.querySelector("[data-v-app]");
      detected.hasAngular = !!window.angular || !!document.querySelector("[ng-version]");
      detected.hasEmber = !!window.Ember;
      detected.hasjQuery = !!window.jQuery;
      return detected;
    });

    if (jsEnv.hasReact) detected.add("React (JS runtime)");
    if (jsEnv.hasAngular) detected.add("Angular (JS runtime)");
    if (jsEnv.hasVue) detected.add("Vue.js (JS runtime)");
    if (jsEnv.hasEmber) detected.add("Ember.js (JS runtime)");
    if (jsEnv.hasjQuery && ![...detected].some(t => t.toLowerCase().includes("jquery")))
      detected.add("jQuery (JS runtime)");
  } catch (err) {
    console.warn(`JS runtime detection failed: ${err.message}`);
  }

  // Detect backend again from Puppeteer headers
  detectBackendFromHeaders(serverHeaders).forEach(t => detected.add(t));

  await browser.close();

  // --- STEP 3: Print results ---
  console.log(`\nDetected Technologies on ${url}:\n`);
  if (detected.size === 0) {
    console.log("No known technologies found.");
  } else {
    detected.forEach(tech => console.log(tech));
  }
})();
