'use client';
import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const [active, setActive] = React.useState('');
  const path = usePathname();

  React.useEffect(() => {
    setActive(path);
  }, [path]);
  return (
    <div className="flex bg-black text-white w-full justify-between items-center sm:px-11 px-4 py-5">
      <Logo className=" text-2xl opacity-10 whitespace-nowrap" />
      <div className="flex w-full max-w-[600px] md:px-11 pl-11 justify-between items-center">
        <Link
          className={`nav-link ${
            active === '/' ? 'active-link' : ''
          } hover:text-blue-800 duration-300`}
          href={'/portal'}
        >
          Home
        </Link>
        <Link
          className={`nav-link ${
            active === '/' ? 'active-link' : ''
          } hover:text-blue-800 duration-300`}
          href={'/portal/music'}
        >
          Music
        </Link>
        <Link
          className={`nav-link ${
            active === '/' ? 'active-link' : ''
          } hover:text-blue-800 duration-300`}
          href={'/portal/bio'}
        >
          Bio
        </Link>
        <Link
          className={`nav-link ${
            active === '/' ? 'active-link' : ''
          } hover:text-blue-800 duration-300`}
          href={'/portal/videos'}
        >
          Videos
        </Link>
        <Link
          className={`nav-link ${
            active === '/' ? 'active-link' : ''
          } hover:text-blue-800 duration-300`}
          href={'/portal/store'}
        >
          Store
        </Link>
        <Link
          className={`nav-link ${
            active === '/' ? 'active-link' : ''
          } hover:text-blue-800 duration-300`}
          href={'/portal/live'}
        >
          Live
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
