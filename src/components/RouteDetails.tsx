import React from 'react';

export const RouteDetails = () => {
  return (
    <div className="flex-grow bg-neutral-100 p-6 rounded-lg">
      {/* Route Information */}
      <h2 className="font-title text-2xl mb-4 text-neutral-950">Route 001</h2>
      <p className="text-neutral-700 mb-2">Start Location : Malabe</p>
      <p className="text-neutral-700 mb-2">End Location : Colombo</p>
      <p className="text-neutral-700 mb-2">Estimate Time : 1h 20 m</p>
      <p className="text-neutral-700 mb-2">Distance : 20 km</p>
      <p className="text-neutral-700 mb-4">Assigned Collectors : C001, C003</p>
      <p className="text-neutral-700 mb-6">Last Optimized Date : 2024/09/06</p>
      
      {/* Map */}
      <img
        src="https://tools-api.webcrumbs.org/image-placeholder/280/120/map%20route/1"
        className="w-[280px] h-[120px] object-cover rounded-md mb-6"
        alt="route map"
      />
      
      {/* Buttons */}
      <div className="flex gap-4">
        <button className="bg-teal-400 px-4 py-2 rounded-md text-white">Optimized Route</button>
        <button className="bg-neutral-200 px-4 py-2 rounded-md text-neutral-700">Change Collector</button>
      </div>
    </div>
  );
};
