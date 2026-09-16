"use client";

import PageTransition from "@/components/ui/PageTransition";
import Scene from "@/components/canvas/Scene";
import Particles from "@/components/canvas/Particles";
import { useExperience } from "@/context/ExperienceContext";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

function CyberpunkProjects() {
  return (
    <PageTransition>
      <div className="relative min-h-[calc(100vh-4rem)] py-20 px-4 md:px-8">
        <Scene>
          <Particles count={1500} />
        </Scene>

        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#0f0] matrix-text uppercase tracking-widest border-b border-[#0f0] pb-4">
            {'>'} PROJECT_DATABASE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((proj, idx) => (
              <div 
                key={idx} 
                className="h-full bg-black/60 backdrop-blur-md p-6 border-glow-cyan hover:border-glow-green transition-all duration-300 flex flex-col group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#00ffff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <div className="text-[#00ffff] font-mono text-xs mb-2 uppercase matrix-text border-b border-[#00ffff]/30 pb-2">
                  ID: {proj.id} // {proj.status}
                </div>
                <h3 className="text-xl font-bold text-white uppercase matrix-text mb-3">
                  {proj.title}
                </h3>
                <p className="text-gray-300 text-sm font-mono mb-4 flex-grow">
                  {proj.description}
                </p>
                <div className="mb-4">
                  <div className="text-[#ff0033] text-xs font-bold uppercase mb-1 matrix-text">{'>>'} HIGHLIGHTS</div>
                  <ul className="text-gray-400 text-xs font-mono space-y-1">
                    {proj.highlights.slice(0, 3).map((h, i) => (
                      <li key={i}>- {h}</li>
                    ))}
                    {proj.highlights.length > 3 && <li>...</li>}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {proj.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="text-[10px] text-[#0f0] border border-[#0f0]/50 px-2 py-0.5 rounded-sm uppercase">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

function MinimalProjects() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-[calc(100vh-4rem)] max-w-5xl mx-auto px-6 py-24"
    >
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-20">
        Selected Work
      </h1>

      <div className="space-y-24">
        {portfolioData.projects.map((proj, idx) => (
          <div key={idx} className="group border-t border-gray-200 pt-10 first:border-t-0 first:pt-0">
            <div className="flex flex-col lg:flex-row lg:gap-16">
              
              <div className="lg:w-1/3 mb-6 lg:mb-0">
                <div className="sticky top-24">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{proj.title}</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mb-6">
                    {proj.status.replace(/_/g, ' ')}
                  </span>
                  
                  <div className="flex flex-wrap gap-2">
                    {proj.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="text-sm text-gray-500">
                        {tech}{tIdx < proj.technologies.length - 1 ? ',' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="lg:w-2/3">
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {proj.description}
                </p>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Highlights</h4>
                  <ul className="space-y-3">
                    {proj.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start text-gray-600">
                        <span className="mr-3 text-gray-400 mt-0.5">•</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { experience, isMounted } = useExperience();

  if (!isMounted) return null;

  return experience === 'cyberpunk' ? <CyberpunkProjects /> : <MinimalProjects />;
}
