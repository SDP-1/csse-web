import React from "react";

export const UserTopRight = () => {
  return (
    <div className="w-full flex justify-end items-center">
      <span className="mr-4 text-slate-800">Sehan Devinda</span> {/* Username */}
      <img
        src="src/assets/user/defaultUser.jpg" // Replace with actual profile image path
        alt="User Profile"
        className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
      />
    </div>
  );
};
