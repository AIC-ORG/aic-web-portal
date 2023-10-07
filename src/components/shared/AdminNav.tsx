'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { BiBell, BiCog, BiSearch } from 'react-icons/bi';
import { useAuth } from '@/contexts/AuthProvider';

const AdminNav = () => {
  const [title, setTitle] = useState('');
  const [paths, setPaths] = useState<string[]>([]);
  const pathname = usePathname();
  const { user } = useAuth();
  const [first_name, last_name] = user?.names?.split(' ') ?? ['John', 'Doe'];

  useEffect(() => {
    setTitle(
      pathname
        .split('/')
        .map((path, index) => {
          if (index === 0) return null;
          if (index === pathname.split('/').length - 1) return path.split('-').join(' ');
          return `${path.split('-').join(' ')} / `;
        })
        .join(',')
        .replace(/,/g, ''),
    );
    // setTitle(pathname.split('/')[1].split('-').join(' '));
    setPaths(pathname.split('/'));
  }, [pathname]);

  return (
    <div className=" border-b sticky h-[70px] top-0 bg-accent z-10 w-full items-center flex p-5 pl-8 justify-between">
      <h1 title={title} className=" capitalize ml-2 sm:ml-0 font-bold text-sm truncate">
        {title}
      </h1>
      <div className="flex text-black/70 items-center sm:gap-x-8 gap-x-4">
        <div className="flex items-center gap-x-4">
          <div className="2sm:flex hidden bg-white rounded-md py-1.5 px-3 items-center gap-x-2">
            <BiSearch size={15} />
            <input
              type="text"
              placeholder="Search"
              className="border text-xs border-none outline-none rounded-md p-1.5"
            />
          </div>
          <div className="flex items-center gap-x-4 py-2.5">
            <button className="2sm:hidden">
              <BiSearch size={20} />
            </button>
            <button>
              <BiBell size={20} />
            </button>
            <BiCog size={20} />
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h2 className=" text-sm sm:flex hidden font-bold">{`${first_name} ${last_name}`}</h2>
          <Link className="flex h-8 w-8" href="/portal/account">
            <Image
              src={`/images/wayz.jpeg`}
              className=" rounded-full object-cover min-h-full min-w-full cursor-pointer"
              width={30}
              height={30}
              alt="Acc"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
