"use client";

import { useState } from "react";
import { Experience } from "../../../content/types";
import { cardClass, labelClass } from "./shared";

export default function Experiences({
    experiences,
    className = "",
}: {
    experiences: Experience[];
    className?: string;
}) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div id="experiences" className={`${cardClass} ${className}`}>
            <div className={labelClass}>Experience</div>
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
                                        <span className="font-mono text-zinc-500 dark:text-zinc-400">
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
                                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                                    isOpen
                                        ? "grid-rows-[1fr]"
                                        : "grid-rows-[0fr]"
                                }`}
                            >
                                <div className="overflow-hidden">
                                    <ul className="font-sans text-sm text-zinc-600 dark:text-zinc-400 pl-10 pr-2 pb-4 space-y-1 list-disc">
                                        {exp.responsibilities.map((resp, i) => (
                                            <li key={i}>{resp}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
