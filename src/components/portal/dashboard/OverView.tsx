'use client';

import {
  Card,
  Grid,
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
} from '@tremor/react';

export default function OverView() {
  return (
    <main className="p-12">
      <Title>Dashboard</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <div className="mt-6">
        <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
          <Card>
            {/* Placeholder to set height */}
            <div className="h-28" />
          </Card>
          <Card>
            {/* Placeholder to set height */}
            <div className="h-28" />
          </Card>
          <Card>
            {/* Placeholder to set height */}
            <div className="h-28" />
          </Card>
        </Grid>
        <div className="mt-6">
          <Card>
            <div className="h-80" />
          </Card>
        </div>
      </div>
    </main>
  );
}
