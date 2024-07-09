import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import MainBanner from './components/MainBanner';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div className='sticky top-0 z-10'>
        <Banner bannerText={'10% OFF ON YOUR FIRST PURCHASE'}/>
        <Navbar/>
      </div>
      <MainBanner/>
      <div className='relative bg-white'>
        <FeaturesSection/>
        <Footer/>
      </div>
    </>
  );
};

export default App;