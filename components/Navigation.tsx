'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-[#050505]/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 mr-4">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-white/50">Recording_Status: Active</span>
            </div>
            <a href="#" className="font-display font-bold text-2xl tracking-tighter text-[#e0e0e0]">
              A2 <span className="font-light italic text-red-500">EDITZ</span>
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/70 hover:text-white transition-opacity"
                data-cursor="GO"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              data-cursor="START"
              className="px-8 py-4 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all"
            >
              Start a Project
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 right-6 text-white p-2"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-4xl uppercase tracking-tighter font-black text-white hover:text-red-500 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
