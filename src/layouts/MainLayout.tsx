'use client';
/* eslint-disable react/prop-types */
import Login from '@/components/website/auth/login';
import Signup from '@/components/website/auth/signup';
import Footer from '@/components/website/shared/footer';
import MidNav from '@/components/website/shared/mid-nav';
import Navbar from '@/components/website/shared/navbar';
import { useAuthContext } from '@/contexts/AuthContext';
import { FC } from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
  noBanner?: boolean;
}

const MainLayout: FC<MainLayoutProps> = ({ children, noBanner }) => {
  const { viewLogin, viewSignup } = useAuthContext();

  return (
    <div className="flex bg-[#100000] flex-col w-full min-h-screen justify-between">
      {viewLogin && <Login />}
      {viewSignup && <Signup />}
      <div className="w-full flex flex-col">
        {noBanner ? null : <Navbar />}
        <MidNav hasLogo />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
