"use client";

import PageTransition from "@/components/ui/PageTransition";
import Scene from "@/components/canvas/Scene";
import Grid from "@/components/canvas/Grid";
import { Mail, Phone } from "lucide-react";
import { useExperience } from "@/context/ExperienceContext";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

function CyberpunkContact() {
  return (
    <PageTransition>
      <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
        <Scene>
          <Grid />
        </Scene>

        <div className="relative z-10 w-full max-w-md bg-black/80 backdrop-blur-xl p-8 border-glow-cyan text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#00ffff] uppercase matrix-text">
            {'>'} ESTABLISH_CONNECTION
          </h2>
          
          <div className="space-y-6">
            <a 
              href={`mailto:${portfolioData.person.email}`}
              className="group flex items-center p-4 bg-[#00ffff]/5 hover:bg-[#00ffff]/20 border border-[#00ffff]/30 hover:border-[#00ffff] transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-[#00ffff] group-hover:scale-110 transition-transform" />
              <span className="ml-4 text-gray-300 font-mono group-hover:text-white transition-colors">{portfolioData.person.email}</span>
            </a>

            <a 
              href={`tel:${portfolioData.person.phone.replace(/[^0-9+]/g, '')}`}
              className="group flex items-center p-4 bg-[#0f0]/5 hover:bg-[#0f0]/20 border border-[#0f0]/30 hover:border-[#0f0] transition-all duration-300"
            >
              <Phone className="w-6 h-6 text-[#0f0] group-hover:scale-110 transition-transform" />
              <span className="ml-4 text-gray-300 font-mono group-hover:text-white transition-colors">{portfolioData.person.phone}</span>
            </a>
          </div>
          
          <div className="mt-8 text-xs font-mono text-gray-500">
            AWAITING HANDSHAKE...
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

function MinimalContact() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 py-24"
    >
      <div className="w-full max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
          Get in touch.
        </h1>
        <p className="text-xl text-gray-500 mb-16">
          Feel free to reach out for collaborations or just a friendly hello.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          <a 
            href={`mailto:${portfolioData.person.email}`}
            className="group flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-100 transition-colors duration-300">
              <Mail className="w-6 h-6 text-gray-900" />
            </div>
            <span className="text-lg font-medium text-gray-900">{portfolioData.person.email}</span>
            <span className="text-sm text-gray-500 mt-1">Email</span>
          </a>

          <div className="hidden sm:block w-px h-24 bg-gray-200"></div>

          <a 
            href={`tel:${portfolioData.person.phone.replace(/[^0-9+]/g, '')}`}
            className="group flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-100 transition-colors duration-300">
              <Phone className="w-6 h-6 text-gray-900" />
            </div>
            <span className="text-lg font-medium text-gray-900">{portfolioData.person.phone}</span>
            <span className="text-sm text-gray-500 mt-1">Phone</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Contact() {
  const { experience, isMounted } = useExperience();

  if (!isMounted) return null;

  return experience === 'cyberpunk' ? <CyberpunkContact /> : <MinimalContact />;
}
