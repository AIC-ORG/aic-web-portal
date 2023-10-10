'use client';
import { Next13ProgressBar } from 'next13-progressbar';
import React from 'react';

const NProvider = ({ children, color }: { children: React.ReactNode; color?: string }) => {
  return (
    <>
      <Next13ProgressBar color={color ?? '#000'} height={'4px'} />
      {children}
    </>
  );
};

export default NProvider;
