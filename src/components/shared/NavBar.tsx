import React from 'react';
import Logo from './Logo';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="flex bg-black text-white w-full justify-between items-center px-11 py-5">
      <Logo className=" text-2xl" />
      <div className="flex w-full max-w-[600px] px-11 justify-between items-center">
        <Link href={'/portal'}>Home</Link>
        <Link href={'/portal/music'}>Music</Link>
        <Link href={'/portal/bio'}>Bio</Link>
        <Link href={'/portal/videos'}>Videos</Link>
        <Link href={'/portal/store'}>Store</Link>
        <Link href={'/portal/live'}>Live</Link>
      </div>
    </div>
  );
};

export default NavBar;
