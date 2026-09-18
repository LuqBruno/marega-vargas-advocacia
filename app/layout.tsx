import type { Metadata, Viewport } from 'next';
import { assetPath } from './asset-path';
import './globals.css';
import './client-revision-2026-09-18.css';
import SiteIntro from './site-intro';
import { allowIndexing, siteOrigin } from './site-settings';

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin ?? 'http://localhost:3001'),
  title: {
    default: 'Maréga e Vargas | Advocacia Especializada em Tubarão/SC',
    template: '%s',
  },
  description:
    'Maréga e Vargas Advocacia Especializada, em Tubarão/SC. Alice Vargas atua em Família e Sucessões; Hellen Maréga, em Direito Civil e Empresarial.',
  keywords: [
    'Maréga e Vargas advocacia',
    'advogada Tubarão SC',
    'direito de família e sucessões',
    'direito civil e empresarial',
    'Alice Vargas',
    'Hellen Maréga',
  ],
  robots: { index: allowIndexing, follow: allowIndexing },
  alternates: siteOrigin ? { canonical: '/' } : undefined,
  applicationName: 'Maréga e Vargas',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Maréga e Vargas',
    url: siteOrigin,
    title: 'Maréga e Vargas | Advocacia Especializada',
    description:
      'Família, patrimônio, negócios e contratos. Cada caso exige uma leitura individualizada.',
    images: [
      {
        url: assetPath('/images/brand/marega-vargas-champanhe.webp'),
        width: 800,
        height: 319,
        alt: 'Maréga e Vargas — Advocacia Especializada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maréga e Vargas | Advocacia Especializada',
    description: 'Clareza jurídica para pessoas, famílias e negócios.',
    images: [assetPath('/images/brand/marega-vargas-champanhe.webp')],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#292728',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body><SiteIntro />{children}</body>
    </html>
  );
}
