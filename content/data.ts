import { Experience, HeroInfo, NavItem, Profile, SkillCategory, Welcome } from "./types";

const isDev = process.env.NODE_ENV === 'development';
const imgPath = (folder: string, file: string) => `${isDev ? `/${folder}/` : `${folder}/`}${file}`;

export const navItems: NavItem[] = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "skills", label: "Skills", icon: "🧩" },
    { id: "experiences", label: "Experiences", icon: "💡" },
    { id: "contact-me", label: "Contact", icon: "☎️" },
];

export const hero: HeroInfo = {
    title: "Hi, I’m Shomi Khan",
    subTitle1: "Software Engineer (Go, Python)",
    subTitle2: "Apart from coding, I’m an anime fan ⛩️, former cyclist 🚴, and hobbyist photographer 📸.",
}

export const profile: Profile = {
    github: {
        url: "https://github.com/shomi-khan",
        logoUrl: imgPath("social", "github.png")
    },
    facebook: {
        url: "https://www.facebook.com/shomi.khan1",
        logoUrl: imgPath("social", "facebook.png")
    },
    linkedin: {
        url: "https://linkedin.com/in/shomikhan",
        logoUrl: imgPath("social", "linkedin.png")
    },
    gmail: {
        url: "shomikhan043@gmail.com",
        logoUrl: imgPath("social", "gmail.png")
    },
    whatsapp: {
        number: "+8801676498001",
        logoUrl: imgPath("social", "whatsapp.png")
    }
};

export const skill: SkillCategory = {
    language: {
        label: "Programming Languages",
        items: [
            { name: "Python", logo: imgPath("skill", "python.png") },
            { name: "Golang", logo: imgPath("skill", "golang.png") },
            { name: "TypeScript", logo: imgPath("skill", "typescript.png") },
            { name: "C++", logo: imgPath("skill", "c++.png") },
            { name: "Bash", logo: imgPath("skill", "bash.png") }
        ]
    },
    backend: {
        label: "Backend",
        items: [
            { name: "Django", logo: imgPath("skill", "django.png") },
            { name: "FastAPI", logo: imgPath("skill", "fastapi.png") },
            { name: "Gin", logo: imgPath("skill", "gin.png") },
            { name: "PostgreSQL", logo: imgPath("skill", "postgresql.png") },
            // { name: "REST APIs", logo: null },
            // { name: "gRPC", logo: null },
            { name: "RabbitMQ", logo: imgPath("skill", "rabbitmq.png") },
            { name: "Redis", logo: imgPath("skill", "redis.png") }
        ]
    },
    frontend: {
        label: "Frontend",
        items: [
            { name: "Next.js", logo: imgPath("skill", "nextjs.png") },
            // { name: "Angular", logo: imgPath("skill", "angular.png") },
            { name: "TailwindCSS", logo: imgPath("skill", "tailwind-css.png") },
            { name: "HTML", logo: imgPath("skill", "html.png") }
        ]
    },
    devops: {
        label: "DevOps & Cloud",
        items: [
            { name: "Docker", logo: imgPath("skill", "docker.png") },
            { name: "AWS", logo: imgPath("skill", "aws.png") },
            // { name: "Nginx", logo: imgPath("skill", "nginx.png") }
        ]
    },
    tools: {
        label: "Tools",
        items: [
            { name: "Git", logo: imgPath("skill", "git.png") },
            { name: "VSCode", logo: imgPath("skill", "vscode.png") },
            { name: "Postman", logo: imgPath("skill", "postman.png") },
            { name: "Pycharm", logo: imgPath("skill", "pycharm.png") },
            { name: "Ubuntu", logo: imgPath("skill", "ubuntu.png") },
        ]
    }
};




export const experiences: Experience[] = [
    {
        company: "Brain Station 23",
        role: "Software Engineer 2",
        period: "May 2025 - Present",
        responsibilities: [
            "Owned backend feature delivery lifecycle, including requirement analysis, API design, architecture contribution, implementation, testing support, and bug resolution.",
            "Proactively identified edge cases and translated product requirements into scalable backend solutions.",
            "Drove API contract discussions with frontend teams using product flows and Figma designs to align business and technical requirements.",
            "Contributed to architecture and database design decisions to ensure maintainability, scalability, and performance.",
            "Adopted AI-assisted engineering practices by preparing detailed technical prompts and validating implementation strategies using tools such as ChatGPT, Cursor etc."
        ],
        emoji: "💡"
    },
    {
        company: "GroupyFy Inc.",
        role: "Backend Software Engineer",
        period: "Nov 2023 - Jan 2025",
        responsibilities: [
            "Developed and maintained RESTful APIs with Django",
            "Improved API performance by implementing asynchronous tasks",
            "Integrated secure and seamless payment workflows with Stripe",
            "Collaborated with frontend dev to ensure seamless functionality",
            "Deployed the application on AWS"
        ],
        emoji: "✨"
    },
    {
        company: "Hubar Tech Limited",
        role: "Python Developer",
        period: "Feb 2023 - May 2023",
        responsibilities: [
            "Created RESTful APIs",
        ],
        emoji: "🐾"
    },
    {
        company: "SELISE Digital Platforms",
        role: "Jr. Software Engineer",
        period: "Apr 2020 - Dec 2022",
        responsibilities: [
            "Developed Enterprise frontend web app with Angular",
            "Trained and gave necessary guidelines to junior teammates",
            "Migrated full project from Python2 to Python3",
            "Developed and maintailed RESTful APIs with Django"
        ],
        emoji: "🎨"
    },
    {
        company: "Samsung R&D Institute Bangladesh",
        role: "Intern",
        period: "Aug 2018 - Jan 2019",
        responsibilities: [
            "Learnt and built basic Tizen application"
        ],
        emoji: "🌱"
    }
];

export const welcome: Welcome = {
    text: "I love to chat 🗨️ rather than talk. If you ping me with a 'hi', I'll be happy to chat with you more! 😊"
}