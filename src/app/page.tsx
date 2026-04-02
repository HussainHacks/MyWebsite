import PageTransition from "@/components/ui/PageTransition";
import Scene from "@/components/canvas/Scene";
import Earth from "@/components/canvas/Earth";
import MatrixBackground from "@/components/ui/MatrixBackground";
import GlitchText from "@/components/ui/GlitchText";
import CyberpunkDashboard from "@/components/ui/CyberpunkDashboard";
import SatelliteFeed from "@/components/ui/SatelliteFeed";

export default function Home() {
  const systemData = [
    { label: 'IDENTITY', value: 'SYED_AHMED_HUSSAIN' },
    { label: 'ROLE', value: 'SECURITY_ARCHITECT' },
    { label: 'STATUS', value: 'ONLINE' },
    { label: 'CLEARANCE', value: 'LEVEL_MAX' },
  ];

  return (
    <PageTransition>
      <MatrixBackground />
      
      <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden">
        
        {/* 3D Background - Subtle */}
        <div className="absolute inset-0 opacity-30">
          <Scene>
            <Earth />
          </Scene>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          {/* Main Title with Glitch Effect */}
          <div className="mb-8">
            <GlitchText 
              text="SYED AHMED HUSSAIN" 
              className="text-6xl md:text-8xl font-bold matrix-text block mb-2"
            />
            <div className="h-0.5 w-32 bg-gradient-to-r from-[#ff0033] via-[#0f0] to-[#00ffff] mx-auto"></div>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-2xl matrix-text text-[#0f0] font-medium tracking-widest mb-12 font-mono">
            {'> COMPUTER ENGINEERING STUDENT'} <br/>
            {'> SOFTWARE | EMBEDDED | SECURITY | AI_AUTOMATION'}
          </p>

          {/* System Status Dashboard */}
          <div className="w-full max-w-2xl mb-12">
            <CyberpunkDashboard title="SYSTEM PROFILE" data={systemData} />
          </div>

          {/* Satellite Data Feed */}
          <div className="w-full max-w-4xl mb-12">
            <SatelliteFeed />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a 
              href="/projects"
              className="px-8 py-3 border-glow-green hover:border-glow-cyan transition-all duration-300 font-mono matrix-text text-[#0f0] hover:text-[#00ffff] text-sm uppercase tracking-widest relative group overflow-hidden"
            >
              <span className="relative z-10">{'>'} ACCESS PROJECTS</span>
              <div className="absolute inset-0 bg-[#0f0]/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>
            <a 
              href="/contact"
              className="px-8 py-3 border-glow-red hover:border-glow-cyan transition-all duration-300 font-mono accent-red text-sm uppercase tracking-widest relative group overflow-hidden"
            >
              <span className="relative z-10">{'>'} INITIATE CONTACT</span>
              <div className="absolute inset-0 bg-[#ff0033]/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>
            <a 
              href="/resume"
              className="px-8 py-3 border-glow-cyan transition-all duration-300 font-mono accent-cyan text-sm uppercase tracking-widest relative group overflow-hidden"
            >
              <span className="relative z-10">{'>'} DOWNLOAD CREDENTIALS</span>
              <div className="absolute inset-0 bg-[#00ffff]/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>
          </div>

          {/* Status Line */}
          <div className="text-xs matrix-text text-[#00ffff] font-mono animate-pulse">
            <span className="text-[#ff0033]">{'[WARNING]'}</span> HIGH_INTENSITY_CYBERPUNK_MODE_ACTIVE
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
