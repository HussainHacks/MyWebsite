"use client";

import PageTransition from "@/components/ui/PageTransition";
import Scene from "@/components/canvas/Scene";
import Earth from "@/components/canvas/Earth";
import MatrixBackground from "@/components/ui/MatrixBackground";
import GlitchText from "@/components/ui/GlitchText";
import CyberpunkDashboard from "@/components/ui/CyberpunkDashboard";
import SatelliteFeed from "@/components/ui/SatelliteFeed";
import { useExperience } from "@/context/ExperienceContext";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { motion } from "framer-motion";

function CyberpunkHome() {
  const systemData = [
    { label: 'IDENTITY', value: portfolioData.person.name.toUpperCase().replace(/ /g, '_') },
    { label: 'ROLE', value: 'COMPUTER_ENGINEERING' },
    { label: 'STATUS', value: 'ONLINE' },
    { label: 'CLEARANCE', value: 'LEVEL_MAX' },
  ];

  return (
    <PageTransition>
      <MatrixBackground />
      <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Scene>
            <Earth />
          </Scene>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <div className="mb-8 mt-12">
            <GlitchText 
              text={portfolioData.person.name.toUpperCase()} 
              className="text-5xl md:text-8xl font-bold matrix-text block mb-2"
            />
            <div className="h-0.5 w-32 bg-gradient-to-r from-[#ff0033] via-[#0f0] to-[#00ffff] mx-auto"></div>
          </div>
          <p className="text-lg md:text-2xl matrix-text text-[#0f0] font-medium tracking-widest mb-12 font-mono">
            {'> ' + portfolioData.person.role.toUpperCase()} <br/>
            {'> SOFTWARE | EMBEDDED | AI_AUTOMATION'}
          </p>
          <div className="w-full max-w-2xl mb-12">
            <CyberpunkDashboard title="SYSTEM PROFILE" data={systemData} />
          </div>
          <div className="w-full max-w-4xl mb-12 hidden md:block">
            <SatelliteFeed />
          </div>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link href="/projects" className="px-8 py-3 border-glow-green hover:border-glow-cyan transition-all duration-300 font-mono matrix-text text-[#0f0] hover:text-[#00ffff] text-sm uppercase tracking-widest relative group overflow-hidden">
              <span className="relative z-10">{'>'} ACCESS PROJECTS</span>
              <div className="absolute inset-0 bg-[#0f0]/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </Link>
            <Link href="/contact" className="px-8 py-3 border-glow-red hover:border-glow-cyan transition-all duration-300 font-mono accent-red text-sm uppercase tracking-widest relative group overflow-hidden">
              <span className="relative z-10">{'>'} INITIATE CONTACT</span>
              <div className="absolute inset-0 bg-[#ff0033]/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </Link>
            <Link href="/resume" className="px-8 py-3 border-glow-cyan transition-all duration-300 font-mono accent-cyan text-sm uppercase tracking-widest relative group overflow-hidden">
              <span className="relative z-10">{'>'} DOWNLOAD CREDENTIALS</span>
              <div className="absolute inset-0 bg-[#00ffff]/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </Link>
          </div>
          <div className="text-xs matrix-text text-[#00ffff] font-mono animate-pulse mb-8">
            <span className="text-[#ff0033]">{'[WARNING]'}</span> HIGH_INTENSITY_CYBERPUNK_MODE_ACTIVE
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

function MinimalHome() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-center max-w-5xl mx-auto px-6 py-20"
    >
      <div className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
          {portfolioData.person.name}
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-medium text-gray-600 max-w-3xl leading-snug">
          {portfolioData.person.role} <br className="hidden md:block" />
          <span className="text-gray-400">AI / ML / Software / Systems</span>
        </h2>
        
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed mt-8">
          {portfolioData.person.shortBio}
        </p>
        
        <div className="pt-12 flex flex-col sm:flex-row gap-6">
          <Link 
            href="/projects" 
            className="inline-flex justify-center items-center px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
          >
            View Projects
          </Link>
          <Link 
            href="/about" 
            className="inline-flex justify-center items-center px-8 py-4 bg-gray-100 text-gray-900 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300"
          >
            About Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const { experience, isMounted } = useExperience();

  if (!isMounted) return null;

  return experience === 'cyberpunk' ? <CyberpunkHome /> : <MinimalHome />;
}
