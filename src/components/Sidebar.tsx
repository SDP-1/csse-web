import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRecycle,
  faHouse,
  faBars,
  faClipboard,
  faRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Create a context for sidebar state (expanded or collapsed)
const SidebarContext = createContext({ expanded: true });

import { ReactNode } from "react";

export const Sidebar = ({ children }: { children: ReactNode }) => {
  const [expanded, setExpanded] = useState(true); // Sidebar expanded state
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed top-4 left-0 h-full max-h-[680px] transition-all duration-300 ${
          expanded ? "w-[230px]" : "w-[80px]"
        } bg-teal-100 border border-teal-700 rounded-t-3xl rounded-b-3xl flex flex-col items-center py-5 mx-4`}
      >
        {/* Logo */}
        <div className="w-[50px] h-[50px] flex items-center justify-center bg-teal-200 border border-teal-700 rounded-full mb-8">
          <FontAwesomeIcon
            icon={faRecycle}
            className="text-teal-700 text-2xl"
          />
        </div>

        <button
          onClick={() => setExpanded((curr) => !curr)} // Toggle sidebar expanded state
          className="p-1.5 mb-4 rounded-lg bg-teal-200 hover:bg-teal-300"
        >
          {expanded ? (
            <span className="text-teal-700 text-xl">{"<<"}</span>
          ) : (
            <span className="text-teal-700 text-xl">{">>"}</span>
          )}
        </button>

        <SidebarContext.Provider value={{ expanded }}>
          {/* Sidebar Items */}
          <div className="flex-1 space-y-4">
            <SidebarItem icon={faHouse} text="Home" to="/" />
            <SidebarItem icon={faUser} text="Profile" to="/waste-collector" />
            <SidebarItem
              icon={faBars}
              text="Collecting Route"
              to="/collecting-route"
            />
            <SidebarItem
              icon={faClipboard}
              text="All Routes"
              to="/all-routes"
            />
          </div>

          {/* Logout Icon */}
          <button className="w-[40px] h-[40px] mt-auto mb-4 text-teal-900 border border-teal-700 rounded-full">
            <FontAwesomeIcon
              icon={faRightToBracket}
              className="text-teal-700 text-2xl"
            />
          </button>
        </SidebarContext.Provider>
      </aside>

      {/* Main content */}
      <main
        className={`flex-1 transition-all duration-300 ${
          expanded ? "ml-[230px]" : "ml-[80px]"
        }  p-4`}
      >
        {children}
      </main>
    </div>
  );
};

// SidebarItem component to handle individual sidebar items
interface SidebarItemProps {
  icon: any;
  text: string;
  to: string;
}

const SidebarItem = ({ icon, text, to }: SidebarItemProps) => {
  const { expanded } = useContext(SidebarContext); // Get expanded state from context
  const navigate = useNavigate();
   // Determine if this item is active
   const isActive = location.pathname === to;

  return (
    <button
      onClick={() => navigate(to)}
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group w-full h-12 text-teal-900 ${
        isActive ? "bg-teal-300" : "hover:bg-teal-200"
      }`}
    >
      {/* Icon */}
      <FontAwesomeIcon icon={icon} className="text-teal-700 text-2xl" />

      {/* Label */}
      <span
        className={`ml-3 overflow-hidden transition-all duration-300 ${
          expanded ? "w-full" : "w-0"
        }`}
      >
        {text}
      </span>

      {/* Tooltip for collapsed state */}
      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-teal-100 text-teal-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </button>
  );
};
