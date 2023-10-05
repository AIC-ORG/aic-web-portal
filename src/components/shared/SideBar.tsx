'use client';
import Link from 'next/link';
import React from 'react';
import { BiGlobe, BiLogOut } from 'react-icons/bi';
import { sideBarLinks } from './routes';
import { usePathname } from 'next/navigation';
import { SanityIcon } from '../icons';
import { BsLayoutSidebar, BsLayoutSidebarInset } from 'react-icons/bs';

const SideBar = () => {
  const [active, setActive] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const path = usePathname();

  React.useEffect(() => {
    setActive(path);
  }, [path]);

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 640) {
        setOpen(false);
      }
    });
  }, []);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={` sm:hidden ${
          open ? 'text-white hover:bg-slate-950 top-6' : 'hover:bg-slate-200 top-2'
        } absolute z-[51] left-2 p-1 rounded-md border  duration-300`}
      >
        {open ? <BsLayoutSidebarInset /> : <BsLayoutSidebar />}
      </button>
      {/* overlAY */}
      {open && (
        <div
          className="absolute top-0 left-0 w-full h-screen bg-black/90 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
      <aside
        // className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl"
        className={`sm:relative z-50 bg-black/90 absolute duration-500 top-0 bg-sidebar h-screen w-64 sm:block shadow-xl ${
          open ? 'left-0' : ' -left-[1000px] sm:left-0 sm:block'
        }`}
      >
        <div className="p-6">
          <Link
            href={'/portal'}
            className="text-white text-xl font-luckGuy text-center mx-auto w-full justify-center flex font-semibold uppercase hover:text-gray-300"
          >
            Admin Portal
          </Link>
          <Link
            href={'/admin' as any}
            className="w-full bg-white cta-btn font-bold gap-x-4 p-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center truncate"
          >
            <SanityIcon />
            Go To Studio
          </Link>
        </div>
        <nav className="text-white text-base font-semibold pt-3">
          {sideBarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              className={`flex duration-500 border-l-4 border-transparent  hover:bg-black items-center text-white py-4 pl-6 nav-item 
            ${active === link.link ? 'bg-black  border-white ' : 'hover:bg-black'}
            `}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </nav>
        <Link
          href={'/portal'}
          className="absolute w-full upgrade-btn bottom-0  text-white flex items-center justify-start hover:bg-black py-4 pl-6"
        >
          <BiLogOut className="mr-3" />
          Logout
        </Link>
      </aside>
    </>
  );
};

export default SideBar;
