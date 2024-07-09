import React, { useState } from "react";

export default function CartProduct({teeImg,price}) {
    const [proCnt,setProCnt] = useState(1);
    const incrementCnt = () => {
        if(proCnt<10){
            setProCnt(proCnt+1);
        }
    }
    const decrementCnt = () => {
        if(proCnt>1){
            setProCnt(proCnt-1);
        }
    }
  return <div className="w-full flex justify-between px-2 py-2">
        <div className="w-1/4">
            <img src={teeImg} className="w-full"/>
        </div>
        <div className="w-3/4">
            <div className="w-full flex justify-between items-center text-xs px-2">
                <small className="font-bold">UNISEX EMBOSSED SET</small>
                <small className="font-bold">RS. 4,249.00</small>
            </div>
            <div className="w-full flex justify-start items-center text-xs px-2 mb-2">
                <small className="font-normal">RS. 4,249.00</small>
            </div>
            <div className="w-full flex justify-start items-center text-xs px-2 mb-4">
                <small className="font-semibold">SIZE : S</small>
            </div>
            <div className="h-auto w-full px-2 mb-2 flex justify-between items-center">
                <div class="inline-flex items-center justify-center py-1 text-black border border-black">
                    <button onClick={decrementCnt} class="inline-flex size-8 items-center justify-center rtl:rotate-180">
                        <i class="fa-solid fa-minus"></i>
                    </button>

                    <span class="h-4 w-px bg-black/25" aria-hidden="true"></span>

                    <div>
                        <label for="PaginationPage" class="sr-only">Page</label>
                        <input
                        type="number"
                        class="h-8 w-12 rounded border-none bg-transparent p-0 text-center text-xs font-medium [-moz-appearance:_textfield] focus:outline-none focus:ring-inset focus:ring-white [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                        value={proCnt}
                        id="PaginationPage"
                        />
                    </div>

                    <span class="h-4 w-px bg-black/25"></span>

                    <button onClick={incrementCnt} class="inline-flex size-8 items-center justify-center rtl:rotate-180">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
                <button>
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>
  </div>;
}
