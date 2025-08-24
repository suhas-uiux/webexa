import { checklistItems } from "../constants";

const Flow = () => {
  return (
    <section
      id="features"
      className="pt-20 pb-16 px-6 min-h-[600px] text-white"
    >
      {/* Section Title */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide font-bold">
        Why Use Our{" "}
        <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
          Tool?
        </span>
      </h2>

      {/* Cards Container */}
      <div className="mt-12 flex justify-center gap-6 flex-wrap sm:flex-nowrap">
        {checklistItems.map((item, index) => (
          <div
            key={index}
            className="flex-1 max-w-[260px] min-w-[220px] min-h-[220px] bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300 text-center flex flex-col justify-between"
          >
            {/* Icon */}
            <div className="flex items-center justify-center h-14 w-14 mb-4 rounded-full bg-blue-100 text-blue-600 shadow-md mx-auto">
              {item.icon}
            </div>

            {/* Title */}
            <h5 className="text-lg font-semibold mb-2 text-gray-800">
              {item.title}
            </h5>

            {/* Description */}
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Flow;
