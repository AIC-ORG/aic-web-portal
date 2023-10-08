import MainLayout from '@/layouts/MainLayout';
import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <MainLayout>
      <div className="w-full h-full my-24 items-center justify-center text-8xl font-extrabold text-white flex flex-col">
        <span>404</span>
        <span className="text-4xl">The page your requested for was not found</span>
        <Link to={'/'}>
          <button className="text-xl rounded-lg my-2 bg-white px-4 text-black py-2">
            Go Back Home
          </button>
        </Link>
      </div>
    </MainLayout>
  );
};

export default NotFound;
