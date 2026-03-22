import PageTransition from "@/components/ui/PageTransition";
import Scene from "@/components/canvas/Scene";
import Particles from "@/components/canvas/Particles";

export default function About() {
  return (
    <PageTransition>
      <div className="relative min-h-[calc(100vh-4rem)] py-20 px-4 md:px-8">
        
        {/* 3D Background */}
        <Scene>
          <Particles count={3000} />
        </Scene>

        <div className="relative z-10 max-w-4xl mx-auto bg-[#0a0a0f]/80 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/5 shadow-[0_0_30px_rgba(0,243,255,0.1)]">
          <h2 className="text-4xl font-bold mb-8 text-glow-blue text-[#00f3ff]">About Me</h2>
          
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              I am a Computer Engineering student with a strong interest in software development, 
              embedded systems, cybersecurity, and AI automation.
            </p>
            <p>
              I enjoy building real systems, not just theory. I work with Java, C, Python, Linux, 
              and web technologies. I like building tools, automation scripts, and interactive applications
              that solve actual problems.
            </p>
            
            <div className="pt-6">
              <h3 className="text-2xl font-semibold mb-4 text-[#bc13fe] text-glow-purple">Current Interests</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Low level programming",
                  "Digital logic and computer architecture",
                  "AI agents that control real systems",
                  "Web automation",
                  "Bug bounty / security research",
                  "UI automation on Linux / VPS environments"
                ].map((interest, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <span className="h-2 w-2 bg-[#00f3ff] rounded-full shadow-neon-blue"></span>
                    <span>{interest}</span>
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
