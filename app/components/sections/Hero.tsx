"use client";

import { FaGithub, FaRegCommentDots } from "react-icons/fa";
import { HeroInfo, Profile, Welcome } from "../../../content/types";
import { cardClass } from "./shared";

type HeroProps = {
    hero: HeroInfo;
    profile: Profile;
};

export default function Hero({ hero, profile }: HeroProps) {
    return (
        <div
            className={`${cardClass} md:col-span-2 lg:col-span-7 lg:row-span-2 flex flex-col`}
        >
            {/* <div>
                <span className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">
                    available for work
                </span>
            </div> */}

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
    );
}

export function WelcomeBanner({ welcome }: { welcome: Welcome }) {
    return (
        <div className="md:col-span-2 lg:col-span-12 rounded-xl p-5 md:p-6 bg-zinc-200/60 dark:bg-zinc-800/40 flex items-start gap-3">
            <FaRegCommentDots
                className="text-xl text-zinc-500 dark:text-zinc-400 flex-shrink-0 mt-0.5"
                aria-hidden
            />
            <p className="font-sans italic text-sm md:text-base text-zinc-600 dark:text-zinc-300">
                {welcome.text}
            </p>
        </div>
    );
}
