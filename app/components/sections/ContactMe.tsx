"use client";

import {
    FaGithub,
    FaLinkedin,
    FaFacebookF,
    FaWhatsapp,
    FaEnvelope,
} from "react-icons/fa";
import { Profile } from "../../../content/types";
import { cardClass, labelClass } from "./shared";

export default function ContactMe({ profile }: { profile: Profile }) {
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
        <div id="contact-me" className={`${cardClass} lg:col-span-5`}>
            <div className={labelClass}>Contact &amp; Socials</div>
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
        </div>
    );
}
