import { useAuth } from '@/contexts/AuthProvider';
import { IStream } from '@/types/stream.type';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react';
import { BiLike, BiShare } from 'react-icons/bi';

interface Props {
  webcamRef: any;
  remoteVideoRef: any;
  stream: IStream;
}

const StreamPlayer: FC<Props> = ({ webcamRef, remoteVideoRef, stream }) => {
  const { user } = useAuth();
  const pathname = usePathname();
  return (
    <div
      className={`flex border-2 ${
        !pathname.includes('/portal') ? 'border-bg-african ' : ''
      } lg:w-2/3 flex-col`}
    >
      <div className="flex overflow-hidden aspect-[16/10]">
        {user?.role === 'ARTIST' ? (
          <video className=" w-full object-cover" ref={webcamRef} autoPlay playsInline />
        ) : (
          <video
            ref={remoteVideoRef != null ? remoteVideoRef : webcamRef}
            className=""
            autoPlay
            playsInline
          />
        )}
      </div>
      <div className="flex w-full p-2 justify-between">
        <div className="flex flex-col ga">
          <span className="font-bold">{stream.title}</span>
          <span className="text-xs opacity-70">{stream.description}</span>
        </div>
        <div className="flex items-center text-white gap-2">
          <button className="font-bold px-4 py-2 text-sm hover:bg-black duration-300 flex gap-2 rounded-3xl bg-black/70">
            <BiShare size={20} />
            Share
          </button>
          <button className="font-bold px-4 py-2 text-sm hover:bg-black duration-300 flex gap-2 rounded-3xl bg-black/70">
            <BiLike size={20} />
            232
          </button>
        </div>
      </div>
    </div>
  );
};

export default StreamPlayer;
