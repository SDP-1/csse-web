import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { UserTopRight } from "@/components/UserTopRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser, // Updated from faPerson
  faRecycle,
  faTrash,
  faDollarSign,
  faUsers,
  faTruck,
  faChartPie,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";

export const DashBoard = () => {
  return (
    <section id="webcrumbs" className="w-full flex justify-center">
      <div className="w-full bg-neutral-50 shadow-lg rounded-lg flex flex-col md:flex-row">
        {/* Sidebar */}
        {/* <Sidebar /> */}

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col gap-6 p-4 md:p-8">
          {/* Header */}

          {/* Top Right User profile */}
          <UserTopRight />
          <header className="w-full bg-neutral-200 text-neutral-950 p-3 rounded-md mb-4 items-center">
            <h1 className="font-title text-lg">Waste Collection</h1>
            <p className="text-teal-800 text-sm">Lorem Ipsum</p>
          </header>

          <h2 className="text-teal-900 font-semibold text-lg mb-4">
            Dashboard Overviews
          </h2>
          {/* Dashboard Overview Cards */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {/* Card 1 */}
            <div className="bg-teal-600 text-white rounded-md p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faUser} className="text-2xl" />
                <p className="text-sm">Total Customers</p>
              </div>
              <span className="text-3xl font-bold">88</span>
            </div>
            {/* Card 2 */}
            <div className="bg-teal-600 text-white rounded-md p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faRecycle} className="text-2xl" />
                <p className="text-sm">Total Garbage (Kg)</p>
              </div>
              <span className="text-3xl font-bold">548</span>
            </div>
            {/* Card 3 */}
            <div className="bg-teal-600 text-white rounded-md p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faTrash} className="text-2xl" />
                <p className="text-sm">Total Bins</p>
              </div>
              <span className="text-3xl font-bold">88</span>
            </div>
            {/* Card 4 */}
            <div className="bg-teal-600 text-white rounded-md p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faDollarSign} className="text-2xl" />
                <p className="text-sm">Total Revenue ($)</p>
              </div>
              <span className="text-3xl font-bold">145,000</span>
            </div>
            {/* Card 5 */}
            <div className="bg-teal-600 text-white rounded-md p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faUsers} className="text-2xl" />
                <p className="text-sm">Total Employees</p>
              </div>
              <span className="text-3xl font-bold">10</span>
            </div>
            {/* Card 6 */}
            <div className="bg-teal-600 text-white rounded-md p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faTruck} className="text-2xl" />
                <p className="text-sm">Total Vehicles</p>
              </div>
              <span className="text-3xl font-bold">4</span>
            </div>
          </div>
          {/* Charts Section */}
          <div className="grid grid-cols-2 gap-4">
            {/* Earnings Overview */}
            <div className="bg-gray-100 p-4 rounded-md flex flex-col justify-between">
              <h3 className="text-teal-900 font-semibold mb-3">
                Earnings Overview
              </h3>
              <div className="flex justify-center">
                <FontAwesomeIcon
                  icon={faChartBar}
                  className="text-teal-700 text-6xl"
                />
              </div>
            </div>
            {/* Revenue Source */}
            <div className="bg-gray-100 p-4 rounded-md flex flex-col justify-between">
              <h3 className="text-teal-900 font-semibold mb-3">
                Revenue Source
              </h3>
              <div className="flex justify-center">
                <FontAwesomeIcon
                  icon={faChartPie}
                  className="text-teal-700 text-6xl"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};
