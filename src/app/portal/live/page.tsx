'use client';
import CreateStream from '@/components/portal/live/CreateStream';
import StreamsTable from '@/components/portal/live/StreamsTable';
import { EStreamStatus, IStream } from '@/types/stream.type';
import { AuthApi } from '@/utils/fetch';
import { Button, Tab, TabGroup, TabList, TabPanel, TabPanels } from '@tremor/react';
import { useEffect, useState } from 'react';

const LivePage = () => {
  const [streams, setStreams] = useState<{
    PENDING: IStream[];
    LIVE: IStream[];
    ENDED: IStream[];
    CANCELLED: IStream[];
  }>({
    PENDING: [],
    LIVE: [],
    ENDED: [],
    CANCELLED: [],
  });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState<EStreamStatus>(EStreamStatus.PENDING);

  const changeTab = (tab: EStreamStatus) => {
    setActiveTab(tab);
  };

  const getStreams = async () => {
    setLoading(true);
    try {
      const res = await AuthApi.get('/stream/get-streams?page=0&limit=5');
      const streams: IStream[] = res.data?.data?.streams ?? [];
      console.log('streams', streams);

      setStreams({
        PENDING: streams.filter((stream) => stream.status === EStreamStatus.PENDING),
        LIVE: streams.filter((stream) => stream.status === EStreamStatus.LIVE),
        ENDED: streams.filter((stream) => stream.status === EStreamStatus.ENDED),
        CANCELLED: streams.filter((stream) => stream.status === EStreamStatus.CANCELLED),
      });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getStreams();
  }, []);

  return (
    <div className=" w-full flex-col gap-y-6">
      <div className="flex 3xs:flex-row flex-col gap-y-3 w-full justify-between">
        <h1 className=" font-semibold">Streams and recordings</h1>
        <Button onClick={() => setShowModal(true)} className="w-fit">
          Create a new stream
        </Button>
      </div>
      <TabGroup className="mt-6">
        <TabList>
          <Tab>PENDING</Tab>
          <Tab>Past</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="flex gap-y-3 w-full flex-col h-full">
              <div className="flex flex-col justify-center items-center min-h-[50vh]">
                {!loading && streams[activeTab].length === 0 && (
                  <h1 className=" opacity-60 text-xl text-center font-bold">
                    You have no PENDING streams or recordings
                  </h1>
                )}
                {streams[activeTab].length > 0 && <StreamsTable data={streams.PENDING} />}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className=" w-full flex-col flex">
              <div className="flex flex-col justify-center items-center min-h-[50vh]">
                {!loading && streams.ENDED.length === 0 && (
                  <h1 className=" opacity-60 text-xl text-center font-bold">
                    You have no past streams or recordings
                  </h1>
                )}
                {streams.ENDED.length > 0 && <StreamsTable data={streams.ENDED} />}
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
      {showModal && <CreateStream onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default LivePage;
