'use client';
import MainLayout from '@/layouts/MainLayout';
import { api } from '@/utils/fetch';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { toast } from 'react-toastify';

const JoinLive = () => {
  const [streamId, setStreamId] = useState('');
  const [streams, setStreams] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleJoinStream = async () => {
    if (streamId.trim() === '') return alert('Please enter a valid stream id');
    if (streamId.trim().length === 6) return alert('Streams have 6 digits');
    window.location.replace(`/stream/${streamId}`);
  };

  const getStreams = async () => {
    setLoading(true);
    try {
      // const request = await api.get('/stream/get-streams?page=0&limit=5', {
      //   headers: {
      //     Authorization: `Bearer ${localStorage.getItem('token')}`,
      //     'Content-Type': 'application/json',
      //   },
      // });
      // const { data } = request.data;
      // setStreams(data.streams);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStreams();
  }, []);

  return (
    <>
      <div className="w-full flex flex-col px-3 text-white min-h-screen items-center">
        <span className="font-bold text-xl">Join Stream</span>
        <span className=" opacity-70 text-sm">These are the current/live streams</span>
        <div className="sm:w-4/5 w-full md:w-3/5 flex items-center flex-col text-white">
          {streams?.map((stream) => (
            <Link
              href={`/live/${stream.roomId}` as any}
              className="bg-dark-brownish hover:bg-black duration-300 hover:border-gray-300 border-2 border-bg-african text-white my-3 rounded-xl p-3"
              key={stream.id}
            >
              <div className="flex flex-col">
                <span>Name: {stream.title}</span>
                <span>Created By: {stream.createdBy.names}</span>
                <span>Room Id: {stream.roomId}</span>
                <span>Created At: {stream.createdAt}</span>
              </div>
            </Link>
          ))}
          {loading && <span>Loading...</span>}
          {!loading && streams.length === 0 && <span>No streams found</span>}
        </div>
        <div className="sm:w-4/5 w-full md:w-3/5  flex my-3 flex-col items-start justify-center">
          <div className="my-1 w-full flex items-center justify-between">
            <span className={``}>OR Join By Stream ID</span>
          </div>
          <div className="border border-slate-300 w-full rounded-l rounded flex bg-white">
            <div
              className={`w-10 rounded-l h-10 flex border items-center justify-center bg-addon text-slate-600 border-r border-r-slate-300`}
            >
              <AiOutlineVideoCamera />
            </div>
            <input
              value={streamId}
              onChange={(e) => {
                setStreamId(e.target.value);
              }}
              max={6}
              type={'text'}
              className={`w-11/12 bg-light-input-bg placeholder:text-gray-400 placeholder:text-sm outline-none rounded-r px-3 h-10`}
              placeholder={'eg: 648240'}
            />
          </div>
        </div>
        <button
          onClick={handleJoinStream}
          className="bg-bg-african mt-4 text-center w-44 h-12 mx-auto rounded text-white text-xl font-bold"
        >
          Join Stream
        </button>
      </div>
    </>
  );
};

export default JoinLive;
