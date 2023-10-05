'use client';
import { Next13ProgressBar } from 'next13-progressbar';
import React from 'react';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Next13ProgressBar color="#000" height={'4px'} />
      {children}
    </>
  );
};

export default Providers;
