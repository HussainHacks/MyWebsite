"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type ExperienceMode = "cyberpunk" | "minimal";

interface ExperienceContextProps {
  experience: ExperienceMode;
  setExperience: (mode: ExperienceMode) => void;
  toggleExperience: () => void;
  isMounted: boolean;
}

const ExperienceContext = createContext<ExperienceContextProps | undefined>(undefined);

export const ExperienceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [experience, setExperienceState] = useState<ExperienceMode>("cyberpunk");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Hydration safe: read from localStorage only on client
    const saved = window.localStorage.getItem("portfolioExperience") as ExperienceMode | null;
    if (saved === "cyberpunk" || saved === "minimal") {
      setExperienceState(saved);
    }
    setIsMounted(true);
  }, []);

  const setExperience = (mode: ExperienceMode) => {
    setExperienceState(mode);
    window.localStorage.setItem("portfolioExperience", mode);
  };

  const toggleExperience = () => {
    const nextMode = experience === "cyberpunk" ? "minimal" : "cyberpunk";
    setExperience(nextMode);
  };

  // Ensure HTML class updates for global scoping if necessary, though we use independent structures
  useEffect(() => {
    if (isMounted) {
      if (experience === "minimal") {
        document.documentElement.classList.add("minimal-mode");
        document.documentElement.classList.remove("cyberpunk-mode");
      } else {
        document.documentElement.classList.add("cyberpunk-mode");
        document.documentElement.classList.remove("minimal-mode");
      }
    }
  }, [experience, isMounted]);

  return (
    <ExperienceContext.Provider value={{ experience, setExperience, toggleExperience, isMounted }}>
      {children}
    </ExperienceContext.Provider>
  );
};

export const useExperience = () => {
  const context = useContext(ExperienceContext);
  if (!context) {
    throw new Error("useExperience must be used within an ExperienceProvider");
  }
  return context;
};
