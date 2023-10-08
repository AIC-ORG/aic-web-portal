import { ILyric } from '@/types/music.type';
import React, { FC } from 'react';

interface LyricsBlockProps {
  lyrics: ILyric[];
}

const LyricsBlock: FC<LyricsBlockProps> = ({ lyrics }) => {
  return (
    <div className="flex flex-col w-full">
      {lyrics.map((lyric) => {
        const isStrong = lyric.children[0].marks.includes('strong');
        return (
          <p
            key={lyric._key}
            className=" text-sm"
            style={{ fontWeight: isStrong ? 'bold' : 'normal', margin: isStrong ? '1rem 0' : '0' }}
          >
            {lyric.children.map((child) => child.text).join('')}
          </p>
        );
      })}
    </div>
  );
};

export default LyricsBlock;
