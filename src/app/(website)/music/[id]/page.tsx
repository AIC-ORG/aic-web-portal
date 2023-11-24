'use client';
import Suggested from '@/components/website/music/suggested';
import { getMusicQuery } from '@/sanity/queries/music.query';
import { sanityClient } from '@/sanity/sanity.client';
import { IMusic } from '@/types/music.type';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import YouTube from 'react-youtube';

const MusicIdPage = () => {
  const [music, setMusic] = React.useState<IMusic | null>(null);
  const [otherMusics, setOtherMusics] = React.useState<IMusic[]>([]);
  const [loading, setLoading] = React.useState(false);
  const params = useParams();
  const router = useRouter();

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

  const onEnd = () => {
    console.log('end');
    // set music to next music and if there is no next music, set to first music
    const index = otherMusics.findIndex((m) => m._id === music?._id);
    let nextMusic: IMusic | null = null;
    if (index === otherMusics.length - 1) /*  nextMusic = otherMusics[0] */ return;
    else nextMusic = otherMusics[index + 1];
    if (nextMusic) {
      router.push(`/music/${nextMusic._id}`);
    }
  };

  // const

  return (
    <>
      <div className="min-h-[90vh] bg-black p-4 text-white flex flex-col">
        {loading ? (
          <div className="loader flex w-full justify-center">Loading...</div>
        ) : !music && !loading ? (
          <div className="loader flex w-full justify-center">No music found</div>
        ) : (
          <>
            <div className="flex gap-3 w-full lg:flex-row flex-col">
              <div className="flex lg:w-2/3 h-fit w-full flex-col">
                {/* {<Player ytId={music?.youtubeId} />} */}
                {
                  <YouTube
                    videoId={music?.youtubeId} // defaults -> ''
                    id={music?.youtubeId} // defaults -> ''
                    // className={string} // defaults -> ''
                    className={'w-full aspect-video'} // defaults -> ''
                    loading={'lazy'}
                    iframeClassName="w-full h-full"
                    onEnd={onEnd}
                    opts={{
                      playerVars: {
                        autoplay: 1,
                      },
                    }}
                    // onError={func}
                    // onStateChange={func}
                    // onPlaybackRateChange={func}
                    // onPlaybackQualityChange={func}
                  />
                }
                <div className="lg:w-1/2 mt-4 px-3 gap-y-2 flex-col flex">
                  <h1 className=" font-luckyGuy">{music?.title}</h1>
                  <span>{music?.description}</span>
                  <span>Released: {music?.releaseDate as string}</span>
                  <span>Produced by: {music?.producer as string}</span>
                </div>
              </div>
              <Suggested otherMusics={otherMusics} activeMusic={music} />
            </div>
            {/* <h1 className=" mt-6 text-xl px-2">Lyrics of {music?.title}</h1>
            <Lyrics /> */}
          </>
        )}
      </div>
    </>
  );
};

export default MusicIdPage;
