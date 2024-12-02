import React, { useState } from "react";

const Search = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    travelers: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({ ...searchCriteria, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const resultMessage = `
      Destination: ${searchCriteria.destination}
      Start Date: ${searchCriteria.startDate}
      End Date: ${searchCriteria.endDate}
      Travelers: ${searchCriteria.travelers}
    `;
    

    alert(`Search Criteria:\n${resultMessage}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-600 text-center mb-6">
          Search Your Trip
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Destination */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Destination
            </label>
            <input
              type="text"
              name="destination"
              value={searchCriteria.destination}
              onChange={handleInputChange}
              placeholder="Enter destination"
              className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Start Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              value={searchCriteria.startDate}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* End Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              End Date
            </label>
            <input
              type="date"
              name="endDate"
              value={searchCriteria.endDate}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Travelers */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Number of Travelers
            </label>
            <input
              type="number"
              name="travelers"
              value={searchCriteria.travelers}
              onChange={handleInputChange}
              min="1"
              className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;