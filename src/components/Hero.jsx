import { useNavigate } from "react-router-dom"; // Import useNavigate
import video1 from "../assets/travel.mp4"; // Import video

const Hero = () => {
  const navigate = useNavigate(); // Create the navigate function

  const handleGetStarted = () => {
    // Navigate to the search page when the "Start for Free" button is clicked
    navigate('/search');
  };

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Your Path to Amazing{" "}
        <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
          Travel Adventures
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-7xl">
        At Travel Point, we believe that every journey is an opportunity for
        discovery, excitement, and growth. Whether you're planning a weekend
        getaway or a dream vacation, we provide the resources and inspiration to
        help you make the most of every adventure. From finding the best
        destinations to expert tips on making your trip seamless, we’re here to
        guide you every step of the way. Let us be your trusted companion as you
        explore new horizons and create memories that will last a lifetime.
      </p>
      <div className="flex justify-center my-10">
        {/* Updated button to navigate to search page */}
        <button
          onClick={handleGetStarted} // Call the handleGetStarted function on click
          className="bg-gradient-to-r from-blue-500 to-blue-900 py-3 px-4 mx-3 rounded-md text-neutral-50"
        >
          Start for Free{">"}
        </button>
        <a
          href="#"
          className="py-3 px-4 rounded-md border"
        >
          Know More
        </a>
      </div>
      <div className="mt-10">
        <video
          autoPlay
          loop
          muted
          className="w-full h-screen object-cover rounded-lg border border-blue-700 shadow-blue-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;