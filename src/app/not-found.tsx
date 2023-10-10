import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className=" bg-dark-brownish h-screen w-full items-center justify-center text-8xl font-extrabold text-white flex flex-col">
      <span>404</span>
      <span className="text-4xl">The page your requested for was not found</span>
      <Link href={'/'}>
        <button className="text-xl rounded-lg my-2 bg-white px-4 text-black py-2">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
