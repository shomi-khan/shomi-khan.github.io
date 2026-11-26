// Navigation Items
export interface NavItem {
    id: string;
    label: string;
    icon: string;
}

// Hero / profile introduction
export interface HeroInfo {
    title: string;
    subTitle1: string;
    subTitle2: string;
}

// A social/contact link shown in the ContactMe section.
export interface SocialLink {
    id: string;
    handle: string;
    href: string;
}

// Developer / coding platform profile (e.g. GitHub, GitLab, StackOverflow).
export interface Profile {
    id: string;
    label: string;
    url: string;
    logoUrl: string;
}

// Skill Categories
export interface SkillItem {
    name: string;
    logo: string | null;
}

export interface SkillInfo {
    label: string;
    items: SkillItem[];
}

export interface SkillCategory {
    language: SkillInfo;
    backend: SkillInfo;
    database: SkillInfo;
    backendConcepts: SkillInfo;
    frontend: SkillInfo;
    tools: SkillInfo;
}

// Experience Section
export interface Experience {
    company: string;
    role: string;
    period: string;
    responsibilities: string[];
    emoji: string;
}

export interface Welcome {
    text: string;
}
