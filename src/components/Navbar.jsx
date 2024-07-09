import React from "react";
import LogoBlack from "../assets/oddmobLogoBlack.png";
export default function Navbar() {
  return (
    <header className="shadow-md bg-white">
      <div className="mx-auto max-w-screen px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 sm:h-28 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <span>
              <a href="#"><i class="fa-solid fa-bars text-xl sm:text-3xl text-black"></i></a>
            </span>
            <span>
              <a href="#" className="text-md font-light sm:block hidden">NEW DROP</a>
            </span>
            <span>
              <a href="#" className="text-md font-light sm:block hidden">COLLECTION</a>
            </span>
          </div>

          <div className="block h-full">
            <img src={LogoBlack} className="h-full p-2 sm:p-4" alt="Odd Mob Logo" />
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <span>
              <a href="#" className="text-md font-light sm:block hidden">LOGIN</a>
            </span>
            <span>
              <a href="#" className="text-md font-light sm:block hidden">HELP</a>
            </span>
            <span>
              <a href="#" className="text-md font-light sm:block hidden">SHOPPING BAG (1)</a>
            </span>
            <span>
                <a href="#"><i class="fa-solid text-xl sm:text-3xl fa-cart-shopping sm:hidden block"></i></a>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
