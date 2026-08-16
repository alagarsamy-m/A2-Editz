'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const projects = [
  {
    id: 1,
    title: 'The Cut',
    category: 'Latest Project',
    video: 'https://res.cloudinary.com/ejz1wp0a/video/upload/v1786814357/reel01.mp4', // Cloudinary video
    aspect: 'aspect-video',
  },
  {
    id: 2,
    title: 'Creative Reel',
    category: 'Cinematic VFX',
    video: 'https://res.cloudinary.com/ejz1wp0a/video/upload/v1786814380/reel02.mp4',
    aspect: 'aspect-video',
  },
  {
    id: 3,
    title: 'Editing Workspace',
    category: 'Behind the Scenes',
    video: 'https://res.cloudinary.com/ejz1wp0a/video/upload/v1786814355/reel03.mp4',
    aspect: 'aspect-video',
  }
];

function ProjectCard({ project }: { project: any }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      if (!isPlaying) {
        videoRef.current.muted = false;
        videoRef.current.currentTime = 0;
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div 
      className={`relative flex-shrink-0 group w-full md:w-[60vw] lg:w-[45vw] ${project.aspect} overflow-hidden bg-[#111] cursor-pointer`}
      onClick={handlePlay}
    >
      <video
        ref={videoRef}
        src={project.video}
        autoPlay={true}
        loop
        muted={!isPlaying}
        playsInline
        controls={isPlaying}
        className={`w-full h-full object-cover transition-transform duration-1000 ${isPlaying ? 'opacity-100 scale-100' : 'group-hover:scale-105 opacity-80 group-hover:opacity-100'}`}
        onPause={() => setIsPlaying(false)}
      />
      {!isPlaying && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />
      )}
      
      {/* Play Button Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white/20 bg-black/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:border-red-500/50 transition-all duration-500">
            <Play className="w-8 h-8 md:w-10 md:h-10 text-white translate-x-1 group-hover:text-red-500 transition-colors duration-500" fill="currentColor" />
          </div>
        </div>
      )}

      {!isPlaying && (
        <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-20 pointer-events-none">
          <div className="overflow-hidden mb-2">
            <p className="text-red-500 font-mono text-[10px] md:text-xs tracking-widest uppercase font-bold translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
              [ {project.category} ]
            </p>
          </div>
          <div className="overflow-hidden">
            <h3 className="text-2xl md:text-4xl font-bold uppercase text-white tracking-tighter translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-150">
              {project.title}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Portfolio() {
  const targetRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-65%']);

  return (
    <section id="work" className="bg-[#050505] pt-24 md:pt-40 relative z-10">
      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[10px] uppercase tracking-[0.5em] text-red-500 font-bold mb-6">
            [ Showcase ]
          </div>
          <h2 className="font-display text-[60px] md:text-[112px] leading-[0.85] font-black uppercase tracking-tighter text-[#F5F5F0]">
            Selected<br/>
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #fff' }}>Work</span>
          </h2>
          <p className="mt-8 text-white/50 max-w-md font-light text-sm leading-relaxed">
            A collection of edits, visual experiments, and stories shaped frame by frame.
          </p>
        </motion.div>
      </div>

      {/* Scroll Area */}
      <div ref={targetRef} className={`${isMobile ? 'relative' : 'h-[300vh] relative'}`}>
        <div className={`${isMobile ? 'flex flex-col gap-6 px-6 pb-8' : 'sticky top-0 h-[100svh] md:h-screen flex items-center overflow-hidden'}`}>
          <motion.div style={isMobile ? undefined : { x }} className={`${isMobile ? 'flex flex-col gap-6' : 'flex gap-8 px-6 md:px-24'}`}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
