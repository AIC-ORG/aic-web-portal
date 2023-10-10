import { IStream } from '@/types/stream.type';
import { AuthApi } from '@/utils/fetch';
import { Metadata, ResolvingMetadata } from 'next';
import React, { FC } from 'react';
import LiveRoomIndex from './_roomIndex';

type Props = {
  params: { roomId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const getStream = async (roomId: string) => {
  const res = await AuthApi.get(`/stream/${roomId}`);
  const stream: IStream = res.data?.data?.stream ?? {};
  console.log('stream', stream);
  return stream;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const roomId = params.roomId;
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];
  const stream: IStream = await getStream(roomId);
  console.log('stream', stream);

  return {
    title: `${stream.title ?? 'Wayz'} - Live`,
    description: stream.description,
    openGraph: {
      images: [stream.thumbnail ?? '/images/wayz.jpeg'],
    },
  };
}

const LivePage: FC<Props> = async ({ params }) => {
  const stream = await getStream(params.roomId);
  return <LiveRoomIndex stream={stream} />;
};

export default LivePage;
