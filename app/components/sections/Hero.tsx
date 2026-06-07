"use client";

import { useState } from "react";
import {
    FaGithub,
    FaLinkedin,
    FaFacebookF,
    FaWhatsapp,
    FaEnvelope,
    FaRegCommentDots,
} from "react-icons/fa";
import {
    Experience,
    HeroInfo,
    Profile,
    SkillCategory,
    Welcome,
} from "../../../content/types";

type HeroProps = {
    hero: HeroInfo;
    profile: Profile;
    skill: SkillCategory;
    experiences: Experience[];
    welcome: Welcome;
    sectionId: string;
};

export default function Hero({
    hero,
    profile,
    skill,
    experiences,
    welcome,
    sectionId,
}: HeroProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const card =
        "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 md:p-6";
    const label =
        "font-mono text-[11px] uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400";
    const chip =
        "font-mono text-xs px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300";

    const skillCategories = [
        skill.language,
        skill.backend,
        skill.frontend,
        skill.devops,
        skill.tools,
    ];

    const socials = [
        {
            id: "github",
            icon: <FaGithub />,
            handle: "github.com/shomi-khan",
            href: profile.github.url,
        },
        {
            id: "linkedin",
            icon: <FaLinkedin />,
            handle: "linkedin.com/in/shomikhan",
            href: profile.linkedin.url,
        },
        {
            id: "gmail",
            icon: <FaEnvelope />,
            handle: profile.gmail.url,
            href: `mailto:${profile.gmail.url}`,
        },
        {
            id: "whatsapp",
            icon: <FaWhatsapp />,
            handle: profile.whatsapp.number,
            href: `https://wa.me/${profile.whatsapp.number.replace(/\D/g, "")}`,
        },
        {
            id: "facebook",
            icon: <FaFacebookF />,
            handle: "facebook.com/shomi.khan1",
            href: profile.facebook.url,
        },
    ];

    return (
        <section
            id={sectionId}
            className="min-h-screen bg-zinc-100 dark:bg-zinc-950 px-4 md:px-6 py-6 md:py-10"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-2.5">
                {/* Card 1 — Name */}
                <div
                    className={`${card} md:col-span-2 lg:col-span-7 lg:row-span-2 flex flex-col`}
                >
                    <div>
                        <span className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">
                            available for work
                        </span>
                    </div>

                    <h1 className="font-mono text-3xl md:text-4xl font-bold mt-4 text-zinc-900 dark:text-zinc-100">
                        <span
                            className="animate-wave inline-block origin-[70%_70%]"
                            aria-hidden
                        >
                            👋
                        </span>
                        <span className="mr-1" aria-hidden>
                            🤓
                        </span>
                        {hero.title}
                    </h1>

                    <p className="font-mono text-base md:text-lg text-zinc-600 dark:text-zinc-400 mt-2">
                        {hero.subTitle1}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-5">
                        <a
                            href={profile.github.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-sm px-4 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:opacity-90 transition flex items-center gap-2"
                        >
                            <FaGithub />
                            Github Profile
                        </a>
                        <a
                            href="ShomiKhan_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-sm px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
                        >
                            Resume
                        </a>
                    </div>

                    <div className="mt-auto pt-6 border-t border-zinc-200 dark:border-zinc-800">
                        <p className="font-sans text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            {hero.subTitle2}
                        </p>
                    </div>
                </div>

                {/* Card 2 — Skills */}
                <section id="skills" className={`${card} lg:col-span-5`}>
                    <div className={label}>Skills</div>
                    <div className="mt-3 flex flex-col gap-3">
                        {skillCategories.map((cat) => (
                            <div key={cat.label}>
                                <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1.5">
                                    {cat.label}
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                    {cat.items.map((item) => (
                                        <span key={item.name} className={chip}>
                                            {item.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Card 4 — Contact & Socials (placed before Experience so on desktop
                    it lands at row 2 / cols 8-12 next to the Name card) */}
                <section id="contact-me" className={`${card} lg:col-span-5`}>
                    <div className={label}>Contact &amp; Socials</div>
                    <ul className="mt-3 flex flex-col gap-0.5">
                        {socials.map((s) => (
                            <li key={s.id}>
                                <a
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-2 py-2 rounded-md font-sans text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                                >
                                    <span className="text-base text-zinc-500 dark:text-zinc-400">
                                        {s.icon}
                                    </span>
                                    <span className="truncate">{s.handle}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Card 3 — Experience */}
                <section
                    id="experiences"
                    className={`${card} md:col-span-2 lg:col-span-7`}
                >
                    <div className={label}>Experience</div>
                    <ul className="mt-3 flex flex-col divide-y divide-zinc-200 dark:divide-zinc-800">
                        {experiences.map((exp, idx) => {
                            const isOpen = openIndex === idx;
                            return (
                                <li key={`${exp.company}-${idx}`}>
                                    <button
                                        type="button"
                                        aria-expanded={isOpen}
                                        onClick={() =>
                                            setOpenIndex(isOpen ? null : idx)
                                        }
                                        className="w-full flex items-center gap-3 py-3 text-left cursor-pointer"
                                    >
                                        <span className="text-xl" aria-hidden>
                                            {exp.emoji}
                                        </span>
                                        <div className="flex-1 min-w-0">
                                            <div className="font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                                                {exp.company}
                                                <span className="font-normal text-zinc-500 dark:text-zinc-400">
                                                    {" "}
                                                    — {exp.role}
                                                </span>
                                            </div>
                                            <div className="font-mono text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                                                {exp.period}
                                            </div>
                                        </div>
                                        <span
                                            className="font-mono text-zinc-400 dark:text-zinc-500"
                                            aria-hidden
                                        >
                                            {isOpen ? "▾" : "▸"}
                                        </span>
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"
                                            }`}
                                    >
                                        <ul className="font-sans text-sm text-zinc-600 dark:text-zinc-400 pl-10 pr-2 pb-4 space-y-1 list-disc">
                                            {exp.responsibilities.map(
                                                (resp, i) => (
                                                    <li key={i}>{resp}</li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </section>

                {/* Card 5 — Welcome */}
                <div className="md:col-span-2 lg:col-span-12 rounded-xl p-5 md:p-6 bg-zinc-200/60 dark:bg-zinc-800/40 flex items-start gap-3">
                    <FaRegCommentDots
                        className="text-xl text-zinc-500 dark:text-zinc-400 flex-shrink-0 mt-0.5"
                        aria-hidden
                    />
                    <p className="font-sans italic text-sm md:text-base text-zinc-600 dark:text-zinc-300">
                        {welcome.text}
                    </p>
                </div>
            </div>
        </section>
    );
}
