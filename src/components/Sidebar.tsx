import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRecycle,
  faHouse,
  faBars,
  faClipboard,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

export const Sidebar = () => {
  return (
    <aside className="w-[80px] h-[650px] flex flex-col items-center py-4 bg-teal-100 border border-teal-700 rounded-t-3xl rounded-b-3xl">
      {/* Logo */}
      <div className="w-[50px] h-[50px] flex items-center justify-center bg-teal-200 border border-teal-700 rounded-full mb-8">
        <FontAwesomeIcon icon={faRecycle} className="text-teal-700 text-2xl" />
      </div>

      {/* Home icon */}
      <button className="w-[40px] h-[40px] flex items-center justify-center mb-4 text-teal-900 border border-teal-700 rounded-full">
        <FontAwesomeIcon icon={faHouse} className="text-teal-700 text-2xl" />
      </button>

      {/* List icon */}
      <button className="w-[40px] h-[40px] flex items-center justify-center mb-4 text-teal-900 border border-teal-700 rounded-full">
        <FontAwesomeIcon icon={faBars} className="text-teal-700 text-2xl" />
      </button>

      {/* Clipboard Icon */}
      <button className="w-[40px] h-[40px] flex items-center justify-center mb-4 text-teal-900 border border-teal-700 rounded-full">
        <FontAwesomeIcon
          icon={faClipboard}
          className="text-teal-700 text-2xl"
        />
      </button>

      {/* Logout Icon */}
      <button className="w-[40px] h-[40px] mt-auto mb-4 text-teal-900 border border-teal-700 rounded-full">
        <FontAwesomeIcon
          icon={faRightToBracket}
          className="text-teal-700 text-2xl"
        />
      </button>
    </aside>
  );
};
