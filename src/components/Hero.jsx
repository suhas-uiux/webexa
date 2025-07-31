import { useNavigate } from "react-router-dom"; // Import useNavigate

const Hero = () => {
  const navigate = useNavigate(); // Create the navigate function

  const handleGetStarted = () => {
    // Navigate to the login page when the "Detect" button is clicked
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center mt-5 lg:mt-9 px-8">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide leading-tight">
        Know What Powers Any{" "}
        <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
          Website in Seconds
        </span>
      </h1>

      <p className="mt-6 lg:mt-8 text-lg sm:text-xl text-center text-neutral-500 max-w-4xl">
        Webexa Digital scans and reveals the exact technologies – from frontend frameworks to CMS platforms, backend stacks, analytics tools, and more – with just a click.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-10">
        <input
          type="text"
          placeholder="website link"
          className="py-3 px-5 w-[300px] sm:w-[400px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleGetStarted}
          className="bg-gradient-to-r from-blue-500 to-blue-900 py-3 px-6 rounded-md text-white hover:brightness-110 transition duration-200"
        >
          Detect &gt;
        </button>
      </div>
    </div>
  );
};

export default Hero;
