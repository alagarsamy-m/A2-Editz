'use client';
import { motion } from 'motion/react';

const processSteps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Understand the idea, audience, and objective.',
  },
  {
    num: '02',
    title: 'Structure',
    desc: 'Shape the story, pacing, and visual direction.',
  },
  {
    num: '03',
    title: 'Edit',
    desc: 'Build the sequence with rhythm, transitions, and visual language.',
  },
  {
    num: '04',
    title: 'Polish',
    desc: 'Color, motion, sound-aware finishing, and final refinement.',
  },
  {
    num: '05',
    title: 'Deliver',
    desc: 'Export optimized content for the intended platform.',
  }
];

export default function Process() {
  return (
    <section className="py-24 md:py-40 bg-[#0a0a0a] relative z-10">
      
      {/* Philosophy Statement */}
      <div className="max-w-5xl mx-auto px-6 mb-32 md:mb-48 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <div className="text-[10px] uppercase tracking-[0.5em] text-red-500 font-bold mb-6">
            [ Philosophy ]
          </div>
          <p className="font-display text-3xl md:text-[60px] leading-[0.9] font-black uppercase tracking-tighter text-[#F5F5F0]">
            Editing isn&apos;t just cutting clips.<br/>
            <span className="text-transparent" style={{ WebkitTextStroke: '1px #fff' }}>It&apos;s knowing when to stay.</span><br/>
            <span className="text-transparent" style={{ WebkitTextStroke: '1px #fff' }}>Knowing when to move.</span><br/>
            Knowing what the audience<br/>should feel next.
          </p>
        </motion.div>
      </div>

      {/* Process Steps */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 border-t border-white/10 pt-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-red-500 mb-6 uppercase">
                Step_{step.num}
              </span>
              <h4 className="font-display text-2xl uppercase font-bold tracking-tight mb-4">
                {step.title}
              </h4>
              <p className="text-[10px] text-white/50 font-light leading-relaxed tracking-widest uppercase">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
