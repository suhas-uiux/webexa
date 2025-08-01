import { checklistItems } from "../constants";

const Flow = () => {
  return (
    <section
      id="features"
      className="bg-white pt-20 pb-16 px-6 min-h-[600px] text-gray-900"
    >
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide font-bold">
        Why Use Our{" "}
        <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
          Tool?
        </span>
      </h2>

      <div className="mt-12 flex flex-wrap justify-center gap-6 px-4">
        {checklistItems.map((item, index) => (
          <div
            key={index}
            className="w-[300px] min-h-[260px] bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 text-center flex flex-col justify-between"
          >
            <div className="flex items-center justify-center h-14 w-14 mb-4 rounded-full bg-blue-100 text-blue-600 shadow-md mx-auto">
              {item.icon}
            </div>
            <h5 className="text-xl font-semibold mb-2 text-gray-800">
              {item.title}
            </h5>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Flow;
