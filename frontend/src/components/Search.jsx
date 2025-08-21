import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";


const Search = () => {
  const [username, setUsername] = useState({ email: "Guest" });
  const [searchCriteria, setSearchCriteria] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    travelers: 1,
  });
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();

  // Load user data from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUsername(user);
      // Load search results specific to the logged-in user
      const storedSearchResults = localStorage.getItem(user.email); // Using email as key
      if (storedSearchResults) {
        setSearchResults(JSON.parse(storedSearchResults));
      }
    } else {
      setUsername({ email: "Guest" });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({ ...searchCriteria, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newResult = {
      destination: searchCriteria.destination,
      startDate: searchCriteria.startDate,
      endDate: searchCriteria.endDate,
      travelers: searchCriteria.travelers,
    };

    // Add the new result to the search results array
    const updatedResults = [...searchResults, newResult];
    setSearchResults(updatedResults);

    // Save the updated search results to localStorage
    localStorage.setItem(username.email, JSON.stringify(updatedResults)); // Store under the user's email

    // Reset search criteria after submission
    setSearchCriteria({
      destination: "",
      startDate: "",
      endDate: "",
      travelers: 1,
    });
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 relative">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-600 text-center mb-6">
          Search Your Trip - {username.email}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Destination */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Destination</label>
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
            <label className="block text-sm font-medium text-gray-700">Start Date</label>
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
            <label className="block text-sm font-medium text-gray-700">End Date</label>
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
            <label className="block text-sm font-medium text-gray-700">Number of Travelers</label>
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

      {/* Display all search results below the form */}
      {searchResults.length > 0 && (
        <div className="mt-8 bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-bold text-blue-600">Search Results:</h2>
          <div className="mt-4">
            {searchResults.map((result, index) => (
              <div key={index} className="mb-4">
                <p><strong>Destination:</strong> {result.destination}</p>
                <p><strong>Start Date:</strong> {result.startDate}</p>
                <p><strong>End Date:</strong> {result.endDate}</p>
                <p><strong>Travelers:</strong> {result.travelers}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;