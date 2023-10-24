import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter, Luckiest_Guy } from 'next/font/google';
import Providers from './providers';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '900', '700', '800', '300'],
  variable: '--font-inter',
});
const luckGuy = Luckiest_Guy({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-luckiest-guy',
});

export const metadata: Metadata = {
  title: 'Ariel Wayz - Website',
  description: 'A place to find all things about Ariel Wayz',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://arielwayz.com',
    images: [2, 3, 6, 8].map((i) => ({
      url: `/images/pic${i}.jpg`,
      width: 800,
      height: 600,
      alt: 'Ariel Wayz',
    })),
  },
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable} ${luckGuy.variable}`}>
        <Providers>
          {children}
          {modal}
        </Providers>
      </body>
    </html>
  );
}
