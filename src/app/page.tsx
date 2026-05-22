import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { ValuePropositions } from '@/components/ValuePropositions';
import { OurOfferings } from '@/components/OurOfferings';
import { Team } from '@/components/Team';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <ValuePropositions />
        <OurOfferings />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
