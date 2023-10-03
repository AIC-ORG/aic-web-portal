import React from 'react';
import Logo from './Logo';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="flex bg-black text-white w-full justify-between items-center px-11 py-5">
      <Logo className=" text-2xl" />
      <div className="flex w-full max-w-[600px] px-11 justify-between items-center">
        <Link href={'/'}>Home</Link>
        <Link href={'/music'}>Music</Link>
        <Link href={'/bio'}>Bio</Link>
        <Link href={'/videos'}>Videos</Link>
        <Link href={'/store'}>Store</Link>
        <Link href={'/live'}>Live</Link>
      </div>
    </div>
  );
};

export default NavBar;
