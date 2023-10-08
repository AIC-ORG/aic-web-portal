import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter, Luckiest_Guy } from 'next/font/google';
import Providers from './providers';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '900', '700', '800', '300'],
  variable: '--font-inter',
});
export const luckGuy = Luckiest_Guy({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-luckiest-guy',
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
      <body className={`${inter.className} ${inter.variable} ${luckGuy.variable}`}>
        <Providers>
          {children}
          {/* {modal} */}
        </Providers>
      </body>
    </html>
  );
}
