import React from "react";
import mainBannerImgDesktop from "../assets/mainBannerDesktop.jpg";
import mainBannerImgMobile from "../assets/mainBannerMobile.jpg";

export default function MainBanner() {
  return (
    <div className="w-full h-full sticky sm:top-44 top-32 sm:px-3 px-1">
        <img className="rounded-3xl lg:hidden block" src={mainBannerImgMobile}/>
        <img className="rounded-3xl hidden lg:block" src={mainBannerImgDesktop}/>
    </div>
  );
}
