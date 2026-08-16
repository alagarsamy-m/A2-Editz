'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] md:h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image / Video Fallback */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 bg-black">
        <Image
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop"
          alt="Cinematic Camera"
          fill
          className="object-cover opacity-50 grayscale mix-blend-luminosity"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/30 via-[#050505]/50 to-[#050505]" />
        <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full max-w-7xl mx-auto text-center mt-20">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-[80px] sm:text-[100px] md:text-[140px] uppercase tracking-tighter leading-[0.85]"
        >
          A2 <br className="md:hidden" />
          <span className="font-light italic text-transparent" style={{ WebkitTextStroke: '2px #fff' }}>EDITZ</span>
        </motion.h1>
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 md:mt-8 space-y-6"
        >
          <div className="text-[10px] uppercase tracking-[0.5em] text-red-500 font-bold">
            Digital Cinema & Post-Production
          </div>
          <h2 className="text-xl md:text-3xl font-display font-bold uppercase tracking-tight text-white/90">
            We turn footage <br className="md:hidden" /> into stories.
          </h2>
          <p className="text-sm md:text-base text-white/50 max-w-lg mx-auto font-light leading-relaxed">
            Crafting immersive visual narratives through high-end cinematic effects, custom color grading, and dynamic sound design. For those who demand visual excellence.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#work"
            data-cursor="VIEW"
            className="px-8 py-4 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all"
          >
            Watch Showreel
          </a>
          <div className="flex flex-col text-center sm:text-left gap-1 mt-6 sm:mt-0">
            <span className="text-[10px] uppercase tracking-widest opacity-40 font-mono">EST. 2021</span>
            <span className="text-[10px] uppercase tracking-widest opacity-40 font-mono">TN / India</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 z-10"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/50 font-display">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative">
          <motion.div 
            animate={{ y: [0, 48] }} 
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-white absolute top-0 left-0" 
          />
        </div>
      </motion.div>
    </section>
  );
}
