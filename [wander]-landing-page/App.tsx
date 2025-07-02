
import React, { useRef } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturedExperiencesSection from './components/FeaturedExperiencesSection';
import HowItWorksSection from './components/HowItWorksSection';
import CallToActionSection from './components/CallToActionSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const featuredExperiencesRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      <HeroSection onWatchVideosClick={() => scrollToRef(featuredExperiencesRef)} />
      <main className="flex-grow">
        <div ref={aboutSectionRef}>
          <AboutSection />
        </div>
        <div ref={featuredExperiencesRef}>
          <FeaturedExperiencesSection />
        </div>
        <HowItWorksSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
