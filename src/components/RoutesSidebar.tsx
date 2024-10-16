import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; // Import the search icon

export const RoutesSidebar = () => {
  return (
    <div className="w-[460px] bg-neutral-100 p-4 rounded-lg flex flex-col">
      {/* Search Input */}
      <div className="bg-neutral-300 rounded-md mb-4 flex items-center p-2">
        <input
          className="bg-transparent outline-none w-full placeholder:text-neutral-500"
          type="text"
          placeholder="Search"
        />
        {/* Use FontAwesomeIcon for the search icon */}
        <FontAwesomeIcon icon={faSearch} className="text-neutral-600" />
      </div>

      {/* Route List */}
      <button className="bg-teal-400 p-2 rounded-md mb-2 text-neutral-950">Route 001</button>
      <button className="bg-teal-100 p-2 rounded-md mb-2 text-neutral-600">Route 002</button>
      <button className="bg-teal-100 p-2 rounded-md mb-2 text-neutral-600">Route 003</button>
      <button className="bg-teal-100 p-2 rounded-md mb-2 text-neutral-600">Route 004</button>
      <button className="bg-teal-100 p-2 rounded-md mb-2 text-neutral-600">Route 005</button>
      <button className="bg-teal-100 p-2 rounded-md mb-2 text-neutral-600">Route 006</button>
    </div>
  );
};
