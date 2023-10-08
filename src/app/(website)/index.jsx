/* eslint-disable react/no-unescaped-entities */
import MidNav from '@/components/shared/mid-nav';
import Socials from '@/components/shared/socials';
import MainLayout from '@/layouts/MainLayout';
import musics from '@/utils/musics';
import React from 'react';
import { BiRadar, BiStore, BiVideo } from 'react-icons/bi';
import { BsMusicNote } from 'react-icons/bs';
import Link from 'next/link';

const Home = () => {
  return (
    <MainLayout>
      <div className="flex font-luckyGuy overflow-hidden h-[60vh] flex-col relative w-full">
        <img
          className=" absolute top-0 bottom-0 right-0 w-full max-h-full left-0 object-cover"
          src="https://www.ktpress.rw/wp-content/uploads/2022/01/Ariel-wayz-1024x736-1.jpg"
          alt=""
          loading="lazy"
        />
        <div className="bg-[#390101]/80 absolute top-0 w-full left-0 h-full"></div>
        <div className="flex p-8 z-10 items-center w-fit flex-col gap-y-2">
          <h1 className="  text-2xl font-bold text-white">Away</h1>
          <button className=" w-fit bg-white text-black px-4 py-2 ">View Dates</button>
        </div>
        <Socials />
      </div>
      <h1 className=" text-center text-xl font-semibold text-white py-4">Browser</h1>
      <div className="flex flex-col min-h-[90vh] w-full">
        <div className="grid w-full lg:grid-cols-4 md:grid-cols-3 five:grid-cols-2   gap11">
          <Link
            to={`/music`}
            className="flex duration-300 border-[#454040] p-0 m-0 border-0 cursor-pointer music-card max-w[400px] relative aspect-square overflow-hidden flex-col items-center justify-center bg-white roundedlg shadow-md"
          >
            <img
              className=" absolute top-0 bottom-0 right-0 left-0 min-w-full min-h-full object-cover"
              src={`https://ijambo.net/pictures/7AU8b9KpZLwgdC6u1iVTBryY.jpg`}
              alt=""
            />
            <div className="w-full text-white h-full text-center bg-[#0e0404]/70 items-center justify-center flex flex-col z-10">
              <button className="text-xl rounded-full w-11 border-2 h-11 items-center justify-center flex font-semibold">
                <BsMusicNote />
              </button>
              <p className="text-2xl mt-4 font-bold text-center">{`Music`}</p>
            </div>
          </Link>
          {/* bio */}
          <Link
            to={`/bio`}
            className="flex duration-300 border-[#454040] p-0 m-0 border-0 cursor-pointer music-card max-w[400px] relative aspect-square overflow-hidden flex-col items-center justify-center bg-white roundedlg shadow-md"
          >
            <img
              className=" absolute top-0 bottom-0 right-0 left-0 min-w-full min-h-full object-cover"
              src={`https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQe6E7eVSVODI-HLzTgY38Nxi73J35sI3J1RSV1l6JM8auHro0O`}
              alt=""
            />
            <div className="w-full text-white h-full text-center bg-[#0e0404]/70 items-center justify-center flex flex-col z-10">
              <button className="text-xl rounded-full w-11 border-2 h-11 items-center justify-center flex font-semibold">
                <BsMusicNote />
              </button>
              <p className="text-2xl mt-4 font-bold text-center">{`Biography`}</p>
            </div>
          </Link>
          {/* video */}
          <Link
            to={`/videos`}
            className="flex duration-300 border-[#454040] p-0 m-0 border-0 cursor-pointer music-card max-w[400px] relative aspect-square overflow-hidden flex-col items-center justify-center bg-white roundedlg shadow-md"
          >
            <img
              className=" absolute top-0 bottom-0 right-0 left-0 min-w-full min-h-full object-cover"
              src={`https://rushyashya.net/wp-content/uploads/2021/07/IMG-20210711-WA0053.jpg`}
              alt=""
            />
            <div className="w-full text-white h-full text-center bg-[#0e0404]/70 items-center justify-center flex flex-col z-10">
              <button className="text-xl rounded-full w-11 border-2 h-11 items-center justify-center flex font-semibold">
                <BiVideo />
              </button>
              <p className="text-2xl mt-4 font-bold text-center">{`Videos`}</p>
            </div>
          </Link>
          {/* store */}
          <Link
            to={`/store`}
            className="flex duration-300 border-[#454040] p-0 m-0 border-0 cursor-pointer music-card max-w[400px] relative aspect-square overflow-hidden flex-col items-center justify-center bg-white roundedlg shadow-md"
          >
            <img
              className=" absolute top-0 bottom-0 right-0 left-0 min-w-full min-h-full object-cover"
              src={`https://rihanna.store/cdn/shop/products/TTT-Tee-3D_540x.jpg?v=1675984334`}
              alt=""
            />
            <div className="w-full text-white h-full text-center bg-[#0e0404]/70 items-center justify-center flex flex-col z-10">
              <button className="text-xl rounded-full w-11 border-2 h-11 items-center justify-center flex font-semibold">
                <BiStore />
              </button>
              <p className="text-2xl mt-4 font-bold text-center">{`Store`}</p>
            </div>
          </Link>
          {/* Live */}
          <Link
            to={`/live`}
            className="flex duration-300 border-[#454040] p-0 m-0 border-0 cursor-pointer music-card max-w[400px] relative aspect-square overflow-hidden flex-col items-center justify-center bg-white roundedlg shadow-md"
          >
            <img
              className=" absolute top-0 bottom-0 right-0 left-0 min-w-full min-h-full object-cover"
              src={`https://media.afrocharts.com/file/afrocharts-media/uploads/2022/10/20221006-095829-0000-afrocharts-633e91a717ad4be6a552b0d-500x500.jpg`}
              alt=""
            />
            <div className="w-full text-white h-full text-center bg-[#0e0404]/70 items-center justify-center flex flex-col z-10">
              <button className="text-xl rounded-full w-11 border-2 h-11 items-center justify-center flex font-semibold">
                <BiRadar />
              </button>
              <p className="text-2xl mt-4 font-bold text-center">{`Live`}</p>
            </div>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
