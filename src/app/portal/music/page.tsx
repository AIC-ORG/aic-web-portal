import { getMusicQuery } from '@/sanity/queries/music.query';
import { sanityClient } from '@/sanity/sanity.client';
import React from 'react';
import MusicIndex from './MusicIndex';
import Link from 'next/link';

export const revalidate = 15; // revalidate at most every 15 seconds

async function getMusics() {
  const data = await sanityClient.fetch(getMusicQuery, {
    next: {
      revalidate: revalidate,
    },
  });
  return data;
}

const MusicPage = async () => {
  const data = await getMusics();
  return (
    <div className="flex w-full flex-col gap-y-3">
      <Link
        href={'/admin/desk/music;'}
        target="_blank"
        className="flex flex-row items-center w-fit gap-3  bg-black color-white text-white px-8 py-2 rounded-md justify-center"
      >
        <span className="font-bold">+</span>
        <span className="font-bold">Add new video</span>
      </Link>
      <h1 className=" font-semibold">Your Published Music</h1>
      <MusicIndex musics={data} />;
    </div>
  );
};

export default MusicPage;
