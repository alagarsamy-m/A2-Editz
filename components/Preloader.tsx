'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1.5 seconds maximum preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 1500);
    
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
          exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="flex flex-col items-center justify-center overflow-hidden h-24">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="text-white text-5xl md:text-[80px] font-display uppercase tracking-tighter font-black flex gap-4"
            >
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #fff' }}>A2</span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-red-500 font-light italic"
              >
                EDITZ
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
