'use client';
/* eslint-disable react/prop-types */
import Login from '@/components/website/auth/login';
import Signup from '@/components/website/auth/signup';
import Footer from '@/components/website/shared/footer';
import MidNav from '@/components/website/shared/mid-nav';
import Banner from '@/components/website/shared/banner';
import { useAuthContext } from '@/contexts/AuthContext';
import { usePathname } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
  noBanner?: boolean;
}

const MainLayout: FC<MainLayoutProps> = ({ children, noBanner }) => {
  const { viewLogin, viewSignup } = useAuthContext();
  const pathname = usePathname();

  const isHome = pathname === '/';

  return (
    <div className="flex bg-[#100000] flex-col w-full min-h-screen justify-between">
      {viewLogin && <Login />}
      {viewSignup && <Signup />}
      <div className="w-full flex bg-dark-brownish min-h-screen flex-col">
        {noBanner ? null : <Banner />}
        {!isHome && <MidNav hasLogo />}
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
