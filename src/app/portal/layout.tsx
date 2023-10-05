import NavBar from '@/components/shared/NavBar';
import SideBar from '@/components/shared/SideBar';
import React from 'react';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex bg-black/90 w-full h-screen">
      <SideBar />
      <div className="flex bg-white text-black flex-col w-full overflow-y-auto h-screen">
        {/* <NavBar /> */}
        <div className="flex flex-col w-full h-full p-11">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
