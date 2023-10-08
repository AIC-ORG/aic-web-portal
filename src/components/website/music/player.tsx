import { usePlayer } from '@/contexts/PlayerContext';
import { useEffect, useRef, useState } from 'react';
import { BiPause, BiPlay } from 'react-icons/bi';
import Controls from './controlls';

const Player = ({ src, ytId, thumbnail, reference }: any) => {
  const vidEl = useRef<HTMLVideoElement | null>(null);
  const { playerState, setPlayerState, currentPlaying, handleNext, handlePrev } = usePlayer();
  const [showPausePlay, setShowPausePlay] = useState({
    state: false,
    timer: 0,
  });
  const [hide, setHide] = useState(false);
  const [timer, setTimer] = useState<any>(0);
  // const avgColor = useAverageColor('/sample.mp4');

  const onContextMenuHandler = (e: { preventDefault: () => void }, el: any) => {
    e.preventDefault();
    console.log('right click', vidEl.current?.currentTime);
  };

  const handleOnTimeUpdate = () => {
    const progress = vidEl.current?.currentTime;
    console.log('progress', progress);
    setPlayerState({
      ...playerState,
      progress,
    });
    // if (curRef.currentTime === curRef.duration) handleNext()
  };

  const togglePlay = () => {
    clearTimeout(showPausePlay.timer);
    setShowPausePlay({ ...showPausePlay, state: true });
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
    setTimeout(() => {
      setShowPausePlay({ ...showPausePlay, state: false });
    }, 1000);
  };

  useEffect(() => {
    const curRef = vidEl.current;
    playerState.isPlaying ? curRef?.play() : curRef?.pause();
  }, [playerState.isPlaying, vidEl]);

  return (
    <div className=" aspect-video w-full">
      {ytId ? (
        <iframe
          className=" w-full aspect-video"
          src={`https://www.youtube.com/embed/${ytId}?autoplay=1&si=xvMxYxXakoaxAvRi`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
        <div className={`w-full flex gap-2 text-white relative player`}>
          <div
            onMouseMove={() => {
              setHide(false);
              clearTimeout(timer);
              const timeout = setTimeout(() => {
                setHide(true);
              }, 2000);
              setTimer(timeout);
            }}
            className=" flex bg-[#1a0707] shadow flex-col relative rounded-lg overflow-hidden aspect-video w-full"
            style={
              {
                // backgroundColor: avgColor,
              }
            }
          >
            <video
              ref={vidEl}
              onTimeUpdate={handleOnTimeUpdate}
              className="w-full cursor-pointer h-full object-contain"
              onClick={togglePlay}
              autoPlay={true}
              controls
              id="video"
              muted
              loop
              preload="auto"
              poster={thumbnail}
              // onContextMenu={(e: any, el: any) => onContextMenuHandler(e, el)}
            >
              <source src={src} />
            </video>
            {showPausePlay.state && (
              <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black/10">
                <div
                  onClick={togglePlay}
                  className="flex items-center duration-300 justify-center rounded-full bg-stone-800/50 p-2"
                >
                  {playerState.isPlaying ? (
                    <BiPause className="text-[3em]" />
                  ) : (
                    <BiPlay className="ml-1 text-[3em]" />
                  )}
                </div>
              </div>
            )}
          </div>
          {vidEl && <Controls togglePlay={togglePlay} vidEl={vidEl?.current!} />}
        </div>
      )}
    </div>
  );
};

export default Player;
