'use client';
import { motion } from 'motion/react';

const services = [
  {
    id: '01',
    title: 'Cinematic Video',
    description: 'Story-driven edits with rhythm, pacing, color, and atmosphere.',
  },
  {
    id: '02',
    title: 'Short-Form Content',
    description: 'Reels, Shorts, and social-first content designed to capture attention quickly.',
  },
  {
    id: '03',
    title: 'YouTube Editing',
    description: 'Long-form editing, pacing, retention-focused structure, and visual storytelling.',
  },
  {
    id: '04',
    title: 'Commercial',
    description: 'Premium promotional and brand-focused edits.',
  },
  {
    id: '05',
    title: 'Motion + VFX',
    description: 'Motion graphics, compositing, transitions, and visual effects.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-40 bg-[#050505] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <div className="text-[10px] uppercase tracking-[0.5em] text-red-500 font-bold mb-6">
            [ Capabilities ]
          </div>
          <h2 className="font-display text-[60px] md:text-[112px] leading-[0.85] font-black uppercase tracking-tighter text-[#F5F5F0]">
            What I<br/>
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #fff' }}>Edit</span>
          </h2>
        </motion.div>

        <div className="flex flex-col border-t border-white/10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row md:items-center py-8 md:py-12 border-b border-white/10 hover:bg-white/[0.02] transition-colors px-4 -mx-4 cursor-default"
              data-cursor="READ"
            >
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                <span className="font-serif italic text-white/30 text-[40px] font-bold leading-none">{service.id}</span>
              </div>
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <h3 className="font-display text-2xl md:text-4xl uppercase tracking-tighter font-bold group-hover:text-red-500 transition-colors">
                  {service.title}
                </h3>
              </div>
              <div className="w-full md:w-5/12">
                <p className="text-white/50 text-sm font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
