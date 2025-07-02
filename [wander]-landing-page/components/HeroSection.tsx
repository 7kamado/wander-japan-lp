
import React, { useState, useEffect } from 'react';
// 【修正】Buttonコンポーネントを読み込むために、拡張子「.tsx」を追記します。
import Button from './Button.tsx';

interface HeroSectionProps {
  onWatchVideosClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onWatchVideosClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation shortly after the component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Small delay to ensure styles are applied for transition
    return () => clearTimeout(timer);
  }, []);

  // --- 画像ソース ---
  // 美しく関連性の高い画像を直接リンクしています。
  const heroBackgroundImageUrl = "https://images.unsplash.com/photo-1542893394-813c74426544?q=80&w=2670&auto=format&fit=crop";

  return (
    <section 
      className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBackgroundImageUrl})` }}
      aria-label="Sunlight filtering through a lush bamboo forest with a path and bridge, serving as the hero background"
    >
      <div className="absolute inset-0 bg-black opacity-50 z-10" aria-hidden="true"></div>
      <div
        className={`relative z-20 p-4 sm:p-8 max-w-3xl transition-all duration-1000 ease-out
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
          See more. Feel more.
        </h1>
        <h2 className="text-2xl sm:text-3xl font-light mb-8" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
          Japan awaits.
        </h2>
        <p className="text-lg sm:text-xl mb-10 max-w-xl mx-auto" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
          Leave the crowds behind. Discover the untold stories and hidden wonders of Japan through immersive short videos.
        </p>
        <Button onClick={onWatchVideosClick} variant="primary" className="text-lg px-10 py-4">
          Watch The Videos
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
