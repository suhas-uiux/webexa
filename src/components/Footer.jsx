const Footer = () => {
  return (
    <footer className="w-full bg-[#0A2C91] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo + Tagline */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Webexa Digital Logo"
              className="h-12 w-12 rounded-full bg-white p-1"
            />
            <h2 className="text-xl font-bold">WEBEXA DIGITAL</h2>
          </div>
          <p className="text-sm text-white leading-relaxed">
            Instantly detect frameworks, libraries, and CMS platforms behind any domain.
            Fast, accurate, and free to use.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold underline underline-offset-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300 transition">Home</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Team</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">Workshop</a></li>
            <li><a href="#" className="hover:text-gray-300 transition">About Us</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold underline underline-offset-4">Contact Us</h3>
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:support@techstackidentifier.com"
              className="underline hover:text-gray-300"
            >
              support@techstackidentifier.com
            </a>
          </p>
          <p className="text-sm">Phone: +91 98765 43210</p>
          <div className="flex space-x-4 mt-2">
            {/* Optional social icons */}
            <a href="#"><img src="/facebook.svg" alt="Facebook" className="h-5 w-5" /></a>
            <a href="#"><img src="/twitter.svg" alt="Twitter" className="h-5 w-5" /></a>
            <a href="#"><img src="/linkedin.svg" alt="LinkedIn" className="h-5 w-5" /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
