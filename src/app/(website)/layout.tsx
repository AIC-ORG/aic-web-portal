import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default AdminLayout;
