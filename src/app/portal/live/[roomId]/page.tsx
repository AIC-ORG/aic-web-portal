import { IStream } from '@/types/stream.type';
import { AuthApi } from '@/utils/fetch';
import { Metadata, ResolvingMetadata } from 'next';
import React from 'react';

type Props = {
  params: { roomId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const roomId = params.roomId;
  const stream: IStream = await AuthApi.get(`/stream/${roomId}`);
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: stream.title,
    description: stream.description,
    openGraph: {
      images: [stream.thumbnail ?? '/images/wayz.jpeg'],
    },
  };
}

const LivePage = async () => {
  return <div>LivePage</div>;
};

export default LivePage;
