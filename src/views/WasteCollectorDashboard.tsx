import React from "react";
import { Sidebar } from "../components/Sidebar";
import { Profile } from "../components/Profile";
import { AssignedRoute } from "../components/AssignedRoute";

export const WasteCollectorDashboard = () => {
  return (
    <div id="webcrumbs" className="w-full flex justify-center">
      <div className="w-full  max-w-[1300px]  bg-neutral-50 shadow-lg rounded-lg flex flex-col md:flex-row">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-6 p-4 md:p-8">
          {/* Header */}
          <header className="w-full bg-neutral-200 text-neutral-950 p-4 rounded-md mb-6 font-title text-lg">
            Waste Collection
          </header>

          {/* Content */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Profile */}
            <Profile />

            {/* Assigned Route */}
            <AssignedRoute />
          </div>
        </div>
      </div>
    </div>
  );
};
