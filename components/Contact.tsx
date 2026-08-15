'use client';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="pt-24 md:pt-40 pb-12 bg-[#050505] relative z-10 flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-6 w-full text-center mb-24 md:mb-40">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[10px] uppercase tracking-[0.5em] text-red-500 font-bold mb-6">
            [ Collaboration ]
          </div>
          <h2 className="font-display text-[60px] sm:text-[90px] md:text-[112px] font-black uppercase tracking-tighter leading-[0.85] mb-8 text-[#F5F5F0]">
            Have a Story <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #fff' }}>Worth Editing?</span>
          </h2>
          <p className="text-white/50 text-sm font-light mb-16 max-w-xl mx-auto leading-relaxed">
            Let&apos;s turn your footage into something people remember.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://wa.me/918489081841?text=Hi%20Arun,%20I%20found%20A2%20Editz%20and%20I'd%20like%20to%20discuss%20a%20video%20editing%20project."
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="GO"
              className="px-8 py-4 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all w-full sm:w-auto"
            >
              Start a Project
            </a>
            <a
              href="https://www.instagram.com/arun_achu_26"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="GO"
              className="px-8 py-4 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all w-full sm:w-auto"
            >
              View Instagram
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer Minimal */}
      <div className="w-full max-w-7xl mx-auto px-6 border-t border-white/10 pt-10 pb-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start text-center md:text-left">
          <div className="flex flex-col">
            <a href="#" className="font-display font-bold text-2xl tracking-tighter text-[#e0e0e0]">
              A2 <span className="font-light italic text-red-500">EDITZ</span>
            </a>
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] uppercase tracking-widest opacity-40 mb-1 font-mono">Frames Edited</span>
            <span className="text-lg font-mono tracking-tight">1,240,492+</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] uppercase tracking-widest opacity-40 mb-1 font-mono">Location</span>
            <span className="text-sm font-mono tracking-tight uppercase">TN / India</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] uppercase tracking-widest opacity-40 mb-1 font-mono">Established</span>
            <span className="text-sm font-mono tracking-tight uppercase">2021</span>
          </div>
        </div>

        <div className="flex items-center space-x-6 opacity-50">
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-mono tracking-widest uppercase">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="https://www.instagram.com/arun_achu_26" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
}
