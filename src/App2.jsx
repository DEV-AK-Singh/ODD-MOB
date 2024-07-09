import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import bgImage from "./assets/website.png";
import whiteLogo from "./assets/oddmobLogoWhite.png";
import blackLogo from "./assets/oddmobLogoBlack.png";
import tee1 from "./assets/Artboard1.png";
import tee2 from "./assets/Artboard2.png";
import tee3 from "./assets/Artboard3.png";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Menu from "./components/Menu";

const App2 = () => {
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);
  const sectionRef4 = useRef(null);
  const sectionRef5 = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Section 1 is in view!");
            document.querySelector('#newDrop').style.border = '1px solid white';
            document.querySelector('#collection').style.border = '1px solid white';
            document.querySelector('#heroImg').src = whiteLogo;
            document.querySelector('#heroImg').style.width = '480px';
            document.querySelector('#heroImg').style.zIndex = 10;
            document.querySelector('#heroImg').style.position = 'absolute';
            document.querySelector('#heroImg').style.top = '50%';
            document.querySelector('#heroImg').style.transform = `translate(0,-50%)`;
            navRef.current.style.color = 'white';
            sectionRef2.current.style.backdropFilter = 'blur(0px)';
            navRef.current.style.display = 'flex';
            document.querySelector('#heroImg').style.opacity = '1';
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef1.current) {
      observer.observe(sectionRef1.current);
    }
    return () => {
      if (sectionRef1.current) {
        observer.unobserve(sectionRef1.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Section 2 is in view!");
            document.querySelector('#newDrop').style.border = '1px solid white';
            document.querySelector('#collection').style.border = '1px solid white';
            document.querySelector('#heroImg').src = whiteLogo;
            document.querySelector('#heroImg').style.width = '240px';
            document.querySelector('#heroImg').style.top = '60px';
            document.querySelector('#heroImg').style.zIndex = 10;
            document.querySelector('#heroImg').style.position = 'fixed';
            navRef.current.style.color = 'white';
            sectionRef2.current.style.backdropFilter = 'blur(10px)';
            sectionRef3.current.style.backgroundColor = 'transparent';
            sectionRef5.current.style.backgroundColor = 'transparent';
            const ratio = sectionRef3.current.clientWidth/sectionRef3.current.clientHeight;
            if(ratio>0.5 && ratio<1){     
              navRef.current.style.display = 'none';
              document.querySelector('#heroImg').style.opacity = '0';
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef2.current) {
      observer.observe(sectionRef2.current);
    }
    return () => {
      if (sectionRef2.current) {
        observer.unobserve(sectionRef2.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Section 3 is in view!");
            document.querySelector('#newDrop').style.border = '1px solid black';
            document.querySelector('#collection').style.border = '1px solid black';
            document.querySelector('#heroImg').src = blackLogo;
            navRef.current.style.color = 'black';
            sectionRef3.current.style.backgroundColor = 'white';
            sectionRef4.current.style.backdropFilter = 'blur(0px)';
            const ratio = sectionRef3.current.clientWidth/sectionRef3.current.clientHeight;
            if(ratio>0.5 && ratio<1){            
              navRef.current.style.display = 'none';
              document.querySelector('#heroImg').style.opacity = '0';
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef3.current) {
      observer.observe(sectionRef3.current);
    }
    return () => {
      if (sectionRef3.current) {
        observer.unobserve(sectionRef3.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Section 4 is in view!");
            document.querySelector('#newDrop').style.border = '1px solid white';
            document.querySelector('#collection').style.border = '1px solid white';
            document.querySelector('#heroImg').src = whiteLogo;
            document.querySelector('#heroImg').style.width = '240px';
            document.querySelector('#heroImg').style.top = '60px';
            document.querySelector('#heroImg').style.zIndex = 10;
            document.querySelector('#heroImg').style.position = 'fixed';
            navRef.current.style.color = 'white';
            sectionRef3.current.style.backgroundColor = 'transparent';
            sectionRef4.current.style.backdropFilter = 'blur(10px)';
            sectionRef5.current.style.backgroundColor = 'transparent';
            const ratio = sectionRef3.current.clientWidth/sectionRef3.current.clientHeight;
            if(ratio>0.5 && ratio<1){            
              navRef.current.style.display = 'none';
              document.querySelector('#heroImg').style.opacity = '0';
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef4.current) {
      observer.observe(sectionRef4.current);
    }
    return () => {
      if (sectionRef4.current) {
        observer.unobserve(sectionRef4.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Section 5 is in view!");
            document.querySelector('#newDrop').style.border = '1px solid black';
            document.querySelector('#collection').style.border = '1px solid black';
            document.querySelector('#heroImg').src = blackLogo;
            navRef.current.style.color = 'black';
            sectionRef5.current.style.backgroundColor = 'white';
            sectionRef2.current.style.backdropFilter = 'blur(0px)';
            navRef.current.style.display = 'flex';
            document.querySelector('#heroImg').style.opacity = '1';
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef5.current) {
      observer.observe(sectionRef5.current);
    }
    return () => {
      if (sectionRef5.current) {
        observer.unobserve(sectionRef5.current);
      }
    };
  }, []);

  const [cart,setCart] = useState(false);
  const [menu,setMenu] = useState(false);

  const toggleCart = () => {
    if(menu){
      setMenu(false);
    }
    setCart(!cart);
  }

  const toggleMenu = () => {
    if(cart){
      setCart(false);
    }
    setMenu(!menu);
  }

  return (
    <>  
      <Cart cart={cart} menu={menu} toggleCart={toggleCart} toggleMenu={toggleMenu}/>
      <Menu cart={cart} menu={menu} toggleCart={toggleCart} toggleMenu={toggleMenu}/>
      <div
        ref={navRef}
        className="fixed top-10 text-white flex justify-between items-center w-full z-10"
      >
        <button id="menu" className="py-2 px-8 block sm:hidden" onClick={toggleMenu}>
          <i class="fa-solid fa-bars text-xl"></i>
        </button>
        <div className="hidden sm:block text-xs">
          <button id="newDrop" className="border border-white py-2 px-6 mx-6">NEW DROPS</button>
          <button id="collection" className="border border-white py-2 px-6">COLLECTIONS</button>
        </div>
        <div className="hidden sm:block text-xs">
          <button className="py-2 me-6">LOGIN</button>
          <button className="py-2 me-6">HELP</button>
          <button className="py-2 me-12" onClick={toggleCart}>SHOPPING BAG</button>
        </div>
        <button className="py-2 me-8 block sm:hidden" onClick={toggleCart}>
          <i class="fa-solid fa-bag-shopping text-xl relative">
            <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold border border-gray-200 rounded-full -top-3 -end-3 opacity-75">0</div>
          </i>          
        </button>
      </div>
      <div
        id="scroll-container"
        className="h-screen w-screen bg-black bg-center bg-cover bg-fixed overflow-y-scroll z-0 relative snap-mandatory snap-always snap-y scroll-smooth"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div
          id="snapEle1"
          ref={sectionRef1}
          className="w-full h-screen flex justify-center items-center snap-start snap-always"
        >
          <img
            src={whiteLogo}
            id="heroImg"
          />
        </div>
        <div
          id="snapEle2"
          ref={sectionRef2}
          className="w-full h-screen flex justify-evenly items-center snap-start snap-always"
        >
          <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-16 w-full sm:mx-36 sm:mt-20 2xl:mt-12">
            <Card mode={"dark"} src={tee1} Name={"Black Oversized Tee"}/>
            <Card mode={"dark"} src={tee2} hide={true} Name={"White Oversized Tee"}/>
            <Card mode={"dark"} src={tee3} hide={true} Name={"Gray Oversized Tee"}/>
          </div>
        </div>
        <div
          id="snapEle3"
          ref={sectionRef3}
          className="w-full h-screen flex justify-evenly items-center backdrop-blur-sm snap-start snap-always sm:hidden"
        >
          <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-16 w-full sm:mx-36 sm:mt-20 2xl:mt-12">
            <Card src={tee1} hide={true} Name={"Black Oversized Tee"}/>
            <Card src={tee2} Name={"White Oversized Tee"}/>
            <Card src={tee3} hide={true} Name={"Gray Oversized Tee"}/>
          </div>
        </div>
        <div
          id="snapEle4"
          ref={sectionRef4}
          className="w-full h-screen flex justify-evenly items-center backdrop-blur-sm snap-start snap-always sm:hidden"
        >
          <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-16 w-full sm:mx-36 sm:mt-20 2xl:mt-12">
            <Card mode={"dark"} src={tee1} hide={true} Name={"Black Oversized Tee"}/>
            <Card mode={"dark"} src={tee2} hide={true} Name={"White Oversized Tee"}/>
            <Card mode={"dark"} src={tee3} Name={"Gray Oversized Tee"}/>
          </div>
        </div>
        <div
          id="snapEle5"
          ref={sectionRef5}
          className="w-full h-screen flex justify-evenly items-center backdrop-blur-sm snap-start snap-always"
        >
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default App2;
