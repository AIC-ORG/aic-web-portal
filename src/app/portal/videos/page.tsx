import VideoIndex from './video-index';
import { getMusicQuery } from '@/sanity/queries/music.query';
import { sanityClient } from '@/sanity/sanity.client';
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

const VideoPage: React.FC = async () => {
  const videos = await getMusics();
  return (
    <div className=" flex flex-col gap-y-3 w-full py-10">
      <Link
        href={'/admin/desk/music;'}
        target="_blank"
        className="flex flex-row items-center w-fit gap-3  bg-black color-white text-white px-8 py-2 rounded-md justify-center"
      >
        <span className="font-bold">+</span>
        <span className="font-bold">Add new video</span>
      </Link>
      <p className="font-bold top-0 ">List of posted videos</p>
      <VideoIndex videos={videos} />
    </div>
  );
};

export default VideoPage;
