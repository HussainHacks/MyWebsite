"use client";

import PageTransition from "@/components/ui/PageTransition";
import Scene from "@/components/canvas/Scene";
import Particles from "@/components/canvas/Particles";
import { useExperience } from "@/context/ExperienceContext";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

function CyberpunkAbout() {
  return (
    <PageTransition>
      <div className="relative min-h-[calc(100vh-4rem)] py-20 px-4 md:px-8">
        
        {/* 3D Background */}
        <Scene>
          <Particles count={3000} />
        </Scene>

        <div className="relative z-10 max-w-4xl mx-auto bg-black/60 backdrop-blur-md p-8 md:p-12 border-glow-cyan">
          <h2 className="text-4xl font-bold mb-8 text-[#0f0] matrix-text uppercase tracking-widest border-b border-[#0f0] pb-4">
            {'>'} SYSTEM_QUERY: ABOUT_ME
          </h2>
          
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-mono">
            <p className="matrix-text text-[#0f0]">
              {portfolioData.person.bio}
            </p>
            
            <div className="pt-6">
              <h3 className="text-2xl font-semibold mb-4 text-[#00ffff] uppercase matrix-text">
                {'>'} ACTIVE_MODULES (INTERESTS)
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {portfolioData.interests.map((interest, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-[#0f0] matrix-text">
                    <span className="text-[#ff0033] animate-pulse">[*]</span>
                    <span>{interest.toUpperCase().replace(/ /g, '_')}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

function MinimalAbout() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-[calc(100vh-4rem)] max-w-4xl mx-auto px-6 py-24"
    >
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-12">
        About Me
      </h1>
      
      <div className="prose prose-lg prose-gray max-w-none">
        <p className="text-xl text-gray-600 leading-relaxed mb-16 max-w-3xl">
          {portfolioData.person.bio}
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 border-t border-gray-200 pt-12">
          Areas of Interest
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8">
          {portfolioData.interests.map((interest, idx) => (
            <div key={idx} className="flex items-center space-x-4">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
              <span className="text-gray-700 font-medium">{interest}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const { experience, isMounted } = useExperience();

  if (!isMounted) return null;

  return experience === 'cyberpunk' ? <CyberpunkAbout /> : <MinimalAbout />;
}
