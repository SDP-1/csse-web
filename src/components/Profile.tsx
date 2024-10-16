import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

export const Profile = () => {
  return (
    <section className="w-full md:w-[520px] bg-white rounded-lg shadow-lg p-6">
      {/* Profile Header */}
      <div className="flex flex-col gap-4">
        <h2 className="font-title text-xl text-neutral-900">Profile</h2>
        <div className="flex items-start gap-4">
          <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-neutral-300 rounded-full"></div>
          <div>
            <p className="text-sm text-neutral-700">
              <span className="font-semibold">Name</span> Dasun Wickramasoriya
            </p>
            <p className="text-sm text-neutral-700">
              <span className="font-semibold">ID</span> IW 002
            </p>
            <p className="text-sm text-neutral-700 flex items-center gap-1">
              <span className="font-semibold">Status</span> Working
              <span className="w-[8px] h-[8px] bg-green-600 rounded-full"></span>
            </p>
          </div>
        </div>
      </div>

      {/* Performance Section */}
      <div className="mt-6">
        <h3 className="font-title text-neutral-900">Performance</h3>
        <div className="border rounded-md p-4 mt-4 text-sm text-neutral-700">
          <p>Routes Completed : 04</p>
          <p>
            Average Time on Route : <strong>1h 38m</strong>
          </p>
          <p>No. Of Complaints: N/A</p>
          <p className="mt-2">Ratings :</p>
          <div className="flex gap-2 text-teal-600 text-lg mt-2">
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={regularStar} />
          </div>
        </div>
      </div>
    </section>
  );
};
