import Image from 'next/image';
import React from 'react';
import SignupPage from './_signupPage';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wayz - Signup',
  description: 'Wayz - Signup',
};

const Signup = () => {
  return (
    <div className=" w-full flex h-screen bg-white overflow-y-auto">
      <div className="lg:w-1/2 relative w-1/3 sm:flex hidden flex-col text-white items-center justify-center bg-black h-full">
        <div className=" absolute top-0 left-0 bottom-0 right-0">
          <Image src="/banner.png" className=" opacity-20" layout="fill" alt="" objectFit="cover" />
        </div>
        <h1 className={` font-black z-10 lg:text-5xl text-2xl font-luckGuy`}>
          Welcome to Community
        </h1>
      </div>
      <div className="lg:w-1/2 bg-banner sm:w-2/3 w-full flex flex-col items-center justify-center bg-white h-full">
        <SignupPage />
        <p className=" text-center text-sm gap-x-2 mt-6 flex items-center">
          Already have an account?.{' '}
          <Link className=" font-black" href={'/login'}>
            Login
          </Link>{' '}
        </p>
      </div>
    </div>
  );
};

export default Signup;
