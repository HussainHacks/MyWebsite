import PageTransition from "@/components/ui/PageTransition";
import Scene from "@/components/canvas/Scene";
import Earth from "@/components/canvas/Earth";

export default function Home() {
  return (
    <PageTransition>
      <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden">
        
        {/* 3D Background */}
        <Scene>
          <Earth />
        </Scene>

        {/* Foreground Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-glow-blue text-[#00f3ff]">
            Syed Ahmed Hussain
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide mb-8">
            Computer Engineering Student | Software | Embedded | Security | AI Automation
          </p>
          
          <div className="flex gap-4">
            <a 
              href="/projects"
              className="px-8 py-3 rounded-full bg-[#00f3ff]/10 border border-[#00f3ff] text-[#00f3ff] hover:bg-[#00f3ff]/20 hover:shadow-neon-blue transition-all duration-300 font-semibold"
            >
              View Projects
            </a>
            <a 
              href="/contact"
              className="px-8 py-3 rounded-full bg-[#bc13fe]/10 border border-[#bc13fe] text-[#bc13fe] hover:bg-[#bc13fe]/20 hover:shadow-neon-purple transition-all duration-300 font-semibold"
            >
              Contact Me
            </a>
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
