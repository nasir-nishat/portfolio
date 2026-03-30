export const profile = {
	name: "Nishat Nasir Uddin",
	title: "Software Engineer",
	location: "Seoul, South Korea",
	phone: "+82-010-9780-2701",
	email: "nishatnasir00@gmail.com",
	github: "https://github.com/nasir-nishat",
	linkedin: "https://linkedin.com/in/nasir-nishat",
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
	},
	{
		name: "Mehenot",
		oneLiner:
			"A marketplace that matches people to work fast, with a simple flow and secure payments.",
		stack: ["Marketplace", "Payments"],
		details: [
			"Skill-based matching for part-time jobs and services",
			"Secure payments",
			"Early-access incentives to drive adoption",
		],
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
	},
	{
		name: "Sejong AI Mental Health Bot",
		oneLiner:
			"Context-aware chatbot using BERT and GPT-2 for mental health support.",
		stack: ["Python", "BERT", "GPT-2", "PyTorch"],
		details: [
			"Developed as a final year project at Sejong University.",
			"Fine-tuned transformer models for empathetic response generation.",
			"Curated a specialized dataset for therapeutic dialogue.",
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
];

export const awards = [
	"Sejong University Excellence Scholarship",
	"Sejong University Internship Scholarship",
	"Undergraduate Student Research Award",
	"Sejong University — B.S. in Computer Science & Engineering (2019–2023)",
];

export const services = [
	{
		title: "Product MVP Development",
		desc: "Tight scope, fast builds, and a clean path to version 1.",
	},
	{
		title: "AI & Agent Integration",
		desc: "Real-world LLM workflows and intelligent agent experiences.",
	},
	{
		title: "Cross-Platform Apps",
		desc: "High-performance mobile, web, and desktop apps from a single codebase.",
	},
];
