import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div id="how-it-works" className="relative bg-white py-20 min-h-[600px] text-gray-900">
      <div className="text-center px-4">
        <span className="bg-blue-100 text-blue-600 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide font-bold">
        How it{" "}
        <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
        Works
        </span>
      </h2>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Our technology detection happens in 4 simple steps
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-16 px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl w-full sm:w-[45%] lg:w-[22%] p-6 shadow-sm hover:shadow-md transition duration-300"
          >
            <div className="flex items-center justify-center h-12 w-12 text-blue-600 bg-blue-100 rounded-full mb-4 mx-auto">
              {feature.icon}
            </div>
            <h5 className="text-xl font-semibold text-center mb-2">{feature.text}</h5>
            <p className="text-sm text-center text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
