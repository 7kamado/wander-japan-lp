
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/seed/wanderjapan_team_rural/800/600" 
              alt="Wander team in rural Japan" 
              className="rounded-lg shadow-2xl object-cover w-full h-auto aspect-[4/3]" 
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-sky-400 mb-6">
              Tired of the tourist traps? So were we.
            </h2>
            <p className="text-lg text-slate-300 mb-4 leading-relaxed">
              Wander was born from a simple belief: the true soul of Japan isn't found in crowded cities or perfectly polished guidebooks. It's in the quiet mountain temples, the vibrant local festivals, the misty forests, and the warm smiles of the people who call these places home.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              We are a small team of explorers and creators passionate about showing you this other side of Japan. We travel off the beaten path to capture authentic, bite-sized moments that inspire you not just to see, but to truly feel. This isn't just a collection of videos. It's an invitation to your next great adventure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;