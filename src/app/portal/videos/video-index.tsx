'use client';
import { IMusic } from '@/types/music.type';
import Image from 'next/image';
import styles from '@/styles/main.module.css';
import dynamic from 'next/dynamic';
const DropdownMenu = dynamic(() => import('@/components/shared/DropdownMenu'), { ssr: false });

interface VideoIndexProps {
  videos: IMusic[];
}

const VideoIndex: React.FC<VideoIndexProps> = ({ videos }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 2sm:grid-cols-2 gap-6">
      {videos.map((video, index) => (
        <div
          key={index}
          className={`relative max-w-[400px] mr-auto  w-full cursor-pointer aspect-[5/4]`}
        >
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
            <div className=" flex items-center justify-center ">
              {/* {[0].map((index) => (
                <DropdownMenu key={index} index={index} />
              ))} */}
              <DropdownMenu />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoIndex;
