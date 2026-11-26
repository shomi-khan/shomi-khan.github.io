import { Experience, HeroInfo, NavItem, Profile, SkillCategory, SocialLink, Welcome } from "./types";

const isDev = process.env.NODE_ENV === "development";
const imgPath = (folder: string, file: string) =>
    `${isDev ? `/${folder}/` : `${folder}/`}${file}`;

export const navItems: NavItem[] = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "skills", label: "Skills", icon: "🧩" },
    { id: "experiences", label: "Experiences", icon: "💡" },
    { id: "contact-me", label: "Contact", icon: "☎️" },
];

export const hero: HeroInfo = {
    title: "Hi, I’m Shomi Khan",
    subTitle1: "Software Engineer | Backend Systems | Python & AI",
    subTitle2: "Apart from coding, I’m an anime fan ⛩️, former cyclist 🚴, and hobbyist photographer 📸.",
};

const whatsappNumber = "+8801676498001";
const gmailAddress = "shomikhan043@gmail.com";

export const socials: SocialLink[] = [
    {
        id: "linkedin",
        handle: "linkedin.com/in/shomikhan",
        href: "https://linkedin.com/in/shomikhan",
    },
    {
        id: "gmail",
        handle: gmailAddress,
        href: `mailto:${gmailAddress}`,
    },
    {
        id: "whatsapp",
        handle: whatsappNumber,
        href: `https://wa.me/${whatsappNumber.replace(/\\D/g, "")}`,
    },
    {
        id: "facebook",
        handle: "facebook.com/shomi.khan1",
        href: "https://www.facebook.com/shomi.khan1",
    },
];

export const profiles: Profile[] = [
    {
        id: "github",
        label: "Github Profile",
        url: "https://github.com/shomi-khan",
        logoUrl: imgPath("social", "github.png"),
    },
];

export const skill: SkillCategory = {
    language: {
        label: "Programming Languages",
        items: [
            { name: "Python", logo: imgPath("skill", "python.png") },
            { name: "Go", logo: imgPath("skill", "golang.png") },
            { name: "TypeScript", logo: imgPath("skill", "typescript.png") },
            { name: "C++", logo: imgPath("skill", "c++.png") },
            { name: "Bash", logo: imgPath("skill", "bash.png") },
        ],
    },
    backend: {
        label: "Backend Technologies",
        items: [
            { name: "Django", logo: imgPath("skill", "django.png") },
            { name: "FastAPI", logo: imgPath("skill", "fastapi.png") },
            { name: "Gin", logo: imgPath("skill", "gin.png") },
            { name: "REST APIs", logo: null },
            { name: "gRPC", logo: null },
            { name: "RabbitMQ", logo: imgPath("skill", "rabbitmq.png") },
            { name: "Redis", logo: imgPath("skill", "redis.png") },
        ],
    },
    database: {
        label: "Database & Data Management",
        items: [
            { name: "PostgreSQL", logo: imgPath("skill", "postgresql.png") },
            { name: "Schema Design", logo: null },
            { name: "Query Optimization", logo: null },
        ],
    },
    backendConcepts: {
        label: "Backend Engineering Concepts",
        items: [
            { name: "Concurrency Control", logo: null },
            { name: "Idempotency", logo: null },
            { name: "Data Integrity", logo: null },
            { name: "Transaction Management", logo: null },
            { name: "Asynchronous Task Processing", logo: null },
            { name: "Scheduled Task Processing", logo: null },
        ],
    },
    frontend: {
        label: "Frontend",
        items: [
            { name: "Next.js", logo: imgPath("skill", "nextjs.png") },
            { name: "Angular", logo: imgPath("skill", "angular.png") },
            { name: "TailwindCSS", logo: imgPath("skill", "tailwind-css.png") },
        ],
    },
    tools: {
        label: "Development Tools",
        items: [
            { name: "Git", logo: imgPath("skill", "git.png") },
            { name: "Docker", logo: imgPath("skill", "docker.png") },
        ],
    },
};

export const experiences: Experience[] = [
    {
        company: "Brain Station 23",
        role: "Software Engineer 2",
        period: "May 2025 – Present",
        responsibilities: [
            "Led end-to-end feature delivery by coordinating backend, frontend, and QA teams from business analysis through release, while mentoring junior developers in product thinking and technical practices.",
            "Contributed to product and architectural decisions, including defining database schemas before implementation.",
            "Applied an AI-driven development lifecycle (AIDLC), covering requirement analysis and edge-case identification, maintaining feature-specific business and technical context in a central context repository, and using that context to guide implementation.",
            "Applied concurrency control and idempotency to prevent duplicate or conflicting database operations.",
            "Managed database transactions to ensure atomicity and data integrity across related operations.",
        ],
        emoji: "💡",
    },
    {
        company: "GroupyFy Inc.",
        role: "Backend Software Engineer",
        period: "November 2023 – January 2025",
        responsibilities: [
            "Developed and maintained RESTful APIs with Django.",
            "Improved API performance through asynchronous task processing and scheduled jobs.",
            "Integrated secure and seamless payment workflows with Stripe.",
        ],
        emoji: "✨",
    },
    {
        company: "SELISE Digital Platforms",
        role: "Jr. Software Engineer",
        period: "April 2020 – December 2022",
        responsibilities: [
            "Developed enterprise frontend web applications with Angular.",
            "Trained and guided junior teammates.",
            "Migrated full project from Python 2 to Python 3.",
            "Developed and maintained RESTful APIs with Django.",
        ],
        emoji: "🎨",
    },
    {
        company: "Samsung R&D Institute Bangladesh",
        role: "Intern",
        period: "August 2018 – January 2019",
        responsibilities: [
            "Built Tizen applications.",
        ],
        emoji: "🌱",
    },
];

export const welcome: Welcome = {
    text: "I love to chat 🗨️ rather than talk. If you ping me with a 'hi', I'll be happy to chat with you more! 😊",
};
