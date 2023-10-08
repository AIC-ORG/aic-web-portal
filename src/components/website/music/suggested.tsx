/* eslint-disable @next/next/no-img-element */
import { IMusic } from '@/types/music.type';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FC } from 'react';

interface SuggestedProps {
  artistName?: string;
  otherMusics: IMusic[];
}

const Suggested: FC<SuggestedProps> = ({ artistName, otherMusics }) => {
  return (
    <div className="min-w-[500px] lg:flex flex-col hidden w-1/3 border border-slate-50/20 rounded-md p-3">
      <h1 className=" text-lg font-semibold">More from Ariel {artistName ?? 'Ariel Wayz'}</h1>
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
    </div>
  );
};

export default Suggested;
