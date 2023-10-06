import { getMusicQuery } from '@/sanity/queries/music.query';
import { sanityClient } from '@/sanity/sanity.client';
import React from 'react';
import MusicIndex from './MusicIndex';

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
  return <MusicIndex musics={data} />;
};

export default MusicPage;
