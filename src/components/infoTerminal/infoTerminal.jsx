import { useEffect, useState } from "react";
import { sectionGlobalStyles } from "../../websiteContent";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { textEnter, textLeave } from "../../store/cursorMaskSlice";

function InfoTerminal() {
    const [inputValue, setInputValue] = useState("");
    const [terminal, setTerminal] = useState({
        terminalInputs: [
            { id: 1, value: "", output: null }
        ],
        commands: [
            {
                cmd: "about-oussama",
                result: [
                    "Hi, I'm Oussama Touhami  a 19-year-old web developer passionate about building useful and creative digital experiences. I work with a wide range of programming languages and modern technologies, and I love turning ideas into real projects. Problem solving, learning, facing challenges is what I like most about a such a field like this."
                ]
            },
            {
                cmd: "skills",
                result: [
                    "- HTML",
                    "- CSS",
                    "- JavaScript",
                    "- PHP",
                    "- React JS",
                    "- React Native",
                    "- Redux",
                    "- Node.Js",
                    "- Tailwind CSS",
                    "- Bootstrap",
                    "- SQL",
                    "- Git & GitHub",

                ]
            },
            {
                cmd: "studies",
                result: [
                    "===> Lycée Abdelah Guenoun 2023-2024: (Option science phisique fraçais).",
                    "===> ISTA Lazaret 2024-2026: (Option Developpement digital full stack).",
                ]
            },
            {
                cmd: "contact",
                result: [
                    "Email: touhamioussama2206@gmail.com",
                    "Github: https://github.com/OussamaTh",
                    "Instagram: ussa.m4",
                    "Phone Number: 0684091041"
                ]
            },
        ],
    });
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true)
    },)

    const defaultTerminalValue = "OUSSAMA> ";

    function executeCommand() {
        setTerminal((prev) => {
            const newId = prev.terminalInputs[prev.terminalInputs.length - 1].id + 1;

            const matchedCommand = prev.commands.find((c) => c.cmd === inputValue);

            let output = null;

            if (matchedCommand) {
                output = matchedCommand.result;
            } else if (inputValue.trim() === "help") {
                output = [
                    "Available commands:",
                    "- about-oussama 🙍",
                    "- skills 📜",
                    "- studies 🏨",
                    "- contact 📞",
                    "- help ℹ️",
                    "- clear"
                ];
            } else if (inputValue.trim() === "clear") {
                return {
                    ...prev,
                    terminalInputs: [
                        { id: 1, value: "", output: null }
                    ]
                };
            } else {
                output = [`Command not found: ${inputValue}`];
            }

            return {
                ...prev,
                terminalInputs: [
                    ...prev.terminalInputs,
                    { id: newId, value: inputValue, output }
                ]
            };
        });

        setInputValue("");
    }

    function handleEnterPress(e) {
        if (e.key === "Enter" && inputValue !== "") {
            executeCommand();
        }
    }

    const dispatch = useDispatch();

    function handleTextEnter() {
        dispatch(textEnter())
    }
    function handleTextLeave() {
        dispatch(textLeave())
    }

    return (
        <section id="quickInfo" data-index={1} className="lightSection quickInfoSection">
            <motion.h1
                onMouseEnter={handleTextEnter}
                onMouseLeave={handleTextLeave}
                initial={{
                    opacity: 0,
                    y: 50
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ margin: "-200px", once: true }}
                className={`sectionTitle font-[800] ${sectionGlobalStyles.titleStyle}`}
            >
                Quick Info
            </motion.h1>

            <motion.div
                initial={{
                    opacity: 0,
                    y: 50
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ margin: "-200px", once: true }}

                className="terminal text-white rounded-xl">
                <div className="bg-[#454545] w-full h-[40px] flex p-3 sticky top-0 justify-between items-center">
                    <div className=" flex items-center gap-2">
                        <div className="h-[15px] w-[15px] bg-[#fc0000]  rounded-full"></div>
                        <div className="h-[15px] w-[15px] bg-[#ffaa00]  rounded-full"></div>
                        <div className="h-[15px] w-[15px] bg-[#26ff00]  rounded-full"></div>
                    </div>
                    <button onClick={executeCommand} className="runButton hover:text-[#a9a9a9] cursor-pointer hidden max-sm:block">RUN</button>
                </div>
                <div className="p-3 max-sm:text-[0.8rem] ">
                    <p>Use this terminal to get quick info about me :)</p>
                    <ul className="font-[100] text-[var(--lightMode-light-text-color)]">
                        <li>- help: type help to get all available commands.</li>
                        <li>- clear: type clear to clear the terminal.</li>
                    </ul>
                </div>

                <div className="terminalInputContainer max-sm:text-[0.8rem] p-3 py-6">
                    {terminal.terminalInputs.map((item, index) => (
                        <div key={item.id}>
                            {item.output && (
                                <div className="mt-1">
                                    {item.output.map((line, i) => (
                                        <p className="text-[var(--lightMode-light-text-color)]" key={i}>{line}</p>
                                    ))}
                                </div>
                            )}
                            <div className="flex items-center text-[1.1rem] max-sm:text-[0.9rem]">
                                <p className="" >{defaultTerminalValue}</p>

                                <input
                                    type="text"
                                    onChange={e => setInputValue((e.target.value).toLowerCase().trim())}
                                    onKeyDown={handleEnterPress}
                                    className="terminalInput"
                                    autoFocus={isLoaded && index === terminal.terminalInputs.length - 1}
                                />
                            </div>

                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default InfoTerminal;
