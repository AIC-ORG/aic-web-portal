'use client';
import { IMusic } from '@/types/music.type';
import Image from 'next/image';
import styles from '@/styles/main.module.css';
import dynamic from 'next/dynamic';
import { BiPlay } from 'react-icons/bi';
const DropdownMenu = dynamic(() => import('@/components/shared/DropdownMenu'), { ssr: false });

interface VideoIndexProps {
  videos: IMusic[];
}

const VideoIndex: React.FC<VideoIndexProps> = ({ videos }) => {
  console.log('videos', videos);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 2sm:grid-cols-2 gap-6">
      {videos.map((video, index) => (
        <div
          key={index}
          className={`relative max-w-[400px] mr-auto  w-full cursor-pointer aspect-[5/4]`}
        >
          <div className=" absolute z-10 bg-black/70 text-white left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full p-3 border">
            <BiPlay size={50} />
          </div>
          <div className={`flex h-full ${styles.video_card} rounded-xl end-full overflow-hidden`}>
            <Image
              src={video.thumbnail.asset.url}
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
            <p className="text-white text-center font-bold font-size">{video.title}</p>
            <p className="text-white text-sm text-center font-bold font-size">
              {new Date(video.releaseDate).toDateString()}
            </p>
            <div className=" flex items-center justify-center ">
              <DropdownMenu id={video._id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoIndex;
