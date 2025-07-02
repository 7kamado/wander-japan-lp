
import React from 'react';
// 【修正】ButtonとIconsコンポーネントを読み込むために、拡張子「.tsx」を追記します。
import Button from './Button.tsx';
import { InstagramIcon, TikTokIcon, YouTubeIcon } from './Icons.tsx';

const CallToActionSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-900">
      {/* Consider adding a subtle background image or pattern here if desired */}
      {/* For "A dynamic, visually rich background collage..." a complex solution is needed. 
          This version uses a clean dark background. */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-400 mb-6 leading-tight">
          Don't miss our next discovery.
        </h2>
        <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          New videos from hidden corners of Japan are released every week. Follow us and be the first to know.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6">
          <Button 
            href="https://www.instagram.com/wanderjapan.co/"
            target="_blank" 
            rel="noopener noreferrer" 
            variant="primary" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 !px-6 !py-3 text-base"
          >
            <InstagramIcon className="w-5 h-5" />
            Follow on Instagram
          </Button>
          <Button 
            href="https://www.tiktok.com/@wanderjapan.co"
            target="_blank" 
            rel="noopener noreferrer" 
            variant="secondary" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 !bg-pink-500 hover:!bg-pink-600 !text-white !px-6 !py-3 text-base focus:!ring-pink-400"
          >
            <TikTokIcon className="w-5 h-5" />
            Follow on TikTok
          </Button>
          <Button 
            href="https://www.youtube.com/@wanderjapanco"
            target="_blank" 
            rel="noopener noreferrer" 
            variant="secondary" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 !bg-red-600 hover:!bg-red-700 !text-white !px-6 !py-3 text-base focus:!ring-red-500"
          >
            <YouTubeIcon className="w-5 h-5" />
            Follow on YouTube
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
