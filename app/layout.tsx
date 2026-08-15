import type {Metadata} from 'next';
import { Syne, Manrope } from 'next/font/google';
import './globals.css';

import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';

const displayFont = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
});

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'A2 Editz — Premium Video Editing & Creative Studio',
  description: 'A2 Editz is a premium video editing studio. Cinematic editing, reels, YouTube, commercial videos, motion graphics, and VFX by Arun.',
  openGraph: {
    title: 'A2 Editz — Premium Video Editing & Creative Studio',
    description: 'A2 Editz is a premium video editing studio. Cinematic editing, reels, YouTube, commercial videos, motion graphics, and VFX by Arun.',
    type: 'website',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} scroll-smooth`}>
      <body className="font-body antialiased bg-[#050505] text-[#e0e0e0] overflow-x-hidden selection:bg-red-600 selection:text-white" suppressHydrationWarning>
        <div className="fixed inset-0 opacity-10 pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="relative z-10">
          <Preloader />
          <CustomCursor />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </div>
      </body>
    </html>
  );
}
