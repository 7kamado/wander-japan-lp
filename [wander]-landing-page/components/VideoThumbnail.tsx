
import React, { useState, useRef } from 'react';
// 【修正】型定義ファイルを読み込むために、拡張子「.ts」を追記します。
// '../' は一つ上の階層を指します。
import { VideoItem } from '../types.ts';

interface VideoThumbnailProps {
  video: VideoItem;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ video }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset video to start
      videoRef.current.play().catch(error => console.warn("Video play interrupted:", error));
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div 
      className="group relative aspect-video bg-slate-700 rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!isHovered && (
        <img src={video.thumbnailUrl} alt={video.title} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" />
      )}
      <video
        ref={videoRef}
        src={video.videoClipUrl}
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <h3 className="text-white text-lg font-semibold truncate">{video.title}</h3>
        <p className="text-sky-300 text-sm">{video.categoryText}</p>
      </div>
       {!isHovered && (
         <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
            <h3 className="text-white text-lg font-semibold truncate">{video.title}</h3>
            <p className="text-sky-300 text-sm">{video.categoryText}</p>
         </div>
       )}
    </div>
  );
};

export default VideoThumbnail;
