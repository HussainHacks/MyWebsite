import PageTransition from "@/components/ui/PageTransition";
import Scene from "@/components/canvas/Scene";
import Grid from "@/components/canvas/Grid";

export default function Resume() {
  const skills = [
    "Java", "Python", "C", "Linux", "Git", "React", "Node.js",
    "Digital Logic", "Assembly basics", "Computer Organization",
    "Automation", "Playwright", "Puppeteer", "Three.js"
  ];

  const experience = [
    {
      role: "Founder - EvolvAISolutions",
      date: "Jan 2025 – June 2025",
      desc: "Co-founded a UK based AI automation startup focused on building workflow solutions using n8n for business process automation."
    },
    {
      role: "Founder - OutsourceAE",
      date: "Oct 2023 – June 2024",
      desc: "Founded a UAE-based outsourcing startup connecting clients with skilled remote workers in Pakistan and India."
    },
    {
      role: "Student Fundraiser & Team Lead - ISU Foundation",
      date: "Feb 2020 – Jan 2022",
      desc: "Engaged alumni/donors, consistently exceeded targets, and promoted to team lead to train new fundraisers and guide shifts."
    }
  ];

  return (
    <PageTransition>
      <div className="relative min-h-[calc(100vh-4rem)] py-20 px-4 md:px-8">
        <Scene>
          <Grid />
        </Scene>

        <div className="relative z-10 max-w-4xl mx-auto space-y-12">
          
          <h2 className="text-4xl font-bold text-center mb-12 text-glow-blue text-[#00f3ff]">Resume</h2>

          {/* Education Section */}
          <div className="bg-[#0a0a0f]/80 backdrop-blur-md p-8 rounded-2xl border border-[#bc13fe]/30 shadow-[0_0_20px_rgba(188,19,254,0.1)] hover:border-[#bc13fe] transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-[#bc13fe] text-glow-purple">Education</h3>
            <div className="text-xl font-semibold text-white">Iowa State University</div>
            <div className="text-lg text-gray-400">Bachelor of Science in Computer Engineering</div>
            <div className="text-sm text-[#00f3ff] mt-2">Expected Graduation: December 2027</div>
          </div>

          {/* Experience Section */}
          <div className="bg-[#0a0a0f]/80 backdrop-blur-md p-8 rounded-2xl border border-[#00f3ff]/30 shadow-[0_0_20px_rgba(0,243,255,0.1)] hover:border-[#00f3ff] transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-[#00f3ff] text-glow-blue">Experience & Ventures</h3>
            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <div key={idx} className="border-l-2 border-[#bc13fe] pl-4">
                  <div className="text-xl font-semibold text-white">{exp.role}</div>
                  <div className="text-[#00f3ff] text-sm mb-2">{exp.date}</div>
                  <div className="text-gray-300">{exp.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-[#0a0a0f]/80 backdrop-blur-md p-8 rounded-2xl border border-[#bc13fe]/30 shadow-[0_0_20px_rgba(188,19,254,0.1)] hover:border-[#bc13fe] transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-[#bc13fe] text-glow-purple">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 bg-[#050505] border border-gray-700 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:border-[#00f3ff] hover:shadow-neon-blue transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
