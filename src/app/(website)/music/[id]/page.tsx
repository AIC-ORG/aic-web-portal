import Lyrics from '@/components/website/music/lyrics';
import Player from '@/components/website/music/player';
import Suggested from '@/components/website/music/suggested';
import MainLayout from '@/layouts/MainLayout';
import { getMusicQuery } from '@/sanity/queries/music.query';
import { sanityClient } from '@/sanity/sanity.client';
import { IMusic } from '@/types/music.type';
import { useParams, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

const MusicIdPage = () => {
  const [music, setMusic] = React.useState<IMusic | null>(null);
  const [otherMusics, setOtherMusics] = React.useState<IMusic[]>([]);
  const [loading, setLoading] = React.useState(false);
  const params = useParams();

  const fetchMusics = async () => {
    setLoading(true);
    try {
      const data: IMusic[] = await sanityClient.fetch(getMusicQuery);
      console.log('data1', data);
      setMusic(data.find((music) => music._id === params.id) ?? null);
      setOtherMusics(data.filter((music) => music._id !== params.id).slice(0, 5));
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMusics();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainLayout noBanner>
      <div className="min-h-[90vh] p-4 text-white flex flex-col">
        {loading ? (
          <div className="loader flex w-full justify-center">Loading...</div>
        ) : !music ? (
          <div className="loader flex w-full justify-center">No music found</div>
        ) : (
          <>
            <div className="flex gap-3 w-full">
              <div className="flex lg:w-2/3 w-full flex-col">
                {<Player ytId={music?.youtubeId} />}
                <div className="w-1/2 mt-4 px-3 gap-y-2 flex-col flex">
                  <h1 className=" font-luckyGuy">{music?.title}</h1>
                  <span>{music?.description}</span>
                  <span>Released: {music?.releaseDate as string}</span>
                </div>
              </div>
              {/* @ts-ignore */}
              <Suggested />
            </div>
            <h1 className=" mt-6 text-xl px-2">Lyrics of {music?.title}</h1>
            <Lyrics />
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default MusicIdPage;
