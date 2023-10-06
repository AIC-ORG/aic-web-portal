// 'use c'
import { useState } from 'react';
import StreamsTable from './StreamsTable';
import { EStreamStatus, IStream } from '@/types/stream.type';
import { sampleStreams } from './sample';

const PastStreams = () => {
  const [streams, setStreams] = useState<IStream[]>(
    sampleStreams.filter((s) => s.status === EStreamStatus.ENDED),
  );
  const [loading, setLoading] = useState(false);

  return (
    <div className=" w-full flex-col flex">
      <div className="flex flex-col justify-center items-center min-h-[50vh]">
        {!loading && streams.length === 0 && (
          <h1 className=" opacity-60 text-xl text-center font-bold">
            You have no past streams or recordings
          </h1>
        )}
        {streams.length > 0 && <StreamsTable data={streams} />}
      </div>
    </div>
  );
};

export default PastStreams;
