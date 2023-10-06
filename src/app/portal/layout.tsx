import AdminNav from '@/components/shared/AdminNav';
import NavBar from '@/components/shared/NavBar';
import SideBar from '@/components/shared/SideBar';
import { AuthProvider } from '@/contexts/AuthProvider';
import React from 'react';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <div className="flex bg-black/90 w-full h-screen">
        <SideBar />
        <div className="flex bg-white text-black flex-col w-full overflow-y-auto h-screen">
          <AdminNav />
          <div className="flex flex-col w-full h-full sm:px-8 p-3">{children}</div>
        </div>
      </div>
    </AuthProvider>
  );
};

export default AdminLayout;
