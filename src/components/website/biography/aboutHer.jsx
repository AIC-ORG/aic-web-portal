import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import 'aos/dist/aos.css';
const AboutHer = () => {
  return (
    <div
      data-aos="fade-right"
      className="w-auto h-auto bg-black  text-white   font-Roman md:py-6 md:mt-80 inset-10 z-0"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-auto bg-[#390101] ">
        <div className="">
          <p className="text-xl md:my-20 text-center">
            She is a talented Rwandan singer and songwriter whose music transcends borders. Her
            soulful melodies and lyrics carry messages of love, unity, and hope. Ariel's unique
            blend of traditional Rwandan rhythms with modern sounds has earned her a devoted
            following both in Rwanda and internationally. Through her music, she celebrates her
            culture and spreads a message of harmony and positivity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHer;
