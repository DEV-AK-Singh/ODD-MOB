import React from "react";
import LogoBlack from "../assets/oddmobLogoBlack.png";

export default function Footer() {
  return (
    <footer className="mt-12 sm:pt-16 2xl:pt-0 max-h-screen overflow-y-scroll">
      <div className="mx-auto max-w-screen px-4 pb-6 pt-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-center max-w-screen-lg mx-auto">
          <p className="mt-12 sm:mt-4 max-w-2xl leading-relaxed text-gray-800 text-left lg:mt-0 text-md sm:text-2xl sm:text-center">
            Our commitment is to provide unparalleled quality because you
            deserve nothing but the finest.
          </p>
        </div>

        <div className="mt-8 sm:mt-16 grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 md:grid-cols-4 lg:grid-cols-6">
          <div className="text-left">
            <p className="text-sm font-medium text-gray-900">HELP</p>

            <ul className="mt-8 space-y-4 text-xs">
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  MY ACCOUNT
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  ITEMS AND SIZES
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  GIFT OPTIONS
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  SHIPPING
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  PAYMENT AND INVOICES
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  MY PURCHASES
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  RETURNS AND REFUNDS
                </a>
              </li>
            </ul>
          </div>

          <div className="text-left">
            <p className="text-sm font-medium text-gray-900">FOLLOW US</p>

            <ul className="mt-8 space-y-4 text-xs">
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  NEWSLETTER
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  INSTAGRAM
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  FACEBOOK
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  X
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  PINTEREST
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  YOUTUBE
                </a>
              </li>
            </ul>
          </div>

          <div className="text-left">
            <p className="text-sm font-medium text-gray-900">COMPANY</p>

            <ul className="mt-8 space-y-4 text-xs">
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  ABOUT US
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  JOIN LIFE
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  OFFICES
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  STORES
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  WORK WITH US
                </a>
              </li>
            </ul>
          </div>

          <div className="text-left">
            <p className="text-sm font-medium text-gray-900">POLICIES</p>

            <ul className="mt-8 space-y-4 text-xs">
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  PRIVACY POLICY

                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  PURCHASE CONDITIONS

                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                 GIFT CARD CONDITIONS


                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  COOKIES SETTINGS

                </a>
              </li>
            </ul>
          </div>

          <div className="text-left md:col-span-4 lg:col-span-2">
            <p className="text-sm font-medium text-gray-900">JOIN OUR NEWSLETTER</p>

            <div className="mx-auto mt-8 max-w-md sm:ms-0">

              <form className="mt-4">
                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>

                  <input
                    className="w-full border-gray-200 border outline-none shadow-md px-6 py-3"
                    type="email"
                    placeholder="Enter your email"
                  />

                  <button
                    className="w-full border-gray-200 border outline-none shadow-md px-6 py-3 bg-black text-white"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-16 border-t border-gray-100 pt-6 pb-6 sm:flex sm:items-center sm:justify-between">
          <p className="text-center text-sm text-gray-500 sm:text-left">
            Copyright &copy; 2024. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
