const techMeta = {
  // --- JavaScript Frameworks ---
  "react": { category: "JavaScript Frameworks", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  "react (js runtime)": { category: "JavaScript Frameworks", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  "angular": { category: "JavaScript Frameworks", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  "vue.js": { category: "JavaScript Frameworks", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  "next.js": { category: "JavaScript Frameworks", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  "nuxt.js": { category: "JavaScript Frameworks", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" },
  "svelte": { category: "JavaScript Frameworks", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" },
  "jquery": { category: "JavaScript Frameworks", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },

  // --- Backend Frameworks ---
  "node.js": { category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  "express.js": { category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  "django": { category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  "flask": { category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  "spring boot": { category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  "laravel": { category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
  "ruby on rails": { category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" },
  "asp.net": { category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },

  // --- Web Servers ---
  "nginx": { category: "Web Server", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
  "apache": { category: "Web Server", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
  "iis": { category: "Web Server", logo: "https://img.icons8.com/color/452/microsoft.png" },

  // --- Databases ---
  "mysql": { category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  "postgresql": { category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  "mongodb": { category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  "redis": { category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  "oracle": { category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
  "microsoft sql server": { category: "Database", logo: "https://img.icons8.com/color/452/microsoft-sql-server.png" },

  // --- CMS & eCommerce ---
  "wordpress": { category: "CMS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
  "drupal": { category: "CMS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg" },
  "joomla": { category: "CMS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/joomla/joomla-original.svg" },
 "shopify": { category: "eCommerce", logo: "https://cdn.simpleicons.org/shopify" },
  "magento": { category: "eCommerce", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg" },
  "wix": { category: "CMS", logo: "https://www.wix.com/favicon.ico" },
  "squarespace": { category: "CMS", logo: "https://www.squarespace.com/favicon.ico" },
  

  // --- UI & Styling ---
  "bootstrap": { category: "UI Libraries", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  "tailwind css": { category: "UI Libraries", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  "material-ui": { category: "UI Libraries", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
  "ant design": { category: "UI Libraries", logo: "https://ant.design/favicon.ico" },

  // --- Cloud / DevOps ---
  "aws cloudfront": { category: "Cloud & Hosting", logo: "https://cdn.simpleicons.org/amazonaws" },
  "aws s3": { category: "Cloud & Hosting", logo: "https://cdn.simpleicons.org/amazonaws" },
  "aws lambda": { category: "Cloud & Hosting", logo: "https://cdn.simpleicons.org/awslambda" },
  "aws ec2": { category: "Cloud & Hosting", logo: "https://cdn.simpleicons.org/amazonec2" },
  "aws rds": { category: "Cloud & Hosting", logo: "https://cdn.simpleicons.org/amazonrds" },
  "firebase": { category: "Cloud & Hosting", logo: "https://cdn.simpleicons.org/firebase" },
  "google cloud": { category: "Cloud & Hosting", logo: "https://cdn.simpleicons.org/googlecloud" },
  "bigquery": { category: "Cloud & Hosting", logo: "https://cdn.simpleicons.org/googlebigquery" },
  "azure": { category: "Cloud & Hosting", logo: "https://cdn.simpleicons.org/microsoftazure" },
  "digitalocean": { category: "Cloud & Hosting", logo: "https://cdn.simpleicons.org/digitalocean" },
  "netlify": { category: "Cloud & Hosting", logo: "https://cdn.simpleicons.org/netlify" },
  "vercel": { category: "Cloud & Hosting", logo: "https://cdn.simpleicons.org/vercel" },
  "cloudflare": { category: "Cloud & Hosting", logo: "https://cdn.simpleicons.org/cloudflare" },
  "heroku": { category: "Cloud & Hosting", logo: "https://cdn.simpleicons.org/heroku" },

  // --- Analytics / Marketing ---
  "google analytics": { category: "Analytics", logo: "https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg" },
  "hotjar": { category: "Analytics", logo: "https://static.hotjar.com/favicon.ico" },
  "mixpanel": { category: "Analytics", logo: "https://cdn.worldvectorlogo.com/logos/mixpanel-1.svg" },
  "segment": { category: "Analytics", logo: "https://cdn.worldvectorlogo.com/logos/segment-logo.svg" },
  "hubspot": { category: "Marketing Automation", logo: "https://cdn.worldvectorlogo.com/logos/hubspot.svg" },
  "mailchimp": { category: "Email Marketing", logo: "https://cdn.worldvectorlogo.com/logos/mailchimp-freddie.svg" },

  // --- Payments & Auth ---
  "stripe": { category: "Payments", logo: "https://cdn.simpleicons.org/stripe" },
  "paypal": { category: "Payments", logo: "https://www.paypalobjects.com/webstatic/icon/pp258.png" },
  "razorpay": { category: "Payments", logo: "https://razorpay.com/favicon.ico" },
  "auth0": { category: "Authentication", logo: "https://cdn.worldvectorlogo.com/logos/auth0.svg" },
  "okta": { category: "Authentication", logo: "https://cdn.worldvectorlogo.com/logos/okta-1.svg" },

  "javascript": { category: "Programming Languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  "typescript": { category: "Programming Languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  "python": { category: "Programming Languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  "java": { category: "Programming Languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  "c": { category: "Programming Languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  "c++": { category: "Programming Languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  "c#": { category: "Programming Languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  "go": { category: "Programming Languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
  "ruby": { category: "Programming Languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" },
  "php": { category: "Programming Languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  "swift": { category: "Programming Languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
  "kotlin": { category: "Programming Languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  "rust": { category: "Programming Languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg" },
  "dart": { category: "Programming Languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  "scala": { category: "Programming Languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg" },
  "haskell": { category: "Programming Languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original.svg" },
  "perl": { category: "Programming Languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/perl/perl-original.svg" },
  "lua": { category: "Programming Languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg" },
  "r": { category: "Programming Languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },

   "github actions": { category: "CI/CD & DevOps", logo: "https://cdn.simpleicons.org/githubactions" },
  "bitbucket": { category: "CI/CD & DevOps", logo: "https://cdn.simpleicons.org/bitbucket" },
  "jenkins": { category: "CI/CD & DevOps", logo: "https://cdn.simpleicons.org/jenkins" },

    "docker": { category: "Containers & Orchestration", logo: "https://cdn.simpleicons.org/docker" },
  "kubernetes": { category: "Containers & Orchestration", logo: "https://cdn.simpleicons.org/kubernetes" }, 

    "terraform": { category: "Infrastructure as Code", logo: "https://cdn.simpleicons.org/terraform" },
  "ansible": { category: "Infrastructure as Code", logo: "https://cdn.simpleicons.org/ansible" },


  "kafka": { category: "Data Streaming", logo: "https://cdn.simpleicons.org/apachekafka" },

    "elasticsearch": { category: "Search & Indexing", logo: "https://cdn.simpleicons.org/elasticsearch" },
  "algolia": { category: "Search & Indexing", logo: "https://cdn.simpleicons.org/algolia" },


  "graphql": { category: "APIs & Databases", logo: "https://cdn.simpleicons.org/graphql" },
  "prisma": { category: "APIs & Databases", logo: "https://cdn.simpleicons.org/prisma" },
  "supabase": { category: "APIs & Databases", logo: "https://cdn.simpleicons.org/supabase" },

};



const defaultMeta = {
  category: "Miscellaneous",
  logo: "https://cdn-icons-png.flaticon.com/512/565/565547.png" 
};




document.addEventListener("DOMContentLoaded", () => {
  const resultDiv = document.getElementById("result"); 
  const techList = document.getElementById("tech-list"); 
  const exportBtn = document.getElementById("exportBtn");

  async function detectTechnologies() {
    
    techList.innerHTML = ""; 

    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (!tab || !tab.url) {
        resultDiv.textContent = "Could not get tab URL";
        return;
      }

      const response = await fetch("http://localhost:5000/detect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: tab.url }),
      });

      const data = await response.json();
      console.log(data);

      resultDiv.textContent = ""; 

      if (!data.technologies || data.technologies.length === 0) {
        resultDiv.innerHTML = `No major technologies detected. <span id="reload-link" style="text-decoration: underline; color: blue; cursor: pointer;">Reload</span>`;


          const reloadLink = document.getElementById("reload-link");
    if (reloadLink) {
        reloadLink.addEventListener("click", () => {
            chrome.runtime.reload(); 
        });
    }
    return;
}

    

      const categories = {};
      window.detectedTechnologies = [];

      data.technologies.forEach(tech => {
        const key = tech.toLowerCase().trim();
        const { category, logo } = techMeta[key] || defaultMeta;

        if (!categories[category]) categories[category] = [];
        categories[category].push({ name: tech, logo });

          window.detectedTechnologies.push({ category, name: tech });
      });

      Object.keys(categories).forEach(category => {
        const catDiv = document.createElement("div");
        catDiv.classList.add("category-block");

        const title = document.createElement("h4");
        title.textContent = category;
        catDiv.appendChild(title);

        const row = document.createElement("div");
        row.classList.add("tech-row");

        categories[category].forEach(({ name, logo }) => {
          const card = document.createElement("div");
          card.classList.add("tech-card");

          card.innerHTML = `
            <img src="${logo}" alt="${name}" class="tech-logo" />
            <span>${name}</span>
          `;
          row.appendChild(card);
        });

        catDiv.appendChild(row);
        techList.appendChild(catDiv);
      });

    } catch (err) {
      resultDiv.textContent = "Error fetching technologies: " + err.message;
    }
  }

  exportBtn.addEventListener("click", () => {
  if (!window.detectedTechnologies || window.detectedTechnologies.length === 0) {
    alert("No technologies detected to export!");
    return;
  }

  let csvContent = "Category,Technology\n";
  window.detectedTechnologies.forEach(({ category, name }) => {
    csvContent += `${category},${name}\n`;
  });

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "technologies.csv";
  a.click();

  URL.revokeObjectURL(url);
});

  
  detectTechnologies();


  const themeToggleBtn = document.getElementById("theme-toggle");
const contentDiv = document.querySelector(".content");

themeToggleBtn.addEventListener("click", () => {
  contentDiv.classList.toggle("dark-mode");

  if (contentDiv.classList.contains("dark-mode")) {
    themeToggleBtn.textContent = "☀️"; 
  } else {
    themeToggleBtn.textContent = "🌙"; 
  }
});


 
});
