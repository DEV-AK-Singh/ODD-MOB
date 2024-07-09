import React from "react";

export default function Card({mode,src,hide,Name}) {
  const invColor = (mode=="dark") ? "white" : "black"; 
  return (
    <div>
      <a href="#" className={`group h-screen sm:h-fit flex items-center justify-center max-w-[400px] sm:w-fit mx-auto sm:border-${invColor} sm:border p-2 ${(hide)?'hidden sm:block':'block'}`}>
        <div className="relative">
        <button
          class="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
        >
          <span class="sr-only">Wishlist</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
        <img
          src={src}
          alt=""
          className="w-full object-cover sm:h-[300px] 2xl:h-[450px]"/>
        <div className="mt-1.5">
          <p className={`text-xs text-${invColor}`}>Space Grey</p>

          <div className="mt-1.5 flex gap-1">
            <form>
              <fieldset>
                <legend className="sr-only">Color</legend>
              </fieldset>

              <div className="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
                <div>
                  <input type="checkbox" id="ColorSg" className="sr-only" />

                  <label
                    htmlFor="ColorSg"
                    className="block size-4 cursor-pointer bg-[#595759] transition hover:!opacity-100"
                  >
                    <span className="sr-only"> Space Gray </span>
                  </label>
                </div>

                <div>
                  <input type="checkbox" id="ColorS" className="sr-only" />

                  <label
                    htmlFor="ColorS"
                    className="block size-4 cursor-pointer bg-[#d2d3d4] transition hover:!opacity-100"
                  >
                    <span className="sr-only"> Silver </span>
                  </label>
                </div>

                <div>
                  <input type="checkbox" id="ColorP" className="sr-only" />

                  <label
                    htmlFor="ColorP"
                    className="block size-4 cursor-pointer bg-[#d89f97] transition hover:!opacity-100"
                  >
                    <span className="sr-only"> Pink </span>
                  </label>
                </div>

                <div>
                  <input type="checkbox" id="ColorG" className="sr-only" />

                  <label
                    htmlFor="ColorG"
                    className="block size-4 cursor-pointer bg-[#afbfab] transition hover:!opacity-100"
                  >
                    <span className="sr-only"> Pink </span>
                  </label>
                </div>

                <div>
                  <input type="checkbox" id="ColorSb" className="sr-only" />

                  <label
                    htmlFor="ColorSb"
                    className="block size-4 cursor-pointer bg-[#91a5bb] transition hover:!opacity-100"
                  >
                    <span className="sr-only"> Pink </span>
                  </label>
                </div>
              </div>
            </form>
          </div>

          <div className="mt-3 flex justify-between text-sm">
            <h3 className={`text-${invColor} group-hover:underline group-hover:underline-offset-4`}>
              {Name}
            </h3>

            <p className={`text-${invColor}`}>₹ 3999</p>
          </div>
        </div>
        </div>
      </a>
    </div>
  );
}
