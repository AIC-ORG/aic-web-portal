import NProvider from '@/contexts/NProvider';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <NProvider color="#6e5b5b">
      <MainLayout>{children}</MainLayout>
    </NProvider>
  );
};

export default AdminLayout;
