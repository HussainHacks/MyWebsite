export const portfolioData = {
  person: {
    name: "Syed Ahmed Hussain",
    role: "Computer Engineering Student",
    bio: "Computer Engineering student at Iowa State University with hands-on experience in hardware design, software engineering, and AI/ML research. Experienced in developing RISC-V processors in VHDL, building full-stack applications, deploying containerized systems, and developing computer vision workflows for engineering research. Interested in building practical technology that connects hardware, software, and AI to solve real-world problems.",
    shortBio: "Computer Engineering student at Iowa State University working across hardware design, software engineering, AI/ML research, and computer vision.",
    email: "Syedhuss@iastate.edu",
    phone: "+1 321-317-8728"
  },
  interests: [
    "Computer Architecture",
    "AI / Machine Learning",
    "Computer Vision",
    "Software Engineering",
    "Embedded Systems",
    "Linux & Infrastructure",
    "AI Automation",
    "Geospatial Computing"
  ],
  education: [
    {
      institution: "Iowa State University, College of Engineering",
      location: "Ames, Iowa",
      degree: "Bachelor of Science in Computer Engineering",
      date: "Expected December 2027"
    }
  ],
  experience: [
    {
      company: "EvolvAISolutions",
      role: "Founder",
      date: "Jan 2025 – June 2025",
      points: [
        "Co-founded a UK based AI automation startup focused on building workflow solutions using n8n for workflow/business process automation/optimization.",
        "Consulted with clients to identify inefficiencies and design AI-driven automated workflows tailored to their operations."
      ]
    },
    {
      company: "OutsourceAE",
      role: "Founder",
      date: "Oct 2023 – June 2024",
      points: [
        "Founded and operated a UAE-based outsourcing startup connecting clients with skilled remote workers in Pakistan and India to improve productivity and reduce operational costs.",
        "Designed onboarding and training workflows to ensure consistent quality, communication standards and delivery timelines.",
        "Primary account manager, maintaining relationships, upselling services, and securing repeat business."
      ]
    },
    {
      company: "Iowa State University Foundation",
      role: "Student Fundraiser (Promoted)",
      date: "Feb 2020 – Jan 2022",
      points: [
        "Promoted from student fundraiser in recognition of strong performance and leadership potential.",
        "Trained new student fundraisers on sales techniques and donor engagement strategies.",
        "Led teams during shifts, providing real-time guidance to maintain productivity and morale.",
        "Engaged alumni and donors through outbound calls to communicate the impact of giving and driving financial support for Iowa State programs and students."
      ]
    }
  ],
  research: [
    {
      title: "AIRFIELD PAVEMENT AI RESEARCH",
      institution: "Iowa State University",
      status: "Ongoing research",
      description: "A computer-vision and machine-learning research project using high-resolution UAV imagery to identify and segment airfield pavement distress at the pixel level.",
      technologies: ["Python", "Computer Vision", "Machine Learning", "Semantic Segmentation", "SegFormer", "QGIS", "CVAT", "UAV imagery", "GIS", "GPU/HPC computing", "Active Learning", "Dataset Engineering", "Reproducible Experimentation"],
      points: [
        "Developing a computer-vision and machine-learning research workflow using UAV imagery to perform pixel-level segmentation of airfield pavement distress.",
        "Investigating semantic segmentation annotation, model training and benchmarking.",
        "Evaluating SegFormer models for pavement distress classification.",
        "Developing active-learning experiments and GIS integration."
      ]
    }
  ],
  projects: [
    {
      id: "project-1",
      title: "Airfield Pavement AI Research",
      status: "ONGOING RESEARCH",
      description: "Computer-vision and machine-learning research using UAV imagery to perform pixel-level segmentation of airfield pavement distress.",
      technologies: ["Python", "Computer Vision", "Semantic Segmentation", "SegFormer", "QGIS", "CVAT", "GIS", "UAV imagery", "Machine Learning", "GPU/HPC"],
      highlights: [
        "pixel-level semantic segmentation",
        "dataset engineering",
        "annotation workflows",
        "model-assisted annotation",
        "human-in-the-loop correction",
        "active learning",
        "GIS processing",
        "reproducible experimentation"
      ]
    },
    {
      id: "project-2",
      title: "5-Stage Pipelined RISC-V Processor",
      status: "COMPLETED PROJECT",
      description: "Designed and implemented a 5-stage pipelined RISC-V processor in VHDL.",
      technologies: ["VHDL", "RISC-V", "Quartus", "ModelSim / QuestaSim", "RARS", "Digital Logic", "Computer Architecture"],
      highlights: [
        "Instruction Fetch, Decode, Execute, Memory, Writeback",
        "data forwarding & hazard detection",
        "pipeline stalls & branch/jump flushing",
        "instruction-load mode",
        "RARS verification & ModelSim/QuestaSim simulation",
        "20 ns timing constraint, 19.134 ns critical delay, 52.26 MHz maximum frequency"
      ]
    },
    {
      id: "project-3",
      title: "BugNinja",
      status: "COMPLETED PROJECT",
      description: "AI-assisted software testing and bug-discovery platform.",
      technologies: ["Node.js", "Docker", "Docker Compose", "PostgreSQL", "Redis", "MinIO", "Linux", "VPS", "AI automation"],
      highlights: [
        "containerized application architecture",
        "PostgreSQL, Redis, MinIO",
        "Linux deployment & VPS infrastructure",
        "configuration management",
        "service & authentication/token debugging",
        "distributed application troubleshooting"
      ]
    },
    {
      id: "project-4",
      title: "Cyfeed",
      status: "ONGOING PROJECT",
      description: "A campus-focused social and event platform designed for Iowa State students.",
      technologies: ["Java", "Spring", "REST APIs", "Git", "Full-Stack Development"],
      highlights: [
        "event creation & discovery",
        "invitations & social interaction",
        "campus event organization",
        "location/event mapping"
      ]
    },
    {
      id: "project-5",
      title: "AI Agent Automation Platform",
      status: "COMPLETED PROJECT",
      description: "A multi-agent AI automation system designed to coordinate research, software development, experimentation, and technical workflows.",
      technologies: ["AI Agents", "LLMs", "Docker", "Linux", "Node.js", "n8n", "Open-source models", "Automation"],
      highlights: [
        "multi-agent orchestration",
        "research & software engineering workflows",
        "tool integration & automated workflows",
        "local/hosted model experimentation"
      ]
    },
    {
      id: "project-6",
      title: "OutsourceAE",
      status: "COMPLETED PROJECT",
      description: "An entrepreneurial technology and operations project involving outsourced technical and operational work across distributed teams.",
      technologies: ["Workflow Management", "Task Delegation", "Process Design", "Distributed Operations", "Automation Opportunities"],
      highlights: [
        "workflow management",
        "task delegation",
        "process design",
        "distributed operations",
        "automation opportunities"
      ]
    },
    {
      id: "project-7",
      title: "Personal Portfolio Website",
      status: "COMPLETED PROJECT",
      description: "Designed, developed, and deployed a personal portfolio website with a custom interactive dual-mode visual system.",
      technologies: ["Next.js", "React", "Netlify", "Git/GitHub", "Tailwind CSS"],
      highlights: [
        "dual-mode architecture (Cyberpunk/Minimal)",
        "React Context state management",
        "responsive design",
        "smooth animations"
      ]
    }
  ]
};
