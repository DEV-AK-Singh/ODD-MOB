import React from "react";

export default function Menu({ menu, toggleMenu }) {
  return (
    <>
      <div
        className={`fixed h-screen w-screen backdrop-blur-sm bg-black bg-opacity-50 z-50 left-0 top-0 ${
          menu ? "" : "-translate-x-full"
        }`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`fixed h-screen w-80 bg-white left-0 top-0 z-[60] transition-all ${
          menu ? "" : "-translate-x-full"
        }`}
      >
        <div className="h-full w-full">
          <div className="mt-12 flex justify-between items-center w-full px-4 mb-4">
            <i class="fa-solid fa-x" onClick={toggleMenu}></i>
            <span class="text-sm font-bold">Menu</span>
          </div>
          <hr />
          <div className="px-4">
            <button className="border border-black text-xs py-2 px-6 my-4 w-full">
              NEW DROPS
            </button>
            <button className="border border-black text-xs py-2 px-6 w-full">
              COLLECTIONS
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
