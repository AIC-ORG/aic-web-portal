'use client';
import { Next13ProgressBar } from 'next13-progressbar';
import React from 'react';
import { AuthProvider } from '@/contexts/AuthProvider';
import NProvider from '@/contexts/NProvider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <NProvider color="#390101">{children}</NProvider>
    </AuthProvider>
  );
};

export default Providers;
