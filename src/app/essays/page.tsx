import PageTransition from "@/components/ui/PageTransition";

export default function Essays() {
  const essays = [
    {
      title: "Ethics Essay",
      excerpt: "An exploration of the ethical responsibilities of computer engineers in the age of AI and automated decision making.",
      content: "[Placeholder Text: This essay will discuss the implications of building autonomous systems and the ethical frameworks that should guide engineering decisions.]"
    },
    {
      title: "CprE/EE 2320 Essay",
      excerpt: "Reflections on digital logic, boolean algebra, and the foundation of modern computing architectures.",
      content: "[Placeholder Text: This essay covers the fundamental concepts learned in CprE 2320, detailing how low-level hardware choices impact high-level software efficiency.]"
    },
    {
      title: "CprE/EE 4940 Essay",
      excerpt: "Senior design and professional practice considerations in complex engineering projects.",
      content: "[Placeholder Text: Discussing the importance of teamwork, project management, and interdisciplinary collaboration in bringing engineering projects to life.]"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-4rem)] py-20 px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-glow-blue text-[#00f3ff]">Essays</h2>
          
          <div className="space-y-8">
            {essays.map((essay, idx) => (
              <div 
                key={idx}
                className="bg-[#0a0a0f]/80 p-8 rounded-2xl border border-gray-800 hover:border-[#bc13fe] hover:shadow-[0_0_15px_rgba(188,19,254,0.2)] transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-[#bc13fe] mb-2">{essay.title}</h3>
                <p className="text-gray-400 italic mb-6">{essay.excerpt}</p>
                <div className="text-gray-300 bg-black/50 p-6 rounded-lg font-mono text-sm border border-gray-700">
                  {essay.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
