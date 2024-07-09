import React from 'react';

const BannerText = ({bannerText}) => {
  return (
    <>
      <small className={`text-black mx-6 sm:mx-12 md:mx-12 font-normal sm:hidden block`} style={{fontSize:'8px'}}>{bannerText}</small>
      <small className={`text-black mx-6 sm:mx-12 md:mx-12 font-normal sm:block hidden`}>{bannerText}</small>
    </>  
  );
}

const Banner = ({bannerText}) => {
  return (
  <div className="banner-scroll-container">
    <div className="banner-container py-2 border-b border-t border-black">
      <BannerText bannerText={bannerText} />
      <BannerText bannerText={bannerText} />
      <BannerText bannerText={bannerText} />
      <BannerText bannerText={bannerText} />
      <BannerText bannerText={bannerText} />
      <BannerText bannerText={bannerText} />
      <BannerText bannerText={bannerText} />
      <BannerText bannerText={bannerText} />
      <BannerText bannerText={bannerText} />
      <BannerText bannerText={bannerText} />
    </div>
  </div>
  );
};

export default Banner;