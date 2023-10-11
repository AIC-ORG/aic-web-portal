'use client';

import { useAuth } from '@/contexts/AuthProvider';
import { Card, Flex, Grid, Text, Title } from '@tremor/react';
import { BiCompass, BiGroup, BiImages, BiNavigation } from 'react-icons/bi';
import { BsMusicNote } from 'react-icons/bs';

export default function OverView() {
  const { user } = useAuth();
  return (
    <main className="p-12">
      <Title>Your dashboard, {user?.names.split(' ')[0]} </Title>
      <Text>
        View your analytics, manage your account, and more. This is your dashboard, where you can
      </Text>
      <div className="mt-6">
        <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
          <Card>
            <div className="h-28 flex flex-col w-full gap-y-2">
              <Flex className="flex-grow-0 flex-shrink-0">
                <Text className="text-gray-400 md:text-xl">Total Users</Text>
                <BiGroup size={30} className="ml-2" />
              </Flex>
              <Title className=" text-5xl">1</Title>
            </div>
          </Card>
          <Card>
            <div className="h-28 flex flex-col w-full gap-y-2">
              <Flex className="flex-grow-0 flex-shrink-0">
                <Text className="text-gray-400 md:text-xl">Total Musics</Text>
                <BsMusicNote size={30} className="ml-2" />
              </Flex>
              <Title className=" text-5xl">11</Title>
            </div>
          </Card>
          <Card>
            <div className="h-28 flex flex-col w-full gap-y-2">
              <Flex className="flex-grow-0 flex-shrink-0">
                <Text className="text-gray-400 md:text-xl">Total Albums</Text>
                <BiImages size={30} className="ml-2" />
              </Flex>
              <Title className=" text-5xl">2</Title>
            </div>
          </Card>
        </Grid>
        {/* <div className="mt-6 w-full flex flex-col gap-y-2">
          <h1 className="flex items-center gap-x-3">
            <BiCompass size={30} /> Explore
          </h1>
          <Card>
            <div className="h-80" />
          </Card>
        </div> */}
      </div>
    </main>
  );
}
