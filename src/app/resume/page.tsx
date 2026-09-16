"use client";

import PageTransition from "@/components/ui/PageTransition";
import Scene from "@/components/canvas/Scene";
import Grid from "@/components/canvas/Grid";
import { useExperience } from "@/context/ExperienceContext";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

function CyberpunkResume() {
  return (
    <PageTransition>
      <div className="relative min-h-[calc(100vh-4rem)] py-20 px-4 md:px-8">
        <Scene>
          <Grid />
        </Scene>

        <div className="relative z-10 max-w-4xl mx-auto space-y-12">
          
          <h2 className="text-4xl font-bold text-center mb-12 text-[#0f0] matrix-text uppercase border-b border-[#0f0] pb-4">
            {'>'} CREDENTIALS_DB
          </h2>

          {/* Education */}
          <div className="bg-black/60 backdrop-blur-md p-8 border-glow-cyan">
            <h3 className="text-xl font-bold mb-4 text-[#00ffff] uppercase matrix-text">
              {'>'} EDUCATION_RECORD
            </h3>
            {portfolioData.education.map((edu, idx) => (
              <div key={idx} className="mb-4">
                <div className="text-xl font-bold text-white matrix-text uppercase">{edu.institution}</div>
                <div className="text-lg text-gray-300 font-mono">{edu.degree}</div>
                <div className="text-sm text-[#ff0033] mt-2 matrix-text">[{edu.date}]</div>
              </div>
            ))}
          </div>

          {/* Research */}
          <div className="bg-black/60 backdrop-blur-md p-8 border-glow-green">
            <h3 className="text-xl font-bold mb-6 text-[#0f0] uppercase matrix-text">
              {'>'} ACTIVE_RESEARCH
            </h3>
            <div className="space-y-6">
              {portfolioData.research.map((res, idx) => (
                <div key={idx} className="border-l-2 border-[#0f0] pl-4">
                  <div className="text-xl font-bold text-white matrix-text">{res.title}</div>
                  <div className="text-[#00ffff] text-sm mb-2 matrix-text">STATUS: {res.status.toUpperCase()}</div>
                  <div className="text-gray-300 font-mono mb-4">{res.description}</div>
                  <ul className="list-none space-y-2 text-sm font-mono text-gray-400">
                    {res.points.map((pt, pIdx) => (
                      <li key={pIdx}>- {pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="bg-black/60 backdrop-blur-md p-8 border-glow-cyan">
            <h3 className="text-xl font-bold mb-6 text-[#00ffff] uppercase matrix-text">
              {'>'} WORK_LOG
            </h3>
            <div className="space-y-8">
              {portfolioData.experience.map((exp, idx) => (
                <div key={idx} className="border-l-2 border-[#00ffff] pl-4">
                  <div className="text-xl font-bold text-white matrix-text uppercase">{exp.company}</div>
                  <div className="text-lg text-gray-300 font-mono">{exp.role}</div>
                  <div className="text-[#ff0033] text-sm mb-2 matrix-text">[{exp.date}]</div>
                  <ul className="list-none space-y-2 text-sm font-mono text-gray-400">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx}>- {pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}

function MinimalResume() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-[calc(100vh-4rem)] max-w-4xl mx-auto px-6 py-24"
    >
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-16">
        Resume
      </h1>

      <div className="space-y-20">
        
        {/* Education */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 pb-4 border-b border-gray-200">
            Education
          </h2>
          <div className="space-y-8">
            {portfolioData.education.map((edu, idx) => (
              <div key={idx} className="group">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{edu.institution}</h3>
                  <span className="text-sm text-gray-500 mt-1 md:mt-0">{edu.date}</span>
                </div>
                <div className="text-gray-600 text-lg">{edu.degree}</div>
                <div className="text-gray-500 text-sm mt-1">{edu.location}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Research */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 pb-4 border-b border-gray-200">
            Research
          </h2>
          <div className="space-y-12">
            {portfolioData.research.map((res, idx) => (
              <div key={idx}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{res.title}</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mt-2 md:mt-0">
                    {res.status}
                  </span>
                </div>
                <div className="text-gray-600 mb-4 font-medium">{res.institution}</div>
                <p className="text-gray-600 mb-4 leading-relaxed">{res.description}</p>
                <ul className="space-y-2">
                  {res.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex text-gray-600">
                      <span className="mr-3 text-gray-300">•</span>
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 pb-4 border-b border-gray-200">
            Experience
          </h2>
          <div className="space-y-12">
            {portfolioData.experience.map((exp, idx) => (
              <div key={idx}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.company}</h3>
                  <span className="text-sm text-gray-500 mt-1 md:mt-0">{exp.date}</span>
                </div>
                <div className="text-gray-600 font-medium text-lg mb-4">{exp.role}</div>
                <ul className="space-y-2">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex text-gray-600">
                      <span className="mr-3 text-gray-300">•</span>
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </div>
    </motion.div>
  );
}

export default function Resume() {
  const { experience, isMounted } = useExperience();

  if (!isMounted) return null;

  return experience === 'cyberpunk' ? <CyberpunkResume /> : <MinimalResume />;
}
