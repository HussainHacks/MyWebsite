import PageTransition from "@/components/ui/PageTransition";
import Scene from "@/components/canvas/Scene";
import Grid from "@/components/canvas/Grid";
import { Mail, Github } from "lucide-react";

export default function Contact() {
  return (
    <PageTransition>
      <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
        <Scene>
          <Grid />
        </Scene>

        <div className="relative z-10 w-full max-w-md bg-[#0a0a0f]/90 backdrop-blur-xl p-8 rounded-3xl border border-[#00f3ff]/40 shadow-[0_0_40px_rgba(0,243,255,0.15)] text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#00f3ff] text-glow-blue">Let's Connect</h2>
          
          <div className="space-y-6">
            <a 
              href="mailto:Syedhuss@iastate.edu"
              className="group flex items-center p-4 rounded-xl bg-white/5 hover:bg-[#00f3ff]/10 border border-transparent hover:border-[#00f3ff]/50 transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-[#00f3ff] group-hover:scale-110 transition-transform" />
              <span className="ml-4 text-gray-300 font-medium">Syedhuss@iastate.edu</span>
            </a>

            <a 
              href="https://github.com/syedhuss"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center p-4 rounded-xl bg-white/5 hover:bg-[#bc13fe]/10 border border-transparent hover:border-[#bc13fe]/50 transition-all duration-300"
            >
              <Github className="w-6 h-6 text-[#bc13fe] group-hover:scale-110 transition-transform" />
              <span className="ml-4 text-gray-300 font-medium">github.com/syedhuss</span>
            </a>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
