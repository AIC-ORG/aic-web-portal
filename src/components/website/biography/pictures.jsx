import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import img2 from '../../assets/pic5.jpg';

import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
const Pictures = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const handleRefreshAndScrollTop = () => {
    // Refresh the page

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <div className="relative md:mx-24 text-white my-12 bg-black" data-aos="zoom-out-right">
      <p className="text-center text-xl py-2 md:my-12 font-serif font-bold md:text-4xl">
        HER NEW STORY
      </p>
      {/* Image */}
      <div className="max-h-80vh bg-bg-african text-center text-white overflow-hidden flex mb-32 flex-col">
        <div className="h-[40%] relative">
          <img src={img2} alt="Random Image" className="w-full h-[50vh] object-cover" />
        </div>

        {/* Text content */}
        <div className="w-full p-8" data-aos="fade-down-right">
          <p className="text-start py-4 md:px-20 ">
            Now, as she stands on the cusp of a promising music career, Ariel feels a mixture of
            emotions. She's proud of how far she's come, from the girl who strummed a borrowed
            guitar in the dark to a rising star in the Rwandan music scene. She's grateful for the
            support of her family, friends, and fans who believed in her when times were tough.
            Ariel's heart is filled with joy, knowing that her music has the power to touch the
            lives of others and inspire them to overcome their own challenges.
          </p>
          <p className="text-start py-4 md:px-20">
            As she honed her musical skills, Ariel's passion caught the attention of a local music
            producer, who saw immense potential in her. With his guidance and support, she recorded
            her first song, which quickly gained popularity on Rwandan radio stations.
          </p>
          <p className="text-start md:py-4 md:px-20">
            As she honed her musical skills, Ariel's passion caught the attention of a local music
            producer, who saw immense potential in her. With his guidance and support, she recorded
            her first song, which quickly gained popularity on Rwandan radio stations.
          </p>
        </div>
      </div>
      <div className="w-[2vw] h-[2vw] sm:mx-[90vw] md:mx-[85vw]">
        <button
          onClick={handleRefreshAndScrollTop}
          className="bg-african group md:mr-{36%} text-white flex items-center justify-end rounded-md"
        >
          <span className="group-hover:translate-y-2 duration-300 pb-1 mb-8 bg-bg-african bottom-2 border">
            <MdOutlineKeyboardArrowUp size={20} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Pictures;
