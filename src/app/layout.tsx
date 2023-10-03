import NavBar from '@/components/shared/NavBar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Luckiest_Guy } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '900', '700', '800', '300'],
});
export const luckGuy = Luckiest_Guy({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ariel Wayz - Admin Portal',
  description: 'Admin Portal for Ariel Wayz',
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal?: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* {modal} */}
      </body>
    </html>
  );
}
