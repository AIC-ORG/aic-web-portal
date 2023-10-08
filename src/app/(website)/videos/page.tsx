'use client';
import { getMusicQuery } from '@/sanity/queries/music.query';
import { sanityClient } from '@/sanity/sanity.client';
import { IMusic } from '@/types/music.type';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsPlay } from 'react-icons/bs';

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
            <div key={video._id} className="wrapper border-[#341717] p-0 m-0">
              <Image
                width={400}
                height={400}
                objectFit="cover"
                className="image"
                src={
                  video?.thumbnail?.asset.url ??
                  `https://i.ytimg.com/vi/${video?.youtubeId}/hqdefault.jpg`
                }
                alt=""
              />
              <Link
                href={`/music/${video._id}`}
                className="overlay flex flex-col items-center justify-center"
              >
                <p className="text-2xl text-white mt-4 font-bold text-center">{video.title}</p>
                <span className=" text-white flex items-center gap-x-3">
                  Play
                  <BsPlay size={30} />
                </span>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideosPage;
