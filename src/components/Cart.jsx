import React from "react";
import CartProduct from "./CartProduct";
import tee1 from "../assets/Artboard1.png";
import tee2 from "../assets/Artboard2.png";
import tee3 from "../assets/Artboard3.png";

export default function Cart({ cart, toggleCart }) {
  return (
    <>
      <div
        className={`fixed h-screen w-screen backdrop-blur-sm bg-black bg-opacity-50 z-50 right-0 top-0 ${
          cart ? "" : "translate-x-full"
        }`}
        onClick={toggleCart}
      ></div>
      <div
        className={`fixed h-screen sm:w-96 w-full bg-white right-0 top-0 z-[60] transition-all ${
          cart ? "" : "translate-x-full"
        }`}
      >
        <div className="h-full w-full">
          <div className="absolute border-b border-black top-0 h-20 flex justify-between items-end w-full px-4 pb-4 bg-white">
            <span class="text-sm font-bold">Shopping Bag</span>
            <i class="fa-solid fa-x" onClick={toggleCart}></i>
          </div>
          <div className="h-full w-full pt-24 pb-36 overflow-y-auto">
              <CartProduct teeImg={tee1}/>
              <CartProduct teeImg={tee2}/>
              <CartProduct teeImg={tee3}/>
          </div>
          <div className="absolute border-t border-black bottom-0 h-36 flex items-center w-full px-4 py-4 bg-white">
            <div className="w-full">
              <div className="flex justify-between text-xs w-full font-bold pb-2">
                <span>ESTIMATED TOTAL</span>
                <span>RS. 9,772.00</span>
              </div>
              <div className="flex justify-between text-xs w-full">
                <span>TAX INCLUDED. SHIPPING AND DISCOUNTS CALCULATED AT CHECKOUT.</span>
              </div>
              <div className="flex justify-between text-xs w-full">
                <button className="border border-black text-xs py-2 px-6 my-4 w-full">
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
