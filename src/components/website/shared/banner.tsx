/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from 'react';

const Navbar = () => {
  const [hide, setHide] = useState(false);
  return (
    <div
      style={{ display: hide ? 'none' : 'flex' }}
      className="flex 2sm:flex-row flex-col sticky items-center font-luckGuy justify-center  bg-white p-3"
    >
      <span className=" md:text-3xl five:text-left text-center text-lg uppercase font-bold">
        "Ariel Ways" The Live Experience
      </span>
      <button className="ml-4 bg-black text-white px-8 py-2 ">View Dates</button>
      <button className="absolute right-0 mr-4" onClick={() => setHide(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-black hover:text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
