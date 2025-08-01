import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Hero = () => {
  const navigate = useNavigate();
  const [websiteUrl, setWebsiteUrl] = useState("");

  const handleDetectClick = () => {
    if (websiteUrl.trim() !== "") {
      navigate('/search', { state: { query: websiteUrl } });
    } else {
      alert("Please enter a website URL to proceed.");
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
            onClick={handleDetectClick}
            className="py-3 px-6 rounded-md bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold hover:scale-105 transition duration-200 shadow-md"
          >
            Detect &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
