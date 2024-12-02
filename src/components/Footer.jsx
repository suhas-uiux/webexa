import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700 text-center">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Resources Section */}
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a className="text-neutral-500 hover:text-black" href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Platform Section */}
        <div>
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a className="text-neutral-500 hover:text-black" href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Community Section */}
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a className="text-neutral-500 hover:text-black" href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;