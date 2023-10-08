/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import MainLayout from '@/layouts/MainLayout';
import { BsMusicNote } from 'react-icons/bs';
import Link from 'next/link';
import React from 'react';

const MusicIndex = () => {
  const [musics, setMusics] = React.useState<any[]>([]);
  return (
    <>
      <h1 className=" text-center text-white font-semibold text-2xl py-5">Music</h1>
      <div className="flex flex-col min-h-[90vh] w-full">
        <div className="grid w-full lg:grid-cols-4 md:grid-cols-3 five:grid-cols-2   gap11">
          {musics.map((music) => (
            <Link
              href={`/music/${music.id}`}
              key={music.id}
              className="flex duration-300 border-[#341717] p-0 m-0 border-[1px] cursor-pointer music-card max-w[400px] relative aspect-square overflow-hidden flex-col items-center justify-center bg-white roundedlg shadow-md"
            >
              <img
                className="  absolute top-0 bottom-0 right-0 left-0 min-w-full min-h-full object-cover"
                src={music?.thumbnail ?? `https://i.ytimg.com/vi/${music?.ytId}/hqdefault.jpg`}
                alt=""
              />
              <div className="w-full text-white h-full text-center bg-[#0e0404]/70 items-center justify-center flex flex-col z-10">
                <button className="text-xl rounded-full w-11 border-2 h-11 items-center justify-center flex font-semibold">
                  <BsMusicNote />
                </button>
                <span className=" font-roboto-serif">{music?.released}</span>
                <p className="text-2xl mt-4 font-bold text-center">{music.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MusicIndex;
