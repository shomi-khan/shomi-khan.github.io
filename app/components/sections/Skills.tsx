import { SkillCategory } from "../../../content/types";
import { cardClass, chipClass, labelClass } from "./shared";

export default function Skills({
    skill,
    className = "",
}: {
    skill: SkillCategory;
    className?: string;
}) {
    const skillCategories = [
        skill.language,
        skill.backend,
        skill.frontend,
        skill.devops,
        skill.tools,
    ];

    return (
        <div id="skills" className={`${cardClass} ${className}`}>
            <div className={labelClass}>Skills</div>
            <div className="mt-3 flex flex-col gap-3">
                {skillCategories.map((cat) => (
                    <div key={cat.label}>
                        <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1.5">
                            {cat.label}
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                            {cat.items.map((item) => (
                                <span key={item.name} className={chipClass}>
                                    {item.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
