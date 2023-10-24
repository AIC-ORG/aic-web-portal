'use client';
import { getMusicQuery } from '@/sanity/queries/music.query';
import { sanityClient } from '@/sanity/sanity.client';
import { IMusic } from '@/types/music.type';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsMusicNote, BsPlay, BsPlayBtn } from 'react-icons/bs';

const VideosPage = () => {
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
    <div className=" flex flex-col w-full gap-y-3 p-3">
      <h1 className=" text-center text-white text-2xl font-semibold">Music Videos</h1>
      {loading ? (
        <div className="loader flex w-full justify-center">Loading...</div>
      ) : musics.length === 0 ? (
        <div className="loader flex w-full justify-center">No music found</div>
      ) : (
        <div className="grid text-white w-full lg:grid-cols-4 md:grid-cols-3 five:grid-cols-2   gap11">
          {musics.map((video) => (
            <Link
              href={`/music/${video._id}`}
              key={video._id}
              className="flex music_card duration-300 p-0 m-0 cursor-pointer music-card max-w[400px] relative aspect-square overflow-hidden flex-col items-center justify-center bg-white roundedlg shadow-md"
            >
              <img
                className="  absolute top-0 bottom-0 right-0 left-0 min-w-full min-h-full object-cover"
                src={
                  (video?.thumbnail.asset.url as string) ??
                  `https://i.ytimg.com/vi/${video?.youtubeId}/hqdefault.jpg`
                }
                alt=""
              />
              <div className="w-full text-white h-full text-center bg-[#0e0404]/70 items-center justify-center flex flex-col z-10">
                <button className="text-xl rounded-full w-11 border-2 h-11 items-center justify-center flex font-semibold">
                  <BsPlayBtn />
                </button>
                <span className=" font-roboto-serif">
                  {new Date(video?.releaseDate).toDateString()}
                </span>
                <p className="text-2xl mt-4 font-bold text-center">{video.title}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideosPage;
