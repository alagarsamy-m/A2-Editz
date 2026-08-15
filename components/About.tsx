'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-40 bg-[#050505] relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="w-full lg:w-1/2 relative grid grid-cols-2 gap-2 md:gap-4">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-2 relative aspect-[16/9] w-full mx-auto overflow-hidden bg-[#111]"
            >
              <motion.div style={{ y }} className="absolute inset-0 h-[120%] -top-[10%] w-full bg-black">
                <Image
                  src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=1200&auto=format&fit=crop"
                  alt="Video Editing Workspace"
                  fill
                  className="object-cover opacity-70 grayscale mix-blend-luminosity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-red-900/20 mix-blend-overlay" />
              </motion.div>
              <div className="absolute inset-0 border border-white/10 m-2 md:m-4 z-10 pointer-events-none" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square w-full overflow-hidden bg-[#111]"
            >
              <Image
                src="/639752021_18074974154381669_6226053457561429232_n.webp"
                alt="Arun Profile"
                fill
                className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 border border-white/10 m-2 z-10 pointer-events-none" />
            </motion.div>

            <div className="grid grid-rows-2 gap-2 md:gap-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative w-full h-full overflow-hidden bg-[#111]"
              >
                <Image
                  src="/639725833_18074974157381669_1949812397734097825_n.webp"
                  alt="Arun Working"
                  fill
                  className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative w-full h-full overflow-hidden bg-[#111]"
              >
                <Image
                  src="/639761065_18074974139381669_3007896066017209124_n.webp"
                  alt="Arun Editing"
                  fill
                  className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0"
                />
              </motion.div>
            </div>

          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-[10px] uppercase tracking-[0.5em] text-red-500 font-bold mb-6">
                [ Profile ]
              </div>
              <h2 className="font-display text-[60px] md:text-[112px] leading-[0.85] font-black uppercase tracking-tighter text-[#F5F5F0]">
                Behind <br className="hidden md:block" />
                <span className="text-transparent" style={{ WebkitTextStroke: '2px #fff' }}>The Edit</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 space-y-6 text-white/50 text-sm font-light leading-relaxed"
            >
              <p className="text-[10px] uppercase tracking-widest text-white font-bold opacity-100">
                Arun <span className="text-red-500 mx-2">/</span> Creative Specialist
              </p>
              <p>
                With 5 years of professional experience across independent freelance and studio environments (including DoDo Solutions and Thadam StudioS), I specialize in transforming raw footage into compelling visual narratives.
              </p>
              
              <div className="pt-6 border-t border-white/10 mt-8">
                <h4 className="font-display uppercase tracking-widest text-[10px] font-bold text-white/50 mb-4 font-mono">Primary_Tools</h4>
                <div className="flex flex-wrap gap-4 font-display uppercase tracking-widest text-[10px] font-semibold">
                  <span className="px-6 py-3 border border-white/20 hover:border-red-500 transition-colors">Premiere Pro</span>
                  <span className="px-6 py-3 border border-white/20 hover:border-red-500 transition-colors">After Effects</span>
                  <span className="px-6 py-3 border border-white/20 hover:border-red-500 transition-colors">DaVinci Resolve</span>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
