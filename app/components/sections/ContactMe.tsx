"use client";

import {
    FaGithub,
    FaLinkedin,
    FaFacebookF,
    FaWhatsapp,
    FaEnvelope,
} from "react-icons/fa";
import { Profile, Welcome } from "../../../content/types";
import { cardClass, labelClass } from "./shared";

type ContactProps = {
    contact: Profile;
    welcome: Welcome;
    className?: string;
};

export default function ContactMe({
    contact,
    welcome,
    className = "",
}: ContactProps) {
    const socials = [
        {
            id: "github",
            icon: <FaGithub />,
            handle: "github.com/shomi-khan",
            href: contact.github.url,
        },
        {
            id: "linkedin",
            icon: <FaLinkedin />,
            handle: "linkedin.com/in/shomikhan",
            href: contact.linkedin.url,
        },
        {
            id: "gmail",
            icon: <FaEnvelope />,
            handle: contact.gmail.url,
            href: `mailto:${contact.gmail.url}`,
        },
        {
            id: "whatsapp",
            icon: <FaWhatsapp />,
            handle: contact.whatsapp.number,
            href: `https://wa.me/${contact.whatsapp.number.replace(/\D/g, "")}`,
        },
        {
            id: "facebook",
            icon: <FaFacebookF />,
            handle: "facebook.com/shomi.khan1",
            href: contact.facebook.url,
        },
    ];

    return (
        <div
            id="contact-me"
            className={`${cardClass} flex flex-col justify-between ${className}`}
        >
            <div className="pb-6">
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

            <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
                <p className="font-sans italic text-sm md:text-base text-zinc-600 dark:text-zinc-300">
                    {welcome.text}
                </p>
            </div>
        </div>
    );
}
