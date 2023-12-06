import '@/styles/main.scss';

import { dir } from 'i18next';
import type { Metadata } from 'next';

import Footer from '@/components/footer';
import Header from '@/components/header';

import { languages } from '../i18n/settings';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
  title: 'Luberef',
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      sizes: '32x32',
      url: '/img/big-logo.svg',
    },
    {
      rel: 'icon',
      type: 'mage/svg+xml',
      sizes: '16x16',
      url: '/img/big-logo.svg',
    },
    {
      rel: 'icon',
      url: '/img/big-logo.svg',
    },
  ],
};

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: string; // or whatever type 'lng' should be
  };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <Header lang={lng} />
        {children}
        <Footer lang={lng} />
      </body>
    </html>
  );
}
