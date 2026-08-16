'use client';
import { ReactLenis } from 'lenis/react';
import { useIsMobile } from '@/hooks/use-mobile';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true, syncTouch: false }}>
      {children}
    </ReactLenis>
  );
}
