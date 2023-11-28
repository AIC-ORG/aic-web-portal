import StoreNav from '@/components/shared/StoreNav';
import NProvider from '@/contexts/NProvider';
import { FC } from 'react';
import { DataProvider } from '@/contexts/DataContext';
import Providers from '@/app/providers';
// import StoreFooter from '@/components/shared/StoreFooter';
import Footer from '@/components/website/shared/footer';
import { Toaster } from '@/components/ui/Toast';

interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <>
      <NProvider color="#390101">
        <Providers>
          <DataProvider>
            <StoreNav />
            {children}
            {/* <StoreFooter /> */}
            <Footer/>
          </DataProvider>
        </Providers>
        <Toaster position="bottom-right" />
      </NProvider>
    </>
  );
};

export default layout;
