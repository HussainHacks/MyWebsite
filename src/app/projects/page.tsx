import PageTransition from "@/components/ui/PageTransition";
import ProjectCard from "@/components/ui/ProjectCard";
import Scene from "@/components/canvas/Scene";
import Particles from "@/components/canvas/Particles";

export default function Projects() {
  const projects = [
    {
      title: "Sports Arbitrage Bot",
      description: "A program that monitored multiple sports betting websites to find price differences. When prices differed enough, it placed bets automatically to guarantee profit.",
      skills: ["JavaScript", "Node.js", "Automation", "API usage", "Logic design", "Debugging"],
      contribution: "Designed logic for finding arbitrage opportunities, wrote automation scripts, and tested the system.",
      importance: "Automation like this is used in finance, trading, and data analysis. It shows how software can make decisions faster than humans."
    },
    {
      title: "BugNinja Security Automation",
      description: "Created an environment where scripts and AI tools seamlessly scanned websites for security issues, collecting results to find bugs faster.",
      skills: ["Linux", "Networking", "Cybersecurity tools", "Node.js", "Server setup"],
      contribution: "Configured the VPS, installed tools, wrote automation scripts, and connected AI agents.",
      importance: "Automation is used in cybersecurity, cloud computing, and DevOps. This shows how engineers manage real servers."
    },
    {
      title: "Jarvis AI Assistant",
      description: "An AI system that can run commands, control software, and automate actions on a computer by connecting different tools together.",
      skills: ["Python", "Node.js", "AI APIs", "System integration"],
      contribution: "Designed the workflow, connected the APIs, and tested automation features.",
      importance: "AI assistants are used in robotics, smart homes, and business automation."
    },
    {
      title: "Automated Snowplow",
      description: "Designed a system to control a snowplow automatically using sensors and logic, aiming to reduce human work and increase safety.",
      skills: ["Engineering design", "Problem solving", "Control logic", "Teamwork"],
      contribution: "Helped design the control system, worked on movement logic, and tested ideas.",
      importance: "Automation like this is a fundamental building block in self-driving vehicles and robotics."
    },
    {
      title: "Digital Logic Circuit Design",
      description: "Learned how computers use logic gates, adders, and registers to process binary signals.",
      skills: ["Boolean algebra", "Circuit design", "Problem solving"],
      importance: "All computers depend on digital logic at the lowest level."
    }
  ];

  return (
    <PageTransition>
      <div className="relative min-h-[calc(100vh-4rem)] py-20 px-4 md:px-8">
        <Scene>
          <Particles count={1500} />
        </Scene>

        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-glow-blue text-[#00f3ff]">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div key={idx} className="h-full perspective-1000">
                <ProjectCard {...proj} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
