import { useState } from "react";

const techLogos = {
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Angular": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  "Vue.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Svelte": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
  "WordPress": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  "Drupal": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg",
  "Joomla": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/joomla/joomla-original.svg",
  "Shopify": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg",
  "jQuery": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
  "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Font Awesome": "https://img.icons8.com/?size=512&id=13677&format=png",
  "Google Analytics": "https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg",
  "Mixpanel": "https://seeklogo.com/images/M/mixpanel-logo-1A02C1F2BC-seeklogo.com.png",
  "Hotjar": "https://seeklogo.com/images/H/hotjar-logo-101B4C6A95-seeklogo.com.png",
  "Cloudflare": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
  "Akamai": "https://seeklogo.com/images/A/akamai-technologies-logo-1C4B35D6A1-seeklogo.com.png",
  "Webpack": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
  "Vite": "https://vitejs.dev/logo.svg",
  "Remix": "https://avatars.githubusercontent.com/u/64235328?s=200&v=4",
  "Astro": "https://astro.build/assets/press/astro-icon-dark.png",
  "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
};

export default function Hero() {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [detected, setDetected] = useState([]);

  const handleDetect = async () => {
    if (!websiteUrl.trim()) return alert("Please enter a URL");

    setLoading(true);
    setDetected([]);

    try {
      const res = await fetch("http://localhost:5000/detect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: websiteUrl }),
      });

      const data = await res.json();
      if (data.error) {
        setDetected([{ name: "Error", logo: "", msg: data.error }]);
      } else {
        const techList = data.output
          .split("\n")
          .map(t => t.trim())
          .filter(t => t && !t.includes("Detected Technologies"));

        setDetected(
          techList.map(name => ({
            name,
            logo: techLogos[name] || "https://via.placeholder.com/40?text=?"
          }))
        );
      }
    } catch (err) {
      setDetected([{ name: "Error", logo: "", msg: err.message }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full bg-gradient-to-b from-white via-gray-50 to-white text-gray-900 py-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold leading-tight tracking-tight">
          Know What Powers Any{" "}
          <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
            Website in Seconds
          </span>
        </h1>

        <p className="mt-6 lg:mt-8 text-lg sm:text-xl text-gray-600 max-w-3xl">
          Webexa Digital scans and reveals the exact technologies – from frontend frameworks to CMS platforms, backend stacks, analytics tools, and more.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Enter Website URL"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            className="py-3 px-5 w-[300px] sm:w-[400px] text-gray-900 bg-white border border-gray-300 rounded-md placeholder:text-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleDetect}
            disabled={loading}
            className="py-3 px-6 rounded-md bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold hover:scale-105 transition duration-200 shadow-md"
          >
            {loading ? "Detecting..." : "Detect >"}
          </button>
        </div>

        {/* Detected Results */}
        {detected.length > 0 && (
          <div className="mt-10 w-full sm:w-[500px] space-y-3 text-left">
            {detected.map((tech, i) => (
              <div key={i} className="flex items-center bg-gray-100 p-3 rounded-lg shadow-sm">
                {tech.logo && (
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-8 h-8 mr-3"
                  />
                )}
                <span className="font-medium">{tech.name}</span>
                {tech.msg && <span className="ml-2 text-red-500">{tech.msg}</span>}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
