
import React from 'react';
import { PlayIcon, BookmarkIcon, AirplaneIcon } from './Icons';

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-slate-800 rounded-lg shadow-xl h-full">
    {icon}
    <h3 className="text-2xl font-semibold text-sky-400 mb-3">{title}</h3>
    <p className="text-slate-300 leading-relaxed">{description}</p>
  </div>
);

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-sky-400 mb-16">
          Your Journey Starts Here
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <StepCard 
            icon={<PlayIcon />} 
            title="1. WATCH" 
            description="Immerse yourself in our videos and discover experiences you won't find anywhere else." 
          />
          <StepCard 
            icon={<BookmarkIcon />} 
            title="2. SAVE" 
            description="Follow us on social media. Save your favorite spots and build your personal Japan wish list." 
          />
          <StepCard 
            icon={<AirplaneIcon />} 
            title="3. GO" 
            description="Pack your bags and step into the story. Create your own unforgettable memories in the real Japan." 
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
