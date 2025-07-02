
import React, { useRef } from 'react';
// 【修正】すべてのコンポーネント読み込みに、拡張子「.tsx」を追記します。
// これにより、ブラウザはどのファイルを読み込むべきか正確に理解できます。
import HeroSection from './components/HeroSection.tsx';
import AboutSection from './components/AboutSection.tsx';
import FeaturedExperiencesSection from './components/FeaturedExperiencesSection.tsx';
import HowItWorksSection from './components/HowItWorksSection.tsx';
import CallToActionSection from './components/CallToActionSection.tsx';
import Footer from './components/Footer.tsx';

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
