'use client';
import { AuthProvider } from '@/contexts/AuthProvider';
import NProvider from '@/contexts/NProvider';
import React from 'react';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <NProvider color="#6e5b5b">{children}</NProvider>
    </AuthProvider>
  );
};

export default Providers;
