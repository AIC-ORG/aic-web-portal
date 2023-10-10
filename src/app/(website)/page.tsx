/* eslint-disable @next/next/no-img-element */
import MidNav from '@/components/website/shared/mid-nav';
import Socials from '@/components/website/shared/socials';
import { getWebContentQuery } from '@/sanity/queries/web-content.query';
import { sanityClient } from '@/sanity/sanity.client';
import { IWebContent } from '@/types/web-content.type';
import Link from 'next/link';
import {
  FaCamera,
  FaCompactDisc,
  FaHistory,
  FaMicrophone,
  FaMusic,
  FaNewspaper,
  FaTshirt,
  FaVideo,
} from 'react-icons/fa';

export const revalidate = 15; // revalidate at most every 15 seconds

async function getWebContent() {
  const data: IWebContent[] = await sanityClient.fetch(getWebContentQuery, {
    next: {
      revalidate: revalidate,
    },
  });
  return data;
}

const Homepage = async () => {
  const [content] = await getWebContent();
  console.log('content', content);
  const pics = [
    { image: '/images/pic12.jpg', option: 'MERCH', icon: <FaTshirt />, link: '/store' },
    {
      image: '/images/pic2.jpg',
      option: 'DISCOGRAPHY',
      icon: <FaCompactDisc />,
      link: '/albums',
    },
    {
      image: '/images/pic3.jpg',
      option: 'UPCOMING SHOWS',
      icon: <FaMicrophone />,
      link: '/live',
    },
    {
      image: '/images/pic6.jpg',
      option: 'SHAYO OUT NOW',
      icon: <FaNewspaper />,
      link: '/news',
    },
    { image: '/images/pic7.jpg', option: 'MUSIC', icon: <FaMusic />, link: '/music' },
    { image: '/images/pic8.jpg', option: 'VIDEOS', icon: <FaVideo />, link: '/videos' },
    { image: '/images/pic9.jpg', option: 'PHOTOS', icon: <FaCamera />, link: '/photos' },
    { image: '/images/pic10.jpg', option: 'BIOGRAPHY', icon: <FaHistory />, link: '/bio' },
    {
      image: '/images/pic13.jpg',
      option: 'LATEST NEWS',
      date: ' 11 September 2023',
      icon: <FaNewspaper />,
      link: '#',
    },
  ];
  return (
    <>
      <div className="home-video">
        <div className="video-wrapper flex flex-col max-h-[575px]">
          <video autoPlay loop muted className="home-video">
            <source src={content.hero?.video?.asset.url ?? '/ariel.mp4'} type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>
        <Socials />
      </div>

      <div className="absolute top-24 left-10  font-luckGuy">
        <p className="text-white font-bold font-luckiest-guy">{content.hero?.title}</p>
        <button
          type="button"
          className="bg-white text-black px-2.5 py-2.5 font-bold border-none text-base"
        >
          STREAM
        </button>
      </div>
      <MidNav noLogin />

      <div className="flex flex-col w-full">
        <div className="grid w-full lg:grid-cols-3 md:grid-cols-3 five:grid-cols-2   gap11">
          {pics.map((pic, i) => (
            <Link
              href={pic.link as any}
              key={i}
              className="flex duration-300 p-0 m-0 border-0 cursor-pointer music-card max-w[400px] relative aspect-square overflow-hidden flex-col items-center justify-center bg-white roundedlg shadow-md"
            >
              <img
                className=" absolute top-0 bottom-0 right-0 left-0 min-w-full min-h-full object-cover"
                src={pic.image as string}
                alt=""
                loading="lazy"
              />
              <div className="w-full text-white h-full text-center bg-[#0e0404]/70 items-center justify-center flex flex-col z-10">
                <button className="text-xl rounded-full w-11 border-2 h-11 items-center justify-center flex font-semibold">
                  {/* <BsMusicNote /> */}
                  {pic.icon}
                </button>
                <span className=" font-roboto-serif">{pic.date} </span>

                <p className="text-2xl mt-4 font-bold text-center" key={i}>
                  {pic.option}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
