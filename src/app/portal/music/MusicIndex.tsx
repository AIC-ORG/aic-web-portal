'use client';
import { IMusic } from '@/types/music.type';
import React, { useEffect } from 'react';

interface MusicIndexProps {
  musics: IMusic[];
}

const MusicIndex = ({ musics }: MusicIndexProps) => {
  useEffect(() => {
    console.log(musics);
  }, [musics]);
  return (
    <div className=" w-full flex-col">
      {musics[0].title}
      {musics[0].lyrics.map((lyric) => (
        <p
          key={lyric._key}
          style={{ fontWeight: lyric.children[0].marks.includes('strong') ? 'bold' : 'normal' }}
        >
          {lyric.children.map((child) => child.text).join('')}
        </p>
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
