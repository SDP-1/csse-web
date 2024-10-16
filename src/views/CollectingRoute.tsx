import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { RoutesSidebar } from "../components/RoutesSidebar"; // Import RoutesSidebar
import { RouteDetails } from "../components/RouteDetails"; // Import RouteDetails
import { UserTopRight } from "@/components/UserTopRight";

export const CollectingRoute = () => {
  return (
    <div id="webcrumbs" className="w-full flex justify-center">
      <div className="w-full max-w-[1300px] flex shadow rounded-lg bg-neutral-50">
        {/* Sidebar */}
        <Sidebar />

       

        {/* Main Content */}
        <main className="flex-1 flex flex-col gap-6 p-4 md:p-8">
             {/* Top Right User profile */}
        <UserTopRight/>
          <header className="w-full bg-neutral-200 text-neutral-950 p-4 rounded-md mb-6 font-title text-lg">
            Waste Collection Routes
          </header>

          <div className="flex gap-6">
            {/* Routes Sidebar */}
            <RoutesSidebar /> {/* Use RoutesSidebar component */}
            {/* Route Details */}
            <RouteDetails /> {/* Use RouteDetails component */}
          </div>
        </main>
      </div>
    </div>
  );
};
