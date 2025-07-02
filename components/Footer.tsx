
import React from 'react';
// 【修正】ロゴとアイコンのコンポーネントを読み込むために、拡張子「.tsx」を追記します。
import { WanderLogo, InstagramIcon, TikTokIcon, YouTubeIcon } from './Icons.tsx';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-slate-400 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <a href="/" aria-label="Wander Home Page" className="inline-block">
              <WanderLogo className="text-sky-400" />
            </a>
            <p className="text-sm text-slate-500 mt-2">
              Discovering the unseen Japan.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm mb-2 font-semibold text-slate-300">Follow Us</p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/wanderjapan.co/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Wander on Instagram" 
                className="text-slate-400 hover:text-sky-300 transition-colors duration-200"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a 
                href="https://www.tiktok.com/@wanderjapan.co" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Wander on TikTok" 
                className="text-slate-400 hover:text-sky-300 transition-colors duration-200"
              >
                <TikTokIcon className="w-6 h-6" />
              </a>
              <a 
                href="https://www.youtube.com/@wanderjapanco" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Wander on YouTube" 
                className="text-slate-400 hover:text-sky-300 transition-colors duration-200"
              >
                <YouTubeIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-sm">
          <p>&copy; {currentYear} Nanakamado, Inc. All Rights Reserved.</p>
          <p className="mt-2 text-slate-500">
            <a 
              href="https://www.notion.so/7kamado/Privacy-Policy-197c04dbc446802789fdef6177256a3d?source=copy_link" 
              className="hover:text-sky-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a 
              href="https://www.notion.so/7kamado/Terms-of-Service-197c04dbc446803e8c02e62bfbab75bf?source=copy_link" 
              className="hover:text-sky-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
