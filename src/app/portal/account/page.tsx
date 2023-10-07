'use client';
import { useAuth } from '@/contexts/AuthProvider';
import Image from 'next/image';
import React from 'react';

const AccountPage = () => {
  const { user } = useAuth();

  const [first_name, last_name] = user?.names?.split(' ') ?? ['John', 'Doe'];
  return (
    <div className="flex w-full flex-col gap-y-3 min-h-[50vh] justify-center items-center">
      <div className="flex overflow-hidden items-center justify-center w-[120px] h-[120px] rounded-full bg-gray-200">
        <Image
          src={`/images/wayz.jpeg`}
          className="rounded-full min-h-full min-w-full object-cover"
          alt="Profile image"
          width={120}
          height={120}
        />
      </div>
      <h1 className="font-bold capitalize">{`${first_name} ${last_name}`}</h1>
      <p className="font-light text-gray-400">Rwandan Artist</p>
    </div>
  );
};

export default AccountPage;
