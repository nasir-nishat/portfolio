const wa = (msg: string) =>
  `https://wa.me/821097802701?text=${encodeURIComponent(msg)}`;

export const profile = {
  name: "Nasir Uddin Nishat",
  title: "Software Engineer",
  location: "Remote · Worldwide",
  phone: "+82-010-9780-2701",
  email: "nasirnishat00@gmail.com",
  github: "https://github.com/nasir-nishat",
  linkedin: "https://linkedin.com/in/nasir-nishat",
  whatsapp: wa("Hi Nishat! 👋 I came across your portfolio and I'd love to discuss a project. Are you available for a quick call?"),
};

export const seo = {
  title: `${profile.name} | ${profile.title}`,
  description:
    "Software Engineer in Seoul building no-code platforms, AI agent experiences, and multi-platform Flutter products. Fast execution, clear UX, and scalable backends.",
  keywords: [
    "Software Engineer Seoul",
    "Flutter developer Seoul",
    "MVP developer",
    "startup product builder",
    "no-code platform developer",
    "AI agent developer",
    "Coze AI developer",
    "Supabase",
    "TypeScript",
    "Flutter",
  ],
};

export const projects = [
  {
    name: "My Top Goals",
    oneLiner:
      "AI accountability coaching that keeps users consistent—missions, guidance, and momentum.",
    stack: ["Flutter", "AI agents"],
    details: [
      "Track daily missions and progress",
      "Multiple AI personas for guidance and accountability",
      "Quick-start setups and mission-focused flows",
    ],
    link: "https://mytopg.com/",
  },
  {
    name: "3D Creative Projects",
    oneLiner:
      "A collection of interactive WebGL experiences: Crossy Road, Tunnel Boat, and more.",
    stack: ["Three.js", "WebGL", "Vite"],
    details: [
      "Procedural map generation and voxel-style graphics",
      "Real-time physics and collision detection systems",
      "Dynamic lighting cycles and bloom post-processing",
    ],
    link: "/project/",
    github: "https://github.com/nasir-nishat/threejs-projects",
  },
  {
    name: "AI Mental Health Bot",
    oneLiner:
      "Context-aware chatbot using BERT and GPT-2 for mental health support.",
    stack: ["Python", "BERT", "GPT-2", "PyTorch"],
    details: [
      "Developed as a final year project at Sejong University.",
      "Fine-tuned transformer models for empathetic response generation.",
      "Curated a specialized dataset for therapeutic dialogue.",
      "We used Jalal Uddin Rumi's Masnavi book to train as a chatbot.",
    ],
  },
];

export const experience = [
  {
    company: "cogo.xyz",
    role: "Platform Engineer",
    when: "May 2023 – Oct 2025 · Seoul (Hybrid, On-site, Remote)",
    highlights: [
      "No-code platform in Flutter with drag-and-drop IDE and real-time preview (Android, iOS, web, desktop).",
      "Figma → JSON pipeline via TypeScript plugin; live updates through WebSockets.",
      "Distributed AI agent architecture across OpenAI / Claude / Qwen / Grok.",
      "Supabase Edge Functions backend + BDD automation (50+ scenarios) + CI/CD.",
    ],
  },
  {
    company: "Finenex.net (Yoshop)",
    role: "Frontend Engineer",
    when: "Jan 2022 – Apr 2023 · Seoul",
    highlights: [
      "Multi-synced retail/e-commerce platform: POS, back-office admin, kiosk, mobile apps.",
      "Flutter + Spring-based APIs; real-time inventory and consistent UX.",
      "Shipped mobile app to Play Store and App Store.",
      "Co-led Flutter SDK integration and performance improvements.",
    ],
  },
  {
    company: "nowcoding.com",
    role: "React Developer",
    when: "May 2021 – Sep 2021 · Seoul (On-site)",
    highlights: [
      "Built educational games to teach programming logic, increasing engagement by 30%.",
      "Developed responsive UI using Angular & React for seamless multi-device learning.",
      "Optimized backend performance with MySQL, improving query speeds by 20%.",
    ],
  },
  {
    company: "PassBy",
    role: "Junior Flutter Developer",
    when: "Oct 2020 – Jan 2021 · Seoul (Hybrid)",
    highlights: [
      "Developed a real-time social media app with 1,000+ active users.",
      "Implemented live location tracking, reducing latency by 15% for a seamless experience.",
    ],
  },
  {
    company: "AI/ML Research",
    role: "BERT LLM Chatbot · Sejong University",
    when: "Mar 2023 – Jun 2023 · Seoul",
    highlights: [
      "Built context-aware AI/ML chatbot using BERT and GPT-2 for mental health support.",
      "Led data curation and model fine-tuning for high-accuracy responses.",
    ],
  },
];

export const skills = [
  "Dart",
  "TypeScript",
  "Flutter",
  "Next.js",
  "React",
  "PostgreSQL",
  "MongoDB",
  "Supabase",
  "Firebase",
  "AI agent integrations",
  "Coze AI",
];

export const awards = [
  "Sejong University Excellence Scholarship",
  "Sejong University Internship Scholarship",
  "Undergraduate Student Research Award",
  "Sejong University — B.S. in Computer Science & Engineering (2019–2023)",
];

export const hiddenProjects = [
  {
    name: "SAK Group",
    description: "Real estate group operating in Cyprus and UAE — luxury villas, residences, and commercial properties since 2011.",
    link: "/demo/sak-group/index.html",
  },
];

export const services: Array<{
  title: string;
  desc: string;
  soon?: boolean;
  cta?: boolean;
}> = [
  {
    title: "AI Integration",
    desc: "Chatbots that actually help. Agents that actually run. Automations that save you real hours — not just look impressive in a demo. Built with Coze AI, OpenAI, Claude, and more. No hype, just results.",
  },
  {
    title: "Website · App · Ecom",
    desc: "Landing pages that convert. Web apps that don't crash at 200 users. E-commerce that actually sells. Mobile apps people keep on their phone. If it should exist on a screen and make you money, I'll build it.",
  },
  {
    title: "Courses",
    desc: "5 years of building, condensed into courses that skip the boring parts. (Almost ready.)",
    soon: true,
  },
  {
    title: "Not sure where to start?",
    desc: "Half my best clients didn't know what they needed. 20 minutes on a call usually sorts it out — no pitch, just a real conversation.",
    cta: true,
  },
];

export const pricing: Array<{
  name: string;
  price: string;
  unit: string;
  tagline: string;
  features: string[];
  whatsapp: string;
  featured?: boolean;
}> = [
  {
    name: "Starter",
    price: "$2,500",
    unit: "one-time",
    tagline: "Test before you invest big",
    features: [
      "MVP scope (4–6 weeks)",
      "Web or mobile — one platform",
      "Core AI integration",
      "Handoff + documentation",
    ],
    whatsapp: wa("Hi Nishat! 👋 I'm interested in the Starter package ($2,500). I have an idea I'd like to validate — can we hop on a quick call to talk about it?"),
  },
  {
    name: "Builder",
    price: "$6,000",
    unit: "one-time",
    tagline: "The whole thing. Done right.",
    features: [
      "Full product (8–12 weeks)",
      "Multi-platform",
      "AI agents & automation",
      "Backend + database setup",
      "Launch support included",
    ],
    whatsapp: wa("Hi Nishat! 👋 I'm interested in the Builder package ($6,000). I want to build a full product and I think you're the right person for it. Can we talk?"),
    featured: true,
  },
  {
    name: "Partner",
    price: "$3,500",
    unit: "/ month",
    tagline: "Your tech guy, on retainer",
    features: [
      "Dedicated monthly hours",
      "Feature development",
      "Maintenance & improvements",
      "Priority response time",
    ],
    whatsapp: wa("Hi Nishat! 👋 I'm interested in the Partner retainer ($3,500/month). I'm looking for an ongoing tech partner to work with long-term. Are you available for a call?"),
  },
];
