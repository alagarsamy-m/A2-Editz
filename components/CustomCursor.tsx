'use client';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on fine pointers
    const mediaQuery = window.matchMedia('(pointer: fine)');
    
    const updateMousePosition = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Search up the DOM tree for a data-cursor attribute
      const cursorTarget = target.closest('[data-cursor]');
      if (cursorTarget) {
        setIsHovering(true);
        setHoverText(cursorTarget.getAttribute('data-cursor') || '');
      } else if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
        setHoverText('');
      } else {
        setIsHovering(false);
        setHoverText('');
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center rounded-full bg-white mix-blend-difference text-black overflow-hidden"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        width: isHovering ? (hoverText ? 80 : 40) : 16,
        height: isHovering ? (hoverText ? 80 : 40) : 16,
        translateX: '-50%',
        translateY: '-50%',
      }}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 300,
        mass: 0.5,
      }}
    >
      {isHovering && hoverText && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xs font-bold tracking-widest uppercase"
        >
          {hoverText}
        </motion.span>
      )}
    </motion.div>
  );
}
