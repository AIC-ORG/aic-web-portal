import { Slider } from '@mui/material';
import { BiPause, BiCog, BiSkipNext, BiSkipPrevious, BiPlay } from 'react-icons/bi';
import { usePlayer } from '@/contexts/PlayerContext';
import { formatTime } from '@/utils';
import { useEffect } from 'react';

const Controls = ({ vidEl, togglePlay }) => {
  const { playerState } = usePlayer();

  //   useEffect(()=>{
  //     console.log('cuur',vidEl)
  //   } , [vidEl?.currentTime])

  return (
    <div
      className={`player__controls text-white absolute bottom-0 p-3 bg-black/30 w-full opacity-0 flex items-center flex-col duration-300`}
    >
      <div className="flex w-full items-center justify-between gap-x-2">
        <button className={`bg-black text-white rounded-full`} onClick={togglePlay}>
          {playerState.isPlaying ? <BiPause size={30} /> : <BiPlay size={30} />}
        </button>
        <Slider
          className="w-full translate-y-1"
          onChange={(e) => {
            vidEl.currentTime = Number(e.target.value);
          }}
          min={0}
          max={Number.isNaN(vidEl?.duration) ? 0 : vidEl?.duration}
          value={Number.isNaN(playerState.progress) ? 0 : playerState.progress}
          sx={{
            color: '#ff0000',
            ':hover': {
              '& .MuiSlider-thumb': {
                boxShadow: 'unset',
              },
            },
            '& .MuiSlider-thumb': {
              display: 'flex',
              width: 6,
              height: 6,
              boxShadow: 'unset',
              transition: 'all 0.3s ease-in-out',
              ':hover': {
                width: 10,
                height: 10,
                boxShadow: 'unset',
              },
            },
          }}
        />
        <button
          className={`p-1 bg-black  text-white
          } rounded-full`}
        >
          <BiCog size={22} />
        </button>
      </div>
      <div className="w-full flex items-center justify-center gap-x-2 text-white">
        <BiSkipPrevious size={30} />
        <span>{formatTime(vidEl?.currentTime) ?? '00:00'}</span>
        <span className="h-[15px] w-[1.5px] bg-white flex"></span>
        <span>{formatTime(vidEl?.duration) ?? '00:00'}</span>
        <BiSkipNext size={30} />
      </div>
    </div>
  );
};

export default Controls;
