import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className=" py-28 px-6 text-white-900 tracking-wide"
    >
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mb-16 font-bold">
        What People Are Saying
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full sm:w-[45%] lg:w-[30%] bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300"
          >
            <p className="text-gray-600 italic">"{testimonial.text}"</p>

            <div className="flex mt-6 items-center">
              <img
                className="w-12 h-12 mr-4 rounded-full border border-blue-200"
                src={testimonial.image}
                alt={testimonial.user}
              />
              <div>
                <h6 className="text-lg font-semibold text-gray-800">
                  {testimonial.user}
                </h6>
                <span className="text-sm text-gray-500 italic">
                  {testimonial.company}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
