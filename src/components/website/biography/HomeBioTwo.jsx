import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

const HomeBioTwo = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="relative bg-black overflow-hidden font-Roman text-white lg:py-40"
      data-aos="zoom-in"
    >
      <div>
        <p className=" md:text-4xl mb-10 font-serif font-bold text-center md:mb-16">
          HER SCHOOL LIFE
        </p>
      </div>
      <div className="max-w-screen-lg  overflow-hidden bg-[#390101]  mx-auto flex flex-col md:flex-row-reverse items-center justify-center mt-2 md:mt-9 ">
        <div className="md:w-1/2 md:ml-[14%]">
          <img src={'/images/pic2.jpg'} alt="my profile" className=" mt-[-.51%] sm:mx-[-.1%]" />
        </div>
        <div className="flex flex-col max-w-sm items-center justify-center md:w-1/2 text-slate-300 md:p-6">
          <p className="sm:text-white sm:px-4 sm:mx-auto max-w-sm md:max-w-md font-Roman sm:py-6">
            Ariel's journey during her studies at the Nyundo School of Music was nothing short of
            extraordinary. After successfully auditioning for a scholarship in 2015, she eagerly
            embarked on this new chapter of her life, which officially began in 2016. As Ariel
            stepped onto the picturesque campus of Nyundo School of Music, located in the heart of
            Rwanda, she felt a surge of excitement and determination. The school was renowned for
            its rich musical heritage and rigorous training programs, making it the perfect place
            for her to nurture her passion for music.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBioTwo;
