import Image from "next/image";
import heroImage from "../../public/Hero.png";
import React, { useEffect, useRef } from "react";
import { gsap, Power4 } from "gsap";

const Hero = () => {
  let animation = useRef(null)
  let tl = gsap.timeline({ repeat: -1 });
  
  useEffect(() => {
  
    tl.to(".animation", {
      width: "120vw",
      duration: 1,
      ease: Power4.easeOut,
      delay: 2,
      
    })
      .to(".animation", {
        duration: 1,
        transform: "translateX(40%)",
        width: "120vw",
        ease: Power4.easeOut,
        
      })
      .to(".animation", {
        duration: 1,
        transform: "translateX(-100px)",
        width: "60vw",
        ease: Power4.easeOut,
        
      });
      
  }, []);
  return (
    <section className="px-2 py-24 bg-[#000] text-white overflow-hidden z-[-10]">
      {/* <div className="h-[150px] w-[60vw] bg-[#0B1025] rounded-full transform translate-x-[-100px]  animation "></div> */}
      <div className="md:flex items-center justify-around ">
        <div className=" md:w-3/5 px-4 relative">
          <h2 className="font-extrabold text-4xl text-skin-base my-4 leading-tight lg:text-7xl tracking-tighter mb-6 
            bg-gradient-to-r bg-clip-text text-transparent
            from-[#15EFFB] via-[#110CE2] to-purple-500
            animate-text">
            Leave me<br />
            a message on my birthday
          </h2>
          <p className="text-base text-skin-muted dark:text-skin-darkMuted lg:text-2xl sm:mb-14 mb-10">
          Leave a comment below. It could be anything – appreciation, information, wisdom, or even criticism, All views are welcome!
          Actually Do it I dare you 👇
          </p>
        </div>
        <div className="w-10/12 md:w-1/3 mx-auto md:mx-0 my-8 order-2 ">
          <Image src={heroImage} alt="hero"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;