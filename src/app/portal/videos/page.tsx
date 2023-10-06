'use client';
import DropdownMenu from '@/components/shared/DropdownMenu';
import Image from 'next/image';

const VideoPage: React.FC = () => {
  const video = [
    {
      id: 1,
      src: '/pic8.jpg',
      title: 'You should know(Behind the scenes)',
    },
    {
      id: 2,
      src: '/pic8.jpg',
      title: 'You should know(Behind the scenes)',
    },
    {
      id: 3,
      src: '/pic8.jpg',
      title: 'You should know(Behind the scenes)',
    },
    {
      id: 4,
      src: '/pic8.jpg',
      title: 'You should know(Behind the scenes)',
    },
    {
      id: 5,
      src: '/pic8.jpg',
      title: 'You should know(Behind the scenes)',
    },
    {
      id: 6,
      src: '/pic8.jpg',
      title: 'You should know(Behind the scenes)',
    },
  ];

  return (
    <>
      <button className="flex flex-row items-center gap-3 text-xl bg-black color-white text-white m-16 w-56  h-16 rounded justify-center">
        <span className="font-bold">+</span>
        <span className="font-bold">Add new video</span>
      </button>

      <p className="font-bold m-16 top-0 text-2xl ">List of posted videos</p>

      <div className="grid grid-cols-3 gap-y-28 ml-16">
        {video.map((video, index) => (
          <div key={index} className="relative w-auto ">
            <Image
              src={video.src}
              alt="id"
              width={450}
              height={200}
              className="rounded-[12px] relative bg-black z-1 "
            />
            <div className="absolute inset-x-0  bottom-0 flex flex-row  gap-10 justify-center items-center bg-grey w-[450px] h-[100px] rounded-b-[12px] z-0">
              <p className="text-white text-center font-bold font-size">{video.title}</p>
              <div className=" flex items-center justify-center ">
                {[0].map((index) => (
                  <DropdownMenu key={index} index={index} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoPage;
