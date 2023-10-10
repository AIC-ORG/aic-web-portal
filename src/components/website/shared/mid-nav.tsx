'use client';
import React, { useEffect } from 'react';
import { BiX } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Logo = () => (
  <Link href={'/'} className="logo font-luckGuy flex items-center gap-x-2">
    <img className="w-8" src="/ArtZone.png" alt="" />
    <span className=" font-luckyGuy">Ariel Wayz</span>
  </Link>
);

const MidNav = ({ hasLogo = false, noLogin = true }) => {
  const [path, setPath] = React.useState('');
  const pathname = usePathname();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className=" sticky top-0 z-[50] w-full flex gap-x-8 text-lg items-center justify-between p-5 bg-black text-white">
      <div className="">{hasLogo && <Logo />}</div>
      <div
        className={`flex md:static fixed md:pt-0 pt-11 gap-y-4 duration-500 md:w-fit left-0 flex-col md:flex-row w-full bg-inherit ${
          isMobile ? 'top-0 bottom-0' : '-top-[964px]'
        } gap-x-8 items-center`}
      >
        {isMobile && (
          <BiX
            onClick={() => setIsMobile(!isMobile)}
            className=" cursor-pointer absolute right-2 top-2"
            size={30}
          />
        )}
        <Link href={'/'} className={path === '/' ? 'border-b-2' : ''}>
          Home
        </Link>
        <Link href={'/music'} className={path.startsWith('/music') ? 'border-b-2' : ''}>
          Music
        </Link>
        <Link href={'/bio'} className={path.startsWith('/bio') ? 'border-b-2' : ''}>
          Bio
        </Link>
        <Link href={'/videos'} className={path.startsWith('/videos') ? 'border-b-2' : ''}>
          Videos
        </Link>
        <Link href={'/store'} className={path.startsWith('/store') ? 'border-b-2' : ''}>
          Store
        </Link>
        <Link href={'/live'} className={path.startsWith('/live') ? 'border-b-2' : ''}>
          Live (Join Stream)
        </Link>
      </div>
      <div className="flex items-center gap-x-2">
        <button onClick={() => setIsMobile(!isMobile)} className="">
          <FaBars className=" md:hidden" />
        </button>
      </div>
    </div>
  );
};

export default MidNav;
