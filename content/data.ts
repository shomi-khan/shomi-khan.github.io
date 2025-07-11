import { AboutMeInfo, Experience, HeroInfo, NavItem, Profile, SkillCategory, Welcome } from "./types";

const isDev = process.env.NODE_ENV === 'development';
const imgPath = (folder: string, file: string) => `${isDev ? `/${folder}/` : `${folder}/`}${file}`;

export const navItems: NavItem[] = [
    { id: "", label: "Home", icon: "🏠" },
    { id: "about", label: "About", icon: "🙋‍♂️" },
    { id: "skills", label: "Skills", icon: "🧩" },
    { id: "experiences", label: "Experiences", icon: "💡" },
    { id: "contact-me", label: "Contact", icon: "☎️" },
];

export const hero: HeroInfo = {
    title: "Hi, I’m Shomi Khan",
    subTitle: "Software Engineer | Curious Soul 🤔💭 | Python Charmer 🐍 | Golang Alchemist 🦫"
}

export const aboutMe: AboutMeInfo = {
    myself: "I'm Shomi Khan, backend focused full-stack software engineer 🦫🖥️🐍 from Bangladesh 🇧🇩.",
    passion: "🌥️ Enthusiastic about writing clean code, building cloud-native solutions, ⚙️ diving into low-level systems, 🤖 automating everything possible.",
    hobby: "Apart from coding, I’m an anime fan ⛩️, former cyclist 🚴, and hobbyist photographer 📸.",
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
            { name: "Gin", logo: imgPath("skill", "gin.png") },
            { name: "Django", logo: imgPath("skill", "django.png") },
            { name: "FastAPI", logo: imgPath("skill", "fastapi.png") },
            { name: "PostgreSQL", logo: imgPath("skill", "postgresql.png") },
            { name: "Redis", logo: imgPath("skill", "redis.png") },
            { name: "REST APIs", logo: null },
            { name: "gRPC", logo: null },
            { name: "RabbitMQ", logo: imgPath("skill", "rabbitmq.png") }
        ]
    },
    frontend: {
        label: "Frontend",
        items: [
            { name: "Next.js", logo: imgPath("skill", "nextjs.png") },
            { name: "Angular", logo: imgPath("skill", "angular.png") },
            { name: "TailwindCSS", logo: imgPath("skill", "tailwind-css.png") },
            { name: "HTML", logo: imgPath("skill", "html.png") }
        ]
    },
    devops: {
        label: "DevOps & Cloud",
        items: [
            { name: "Docker", logo: imgPath("skill", "docker.png") },
            { name: "AWS", logo: imgPath("skill", "aws.png") },
            { name: "Nginx", logo: imgPath("skill", "nginx.png") }
        ]
    },
    tools: {
        label: "Tools",
        items: [
            { name: "Git", logo: imgPath("skill", "git.png") },
            { name: "VSCode", logo: imgPath("skill", "vscode.png") },
            { name: "Postman", logo: imgPath("skill", "postman.png") },
            { name: "Swagger", logo: imgPath("skill", "swagger.png") },
            { name: "Pycharm", logo: imgPath("skill", "pycharm.png") },
            { name: "Ubuntu", logo: imgPath("skill", "ubuntu.png") },
        ]
    }
};




export const experiences: Experience[] = [
    {
        company: "GroupyFy Inc.",
        role: "Backend Software Engineer",
        period: "Nov 2023 - Present",
        responsibilities: [
            "Developed and maintained RESTful APIs with Django",
            "Improved API performance by implementing asynchronous tasks",
            "Integrated secure and seamless payment workflows with Stripe",
            "Configured and managed multiple development environments",
            "Collaborated with frontend dev to ensure seamless functionality",
            "Deployed the application on AWS"
        ]
    },
    {
        company: "Hubar Tech Limited",
        role: "Software Engineer",
        period: "Feb 2023 - May 2023",
        responsibilities: [
            "Created RESTful APIs",
        ]
    },
    {
        company: "SELISE Digital Platforms",
        role: "Jr. Software Engineer",
        period: "Apr 2020 - Dec 2022",
        responsibilities: [
            "Developed Enterprise frontend web app with Angular",
            "Created shared UI modules for flexibility and reusability",
            "Trained and gave necessary guidelines to junior teammates",
            "Migrated full project from Python2 to Python3",
            "Developed and maintailed RESTful APIs with Django"
        ]
    },
    {
        company: "Samsung R&D Institute Bangladesh",
        role: "Intern",
        period: "Aug 2018 - Jan 2019",
        responsibilities: [
            "Learnt and built basic Tizen application"
        ]
    }
];

export const welcome: Welcome = {
    text: "I love to chat 🗨️ rather than talk. If you ping me with a 'hi', I'll be happy to chat with you more! 😊"
}