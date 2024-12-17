import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

function Banner({ query, handleInputChange }) {
  const [location, setLocation] = useState("");

  // Handle location input change
  const handleLocationChange = (e) => {
    setLocation(e.target.value); // Update location state
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14 mt-16">
      <h1 className="text-5xl font-bold text-primary mb-3">
        Find your <span className="text-blue">new job</span> today
      </h1>
      <p className="text-lg text-black/70 mb-8">
        Thousands of jobs in the computer, engineering and technology sectors are waiting for you
      </p>

      <form>
        <div className="flex justify-start md:flex-row flex-col md:gap-0 gap-4">
          <div className="flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full">
            <input
              type="text"
              name="title"
              placeholder="What position are you looking for"
              className="block flex-1 border-0 bg-transparent p-2 py-1.5 pl-8 text-black placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6 outline-none"
              onChange={handleInputChange}
              value={query} // Still bind the query state
            />
            <CiSearch className="absolute mt-2.5 ml-2 text-primary" />
          </div>

          <div className="flex md:rounded-s-none rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3 w-full">
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-black placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6 outline-none"
              onChange={handleLocationChange} // Handle location input change
              value={location} // Bind the location state
            />
            <FaLocationDot className="absolute mt-2.5 ml-2 text-primary" />
          </div>

          <button type="submit" className="bg-blue py-2 px-8 text-white md:rounded-s-none rounded">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Banner;
