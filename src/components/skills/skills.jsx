import { motion } from "framer-motion";

const CATEGORIES = [
    { key: "front", title: "Frontend", note: "Interfaces and styling" },
    { key: "back", title: "Backend", note: "Servers and data" },
    { key: "tools", title: "Tools", note: "Everyday workflow" },
];

function Skills({ data }) {
    const groups = CATEGORIES.map((category) => ({
        ...category,
        items: (data ?? []).filter((skill) => skill.category === category.key),
    })).filter((group) => group.items.length > 0);

    return (
        <div className="flex flex-wrap items-stretch justify-center gap-[1.5rem] px-[2rem] py-[4rem] w-[80%] max-sm:w-full mx-auto">
            {groups.map((group) => (
                <motion.article
                    key={group.key}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex flex-col gap-[1.75rem] flex-1 basis-[300px] min-w-[280px] max-w-[400px]
                               bg-[#2e2e2e] text-white rounded-[20px] p-[2rem] max-sm:max-w-full max-sm:p-[1.5rem]"
                >
                    <header className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-[1.25rem]">
                        <div>
                            <h2 className="text-[1.6rem] font-[700] leading-tight">{group.title}</h2>
                        </div>
                    </header>

                    <ul className="flex flex-wrap gap-[0.6rem]">
                        {group.items.map((skill) => (
                            <li
                                key={skill.title}
                                className="px-[1rem] py-[0.4rem] rounded-full border border-white/20
                                           text-[0.9rem] font-[500] text-white/90
                                           transition-colors duration-200
                                           hover:bg-white hover:text-black hover:border-white"
                            >
                                {skill.skillName ?? skill.title}
                            </li>
                        ))}
                    </ul>
                </motion.article>
            ))}
        </div>
    );
}

export default Skills;