
import React, { useState, useMemo } from 'react';
import { VIDEO_DATA, FILTER_THEMES } from '../constants';
import { VideoItem, ThemeValue, Themes } from '../types';
import VideoThumbnail from './VideoThumbnail';
import Button from './Button';

const FeaturedExperiencesSection: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<ThemeValue>(Themes.ALL);

  const filteredVideos = useMemo(() => {
    if (activeTheme === Themes.ALL) {
      return VIDEO_DATA;
    }
    return VIDEO_DATA.filter(video => video.theme === activeTheme);
  }, [activeTheme]);

  return (
    <section className="py-16 sm:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-sky-400 mb-6">
          Find Your Inspiration
        </h2>
        <p className="text-lg text-center text-slate-300 mb-10 max-w-2xl mx-auto">
          Explore our curated collection of short videos. What story will you step into?
        </p>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {FILTER_THEMES.map(theme => (
            <button
              key={theme}
              onClick={() => setActiveTheme(theme)}
              className={`px-4 py-2 text-sm sm:text-base font-medium rounded-md transition-colors duration-200
                ${activeTheme === theme 
                  ? 'bg-sky-500 text-white' 
                  : 'bg-slate-700 text-sky-200 hover:bg-slate-600'
                }`}
            >
              {theme}
            </button>
          ))}
        </div>

        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredVideos.map((video: VideoItem) => (
              <VideoThumbnail key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-400 text-lg">No videos found for this theme. More coming soon!</p>
        )}
        

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="text-lg px-10 py-3"
            href="https://www.wanderjapan.co/videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore More Videos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperiencesSection;
