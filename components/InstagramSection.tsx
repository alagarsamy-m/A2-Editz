'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

const instaPosts = [
  {
    id: 1,
    image: '/for post/post1.png',
    link: 'https://www.instagram.com/arun_achu_26'
  },
  {
    id: 2,
    image: '/for post/post2.png',
    link: 'https://www.instagram.com/arun_achu_26'
  },
  {
    id: 3,
    image: '/for post/post3.png',
    link: 'https://www.instagram.com/arun_achu_26'
  },
  {
    id: 4,
    image: '/for post/post4.png',
    link: 'https://www.instagram.com/arun_achu_26'
  }
];

export default function InstagramSection() {
  return (
    <section className="py-24 bg-[#050505] relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div>
            <div className="text-[10px] uppercase tracking-[0.5em] text-red-500 font-bold mb-6">
              [ Social ]
            </div>
            <h2 className="font-display text-[50px] md:text-[80px] leading-[0.85] font-black uppercase tracking-tighter text-[#F5F5F0]">
              From The <br/>
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #fff' }}>Feed</span>
            </h2>
          </div>
          
          <a
            href="https://www.instagram.com/arun_achu_26"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="GO"
            className="px-8 py-4 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all inline-block text-center"
          >
            View more on Instagram &rarr;
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instaPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square group overflow-hidden bg-white/5 block"
              data-cursor="VIEW"
            >
              <Image
                src={post.image}
                alt="Instagram Post"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 transition-colors duration-500" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
