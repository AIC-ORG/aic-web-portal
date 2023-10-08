/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
'use client';
import { getMusicQuery } from '@/sanity/queries/music.query';
import { sanityClient } from '@/sanity/sanity.client';
import { IMusic } from '@/types/music.type';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsMusicNote } from 'react-icons/bs';

const MusicIndex = () => {
  const [musics, setMusics] = useState<IMusic[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMusics = async () => {
    setLoading(true);
    try {
      const data = await sanityClient.fetch(getMusicQuery);
      console.log('data', data);
      setMusics(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchMusics();
  }, []);
  return (
    <>
      <h1 className=" text-center text-white font-semibold text-2xl py-5">Music</h1>
      {loading ? (
        <div className="loader flex w-full justify-center">Loading...</div>
      ) : musics.length === 0 && !loading ? (
        <div className="loader flex w-full justify-center">No music found</div>
      ) : (
        <div className="flex flex-col min-h-[90vh] w-full">
          <div className="grid w-full lg:grid-cols-4 md:grid-cols-3 five:grid-cols-2   gap11">
            {[...musics, ...musics].map((music) => (
              <Link
                href={`/music/${music._id}`}
                key={music._id}
                className="flex duration-300 p-0 m-0 cursor-pointer music-card max-w[400px] relative aspect-square overflow-hidden flex-col items-center justify-center bg-white roundedlg shadow-md"
              >
                <img
                  className="  absolute top-0 bottom-0 right-0 left-0 min-w-full min-h-full object-cover"
                  src={
                    (music?.thumbnail.asset.url as string) ??
                    `https://i.ytimg.com/vi/${music?.youtubeId}/hqdefault.jpg`
                  }
                  alt=""
                />
                <div className="w-full text-white h-full text-center bg-[#0e0404]/70 items-center justify-center flex flex-col z-10">
                  <button className="text-xl rounded-full w-11 border-2 h-11 items-center justify-center flex font-semibold">
                    <BsMusicNote />
                  </button>
                  <span className=" font-roboto-serif">
                    {new Date(music?.releaseDate).toDateString()}
                  </span>
                  <p className="text-2xl mt-4 font-bold text-center">{music.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MusicIndex;
