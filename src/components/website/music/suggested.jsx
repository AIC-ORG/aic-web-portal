import { mixArray } from '@/utils';
import musics from '@/utils/musics';
import { Link, useParams } from 'react-router-dom';

const Suggested = ({ artistName }) => {
  const params = useParams();
  const otherMusics = mixArray(musics)
    .filter((music) => music.id !== Number(params.id))
    .slice(0, 3);

  return (
    <div className="min-w-[500px] lg:flex flex-col hidden w-1/3 border border-slate-50/20 rounded-md p-3">
      <h1 className=" text-lg font-semibold">More from Ariel {artistName ?? 'Ariel Wayz'}</h1>
      <div className="flex flex-col gap-1">
        {otherMusics.map((music, i) => (
          <Link
            to={`/music/${music.id}`}
            key={i}
            className="flex shadow min-w-[300px] duration-300 p-0 m-0  cursor-pointer border border-bg-african/40 hover:bg-[#2b1212] overflow-hidden items-start gap-2 justify-center rounded-lg "
          >
            <img
              className=" min-w-[180px] aspect-video w-1/3 min-h-full object-cover"
              src={music?.thumbnail ?? `https://i.ytimg.com/vi/${music?.ytId}/hqdefault.jpg`}
              alt={music?.title}
            />
            <div className="w-full text-white h-full bg-[#0e0404]/70 flex flex-col z-10">
              <p className="text-xl mt-4 font-bold">
                {music.title} by {artistName ?? 'Ariel Wayz'}
              </p>
              <span className=" font-roboto-serif">{music?.released}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Suggested;
