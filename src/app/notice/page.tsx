import Link from 'next/link';
import React from 'react';

const NoticePage = () => {
  return (
    <div className=" w-full flex flex-col items-center gap-3 h-screen justify-center">
      <span className=" text-2xl font-semibold">You must login as ARTIST to view this page</span>
      <div className="flex items-center gap-x-5">
        <a href="/login">
          <button className="bg-black text-white px-3 py-2 rounded-md">Login</button>
        </a>
        Or
        <a href="/">
          <button className="bg-black text-white px-3 py-2 rounded-md">Go Back</button>
        </a>
      </div>
    </div>
  );
};

export default NoticePage;
