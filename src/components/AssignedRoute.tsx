import React from "react";

export const AssignedRoute = () => {
  return (
    <section className="w-full md:w-[520px] bg-white rounded-lg shadow-lg p-6">
      <h2 className="font-title text-xl text-neutral-900">Assigned Route</h2>
      <div className="mt-4 text-sm text-neutral-700">
        <p>
          <span className="font-semibold">Route Assigned :</span> Route 001
        </p>
        <p>
          <span className="font-semibold">Region :</span> Colombo Suburbs
        </p>
        <div className="flex flex-col md:flex-row mt-2 justify-between">
          <p>
            <span className="font-semibold">From :</span> Kaduwela
          </p>
          <p>
            <span className="font-semibold">To :</span> Malabe
          </p>
        </div>
      </div>

      {/* Route Map */}
      <div className="mt-4">
        <img
          src="https://tools-api.webcrumbs.org/image-placeholder/400/200/map/1"
          alt="Map"
          className="w-full h-[180px] md:h-[200px] object-cover rounded-md"
        />
      </div>

      {/* Button */}
      <button className="bg-teal-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-teal-700">
        View Assigned Route History
      </button>
    </section>
  );
};
