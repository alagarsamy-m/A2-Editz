import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import About from '@/components/About';
import Process from '@/components/Process';
import InstagramSection from '@/components/InstagramSection';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen relative z-10">
      <Navigation />
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Process />
      <InstagramSection />
      <Contact />
    </main>
  );
}
