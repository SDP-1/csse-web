import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSlidersH } from "@fortawesome/free-solid-svg-icons"; // Import icons
import { Sidebar } from "@/components/Sidebar";
import { UserTopRight } from "@/components/UserTopRight";

export const AllRoutes = () => {
  return (
    <div id="webcrumbs" className="w-full flex justify-center">
      <div className="w-full flex bg-white shadow-lg rounded-lg">
        {/* Sidebar */}
        {/* <Sidebar /> */}

        {/* Content */}
        <main className="flex-1 flex flex-col gap-6 p-4 md:p-8">
             {/* Top Right User profile */}
        <UserTopRight/>
          <header className="w-full bg-neutral-200 text-neutral-950 p-4 rounded-md mb-6 font-title text-lg">
            Waste Collection
          </header>

          {/* Search Bar */}
          <div className="flex items-center justify-between mb-4">
            <h1 className="font-title text-slate-800 text-2xl"></h1>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search..."
                className="bg-slate-200 p-2 w-[300px] rounded-md"
              />
              {/* Search Button */}
              <button className="w-[40px] h-[40px] bg-slate-200 rounded-md flex justify-center items-center">
                <FontAwesomeIcon icon={faSearch} className="text-slate-800" />
              </button>
              {/* Tune Button */}
              <button className="w-[40px] h-[40px] bg-slate-200 rounded-md flex justify-center items-center">
                <FontAwesomeIcon icon={faSlidersH} className="text-slate-800" />
              </button>
            </div>
          </div>

{/* Table */}
<section className="overflow-hidden rounded-lg border border-gray-200">
  <table className="min-w-full text-sm bg-teal-50" style={{ borderCollapse: "separate", borderSpacing: "10px 0" }}>
    <thead className="bg-white">
      <tr className="bg-white">
        <th className="px-6 py-3 text-left text-sm font-medium text-white bg-teal-600 rounded-md">
          ID
        </th>
        <th className="px-6 py-3 text-left text-sm font-medium text-white bg-teal-600 rounded-md">
          Name
        </th>
        <th className="px-6 py-3 text-left text-sm font-medium text-white bg-teal-600 rounded-md">
          Status
        </th>
        <th className="px-6 py-3 text-left text-sm font-medium text-white bg-teal-600 rounded-md">
          Section
        </th>
        <th className="px-6 py-3 text-left text-sm font-medium text-white bg-teal-600 rounded-md">
          Route ID
        </th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      {[...Array(7)].map((_, index) => (
        <tr key={index} className={`${index % 2 === 0 ? "bg-teal-50" : "bg-white"}`}>
          <td className="px-6 py-4 text-slate-800">001</td>
          <td className="px-6 py-4 text-slate-800">John Doe</td>
          <td className="px-6 py-4 text-slate-800">Idle</td>
          <td className="px-6 py-4 text-slate-800">Section 01</td>
          <td className="px-6 py-4 text-teal-600 hover:underline">Route 001</td>
        </tr>
      ))}
    </tbody>
  </table>
</section>


        </main>
      </div>
    </div>
  );
};
