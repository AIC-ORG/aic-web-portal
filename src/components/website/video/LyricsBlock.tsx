import { ILyric } from '@/types/music.type';
import React, { FC } from 'react';

interface LyricsBlockProps {
  lyrics: ILyric[];
}

const LyricsBlock: FC<LyricsBlockProps> = ({ lyrics }) => {
  return (
    <div className="flex flex-col">
      {lyrics.map((lyric) => (
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

export default LyricsBlock;
