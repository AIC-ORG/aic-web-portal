'use client';
import DropdownMenu from '@/components/shared/DropdownMenu';
import { IMusic } from '@/types/music.type';
import Image from 'next/image';
import React, { useEffect } from 'react';
import styles from '@/styles/main.module.css';

interface MusicIndexProps {
  musics: IMusic[];
}

const MusicIndex = ({ musics }: MusicIndexProps) => {
  useEffect(() => {
    console.log(musics);
  }, [musics]);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 2sm:grid-cols-2 gap-6">
      {musics.map((music, index) => (
        <div
          key={index}
          className={`relative max-w-[400px] mr-auto  w-full cursor-pointer aspect-[5/4]`}
        >
          <div className={`flex h-full ${styles.music_card} rounded-xl end-full overflow-hidden`}>
            <Image
              src={music.thumbnail.asset.url}
              alt="id"
              width={1000}
              height={1000}
              objectFit="cover"
              className=" object-cover min-h-full scale-110 duration-500 min-w-full"
            />
          </div>
          <div
            className={` lg:min-h-[10vh] rounded-b-xl absolute bottom-0 bg-black/70 p-3 py-1 left-0 flex w-full justify-between items-center`}
          >
            <p className="text-white text-center font-bold font-size">{music.title}</p>
            <div className=" flex items-center justify-center ">
              <DropdownMenu id={music._id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MusicIndex;

const lyrics = [
  {
    markDefs: [],
    children: [
      {
        text: 'VERSE1:',
        _key: 'f431dd4a3d300',
        _type: 'span',
        marks: ['strong'],
      },
      {
        _type: 'span',
        marks: [],
        text: ' ',
        _key: 'b20a5efbe83e',
      },
    ],
    _type: 'block',
    style: 'normal',
    _key: 'd04a582f0f71',
  },
];
