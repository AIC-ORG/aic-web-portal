import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const TriangleDiv = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      name="MainBio"
      className="lg:relative text-white bg-black lg:max-h-screen md:py-6 md:inset-0 md:z-10 lg:inset-0 xl:z-10"
    >
      <div className="h-[60vh] relative">
        <img
          src={'/images/pic6.jpg'}
          alt="Random Image"
          className="w-full h-[-100%] object-cover"
        />
      </div>
      <div className="hidden md:block absolute right-0 top-[112vw]">
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
          <polygon points="200,0 200,200 0,200" fill="black" />
          <text x="90" y="160" fill="white" className="font-bold px-2">
            BIOGRAPHY
          </text>
        </svg>
      </div>
    </div>
  );
};

export default TriangleDiv;
