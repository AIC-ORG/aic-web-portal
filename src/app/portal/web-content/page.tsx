import { getWebContentQuery } from '@/sanity/queries/web-content.query';
import { sanityClient } from '@/sanity/sanity.client';
import React from 'react';
import WebContent from './we-content';

export const revalidate = 15; // revalidate at most every 15 seconds

async function getWebContent() {
  const data = await sanityClient.fetch(getWebContentQuery, {
    next: {
      revalidate: revalidate,
    },
  });
  return data;
}

const WebContentPage = async () => {
  const data = await getWebContent();
  console.log(data);

  return <WebContent webContent={data} />;
};

export default WebContentPage;
