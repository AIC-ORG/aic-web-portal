/* eslint-disable @next/next/no-img-element */
import { IMusic } from '@/types/music.type';
import Link from 'next/link';
import { FC, useState } from 'react';
import LyricsBlock from '../videos/LyricsBlock';

interface SuggestedProps {
  artistName?: string;
  otherMusics: IMusic[];
  activeMusic: IMusic | null;
}

const Suggested: FC<SuggestedProps> = ({ artistName, otherMusics, activeMusic }) => {
  const [activeTab, setActiveTab] = useState('more videos');

  const tabs = ['more videos', 'lyrics'];
  return (
    <div className="min-w-[500px] lg:flex flex-col hidden w-1/3 border border-slate-50/20 rounded-md p-3">
      {/* <h1 className=" text-lg font-semibold">More from Ariel {artistName ?? 'Ariel Wayz'}</h1> */}
      <div className="overflow-x-auto bg-dark-brownish md:w-full max-w-screen-sm mx-auto flex justify-between items-center dark:bg-grey-800 rounded-xl">
        {tabs.map((c: string = '', i: number) => (
          <span
            key={i}
            onClick={() => setActiveTab(c)}
            className={`p-1.5 md:p-2  whitespace-nowrap w-full text-sm md:text-base text-center capitalize rounded-xl ${
              activeTab.toLowerCase() === c.toLowerCase()
                ? 'bg-bg-african text-white'
                : 'hover:bg-black'
            } cursor-pointer transition-all`}
          >
            {c}
          </span>
        ))}
      </div>
      {activeTab === 'lyrics' ? (
        activeMusic?.lyrics ? (
          <LyricsBlock lyrics={activeMusic?.lyrics} />
        ) : (
          <span className=" text-white"> No lyrics Found</span>
        )
      ) : (
        <div className="flex flex-col gap-1">
          {otherMusics.map((music, i) => (
            <Link
              href={`/music/${music._id}`}
              key={i}
              className="flex shadow min-w-[300px] duration-300 p-0 m-0  cursor-pointer border border-bg-african/40 hover:bg-[#2b1212] overflow-hidden items-start gap-2 justify-center rounded-lg "
            >
              <img
                className=" min-w-[180px] aspect-video w-1/3 min-h-full object-cover"
                src={
                  (music?.thumbnail.asset.url as string) ??
                  `https://i.ytimg.com/vi/${music?.youtubeId}/hqdefault.jpg`
                }
                alt={music?.title}
              />
              <div className="w-full text-white h-full bg-[#0e0404]/70 flex flex-col z-10">
                <p className="text-xl mt-4 font-bold">
                  {music.title} by {artistName ?? 'Ariel Wayz'}
                </p>
                <span className=" font-roboto-serif">
                  {new Date(music.releaseDate).toDateString()}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Suggested;
