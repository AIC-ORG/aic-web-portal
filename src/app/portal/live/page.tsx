'use client';
import PastStreams from '@/components/portal/live/PastStreams';
import StreamsTable from '@/components/portal/live/StreamsTable';
import { sampleStreams } from '@/components/portal/live/sample';
import { EStreamStatus, IStream } from '@/types/stream.type';
import { TabGroup, TabList, Tab, TabPanels, TabPanel, Button } from '@tremor/react';
import React, { useState } from 'react';

const LivePage = () => {
  const [streams, setStreams] = useState<IStream[]>(
    sampleStreams.filter((s) => s.status === EStreamStatus.LIVE),
  );
  const [loading, setLoading] = useState(false);

  return (
    <div className=" w-full flex-col gap-y-6">
      <h1 className=" font-semibold">Streams and recordings</h1>
      <TabGroup className="mt-6">
        <TabList>
          <Tab>Upcoming</Tab>
          <Tab>Past</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="flex w-full flex-col h-full">
              <Button className="w-fit ml-auto">Create a new stream</Button>
              <div className="flex flex-col justify-center items-center min-h-[50vh]">
                {!loading && streams.length === 0 && (
                  <h1 className=" opacity-60 text-xl text-center font-bold">
                    You have no upcoming streams or recordings
                  </h1>
                )}
                {streams.length > 0 && <StreamsTable data={streams} />}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <PastStreams />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default LivePage;
