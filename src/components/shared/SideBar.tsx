import Link from 'next/link';
import React from 'react';
import { BiGlobe, BiLogOut } from 'react-icons/bi';
import { FaShoppingBag } from 'react-icons/fa';
import { LuLayoutDashboard } from 'react-icons/lu';
import { MdMusicNote, MdMovie } from 'react-icons/md';
import { RiSignalTowerFill } from 'react-icons/ri';

const SideBar = () => {
  const sideBarLinks = [
    {
      name: 'Dashboard',
      icon: <LuLayoutDashboard className=" mr-3" />,
      link: '/portal' as any,
    },
    {
      name: 'Music',
      icon: <MdMusicNote className=" mr-3" />,
      link: '/portal/music' as any,
    },
    {
      name: 'Web Content',
      icon: <BiGlobe className=" mr-3" />,
      link: '/portal/bio' as any,
    },
    {
      name: 'Videos',
      icon: <MdMovie className=" mr-3" />,
      link: '/portal/videos' as any,
    },
    {
      name: 'Store',
      icon: <FaShoppingBag className=" mr-3" />,
      link: '/portal/store' as any,
    },
    {
      name: 'Live',
      icon: <RiSignalTowerFill className=" mr-3" />,
      link: '/portal/live' as any,
    },
  ];
  return (
    <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
      <div className="p-6">
        <Link
          href={'/portal'}
          className="text-white text-xl font-luckGuy text-center mx-auto w-full justify-center flex font-semibold uppercase hover:text-gray-300"
        >
          Admin Portal
        </Link>
        <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
          <i className="fas fa-plus mr-3"></i> New Music
        </button>
      </div>
      <nav className="text-white text-base font-semibold pt-3">
        {sideBarLinks.map((link) => (
          <Link
            key={link.name}
            href={link.link}
            className="flex hover:bg-black items-center active-nav-link text-white py-4 pl-6 nav-item"
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
  );
};

export default SideBar;
