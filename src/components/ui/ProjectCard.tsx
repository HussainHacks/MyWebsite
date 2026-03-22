"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  importance: string;
  contribution?: string;
}

export default function ProjectCard({ title, description, skills, importance, contribution }: ProjectCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full p-8 bg-[#0a0a0f] rounded-2xl border border-white/10 hover:border-[#00f3ff]/50 transition-colors duration-300 cursor-pointer"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="flex flex-col h-full space-y-4"
      >
        <h3 className="text-2xl font-bold text-[#00f3ff] text-glow-blue">{title}</h3>
        <p className="text-gray-300 text-lg">{description}</p>
        
        {contribution && (
          <div className="bg-[#bc13fe]/10 p-4 rounded-lg border border-[#bc13fe]/20">
            <span className="font-semibold text-[#bc13fe]">My Role:</span> {contribution}
          </div>
        )}

        <div className="flex-grow">
          <div className="font-semibold text-white mb-2">Why it matters:</div>
          <p className="text-gray-400 italic">"{importance}"</p>
        </div>

        <div className="pt-4 flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <span key={idx} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded text-gray-300">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
