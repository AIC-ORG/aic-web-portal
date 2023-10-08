/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import HeroImage from '@/assets/Inwedding.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

const HomeBio = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="relative bg-black overflow-hidden " data-aos="fade-up">
      <div>
        <p className="md:text-4xl mb-10 font-bold text-center text-white my-32">
          THE START OF HER JOURNEY
        </p>
      </div>
      <div className="max-w-screen-lg  my-12 overflow-hidden bg-[#390101]  mx-auto flex flex-col md:flex-row items-center justify-center   mt-9  ">
        <div className=" md:mt-[-10px] md:w-1/2 md:ml-[-7%] h-100">
          <img src={HeroImage} alt="my profile" className=" mt-[-.51%] sm:mx-[-.21%] " />
        </div>

        <div className="flex py-3 flex-col items-center justify-center md:w-1/2 text-slate-300 md:p-6">
          <p className="sm:text-white sm:px-4 sm:mx-auto max-w-sm md:max-w-md font-Roman">
            Once upon a time, in the vibrant city of Kigali, there lived a young and talented
            Rwandan girl named Ariel Wayz. Her real names are Uwayezu Ariell Wayz was born in 2000
            in Rubavu, Western Province as the fifth child in a family of eight. Her mother sung in
            Orchestre Ingeri during the 1990s May that's the source of incredible talent. From a
            very young age, Ariel was drawn to the world of music. She would often sneak into local
            music studios and watch in awe as musicians crafted beautiful melodies. However, Wayz's
            family faced financial difficulties, and pursuing her musical dreams seemed impossible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBio;
