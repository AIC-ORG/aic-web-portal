'use client';
/* eslint-disable react/prop-types */
import Banner from '@/components/website/shared/banner';
import Footer from '@/components/website/shared/footer';
import MidNav from '@/components/website/shared/mid-nav';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
  noBanner?: boolean;
}

const MainLayout: FC<MainLayoutProps> = ({ children, noBanner }) => {
  const pathname = usePathname();

  const isHome = pathname === '/' || pathname === '/home';

  return (
    <div className="flex bg-[#100000] flex-col w-full min-h-screen justify-between">
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
