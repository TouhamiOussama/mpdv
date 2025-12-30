import { animate, motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import { SKILLS, SKILLS_INFO } from "../../websiteContent";
import SkillBox from "./SkillBox";
import Skills from "./skills";
import { initAsyncCompiler } from "sass";

export default function SkillsSection() {
    const [width, setWidth] = useState(window.innerWidth);
    const [activeTabButton, setActiveTabButton] = useState("all");
    const [skills, setSkills] = useState(SKILLS_INFO);

    let activeButtonStyle = "bg-black text-[white] px-[2rem] py-[0.4rem] rounded-[15px] text-[0.9rem] font-[600] cursor-pointer border-1 border-black  min-w-[100px]";
    let noneActiveButtonStyle = "bg-white text-[#b6b6b6] px-[2rem] py-[0.4rem] rounded-[20px] text-[0.9rem] font-[500] cursor-pointer border-1 border-[#b6b6b6] min-w-[100px]";


    function handleSwitchTab(buttonName) {
        if (buttonName == "all") {
            setSkills(SKILLS_INFO);
        }
        else if (buttonName == "front") {
            let frontSkills = SKILLS_INFO.filter((skill) => skill.category == buttonName);
            setSkills(frontSkills);
        }
        else if (buttonName == "back") {
            let backSkills = SKILLS_INFO.filter((skill) => skill.category == buttonName);
            setSkills(backSkills);
        }
        else if (buttonName == "tools") {
            let toolSkills = SKILLS_INFO.filter((skill) => skill.category == buttonName);
            setSkills(toolSkills);
        }
        setActiveTabButton(buttonName);

    }


    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const boxes = document.querySelectorAll(".skillBox");
        const dots = document.querySelectorAll(".dot");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = entry.target.dataset.index;

                        dots.forEach((dot) => dot.classList.remove("active"));
                        dots[index]?.classList.add("active");
                    }
                });
            },
            { threshold: 0.5, }
        );
        boxes.forEach((box) => observer.observe(box));
        return () => observer.disconnect();
    }, []);

    /* useEffect(() => {
        const skills = document.querySelector(".skills");
        const dots = document.querySelector(".dots");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        dots.classList.remove("hideDots");
                    }
                    else {
                        dots.classList.add("hideDots");
                    }
                });
            },
            { threshold: 0.2 }
        );
        observer.observe(skills)
    }, []); */




    const ref = useRef();
    const { scrollYProgress: firstProgress } = useScroll({
        target: ref,
        offset: ["start center", "end start"]
    });

    const letterSpacing = useTransform(firstProgress, [0.5, 0.6], ["15rem", "0rem"])
    const titleOpacity = useTransform(firstProgress, [0.5, 0.6], [0.1, 1])
    const rectangleClipPath = useTransform(firstProgress, [0.5, 0.6], [
        "circle(0% at 0 50%)",
        "circle(300% at 0 50%)"
    ])
    const textScale = useTransform(firstProgress, [0.5, 0.6], [0.5, 1]);


    const clipPath = useTransform(firstProgress, [0, 0.5], [
        "circle(0% at 0 50%)",
        "circle(300% at 0 50%)"
    ]);


    const containerVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
            },
        },
    };

    const itemVariants = {
        initial: {
            opacity: 0,
            x: -40
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 30,
            },
        },
    };

    const buttonsContainerVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const buttonVariants = {
        initial: {
            opacity: 0,
            y: 20,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 60,
            },
        },
    };




    return (
        <section id="skillsSection" data-index={4} className="darkSection min-h-[100vh] h-auto p-0" >
            {width >= 900 && <motion.div ref={ref} style={{ clipPath }} className="h-[300vh] flex items-center  justify-center flex-col relative bg-[#111111] text-center">
                <motion.h1 style={{ letterSpacing, opacity: titleOpacity, mixBlendMode: "difference" }} className="whiteBorderedText font-[500] text-[40vh]  text-[#fff] text-center sticky top-[10%] mx-auto " >Skills</motion.h1>
                <motion.div transition={{ type: "spring" }} className="bg-white w-full h-[150px] translate-y-[300px] " style={{ mixBlendMode: "difference", clipPath: rectangleClipPath }}>

                </motion.div>
            </motion.div>}

            {width < 900 && <motion.div ref={ref} style={{ clipPath }} className="h-[300vh]  flex items-center  justify-center flex-col relative bg-[#111111] text-center">
                <motion.h1 style={{ opacity: titleOpacity, mixBlendMode: "difference", scale: textScale }} className="whiteBorderedText font-[500] text-[15vh]  text-[#fff] text-center sticky top-[30%] mx-auto " >Skills</motion.h1>
                <motion.div transition={{ type: "spring" }} className="bg-white w-full h-[150px] translate-y-[300px] " style={{ mixBlendMode: "difference", clipPath: rectangleClipPath }}>

                </motion.div>
            </motion.div>}

           
            <motion.div variants={containerVariants} initial={"initial"} whileInView={"animate"} viewport={{once: true}} className="min-h-[100vh] h-auto  py-[3rem] ">
                <motion.h1 variants={itemVariants} className="text-center font-[700] text-[3rem] pt-[2rem] px-[2rem]" >What I know ?</motion.h1>
                <motion.p variants={itemVariants} className="text-center pb-[3rem] text-[0.9rem] text-[#929292] font-[500] px-[2rem]" >These are a bunch of programming languages and technologies I master.</motion.p>
                <motion.div variants={containerVariants} viewport={{once: true}} className="buttonGroup flex items-center justify-center gap-[1rem] flex-wrap">
                    <motion.button variants={buttonVariants} onClick={() => handleSwitchTab("all")} className={activeTabButton == "all" ? activeButtonStyle : noneActiveButtonStyle} >All</motion.button>
                    <motion.button variants={buttonVariants} onClick={() => handleSwitchTab("front")} className={activeTabButton == "front" ? activeButtonStyle : noneActiveButtonStyle} >Front</motion.button>
                    <motion.button variants={buttonVariants} onClick={() => handleSwitchTab("back")} className={activeTabButton == "back" ? activeButtonStyle : noneActiveButtonStyle} >Back</motion.button>
                    <motion.button variants={buttonVariants} onClick={() => handleSwitchTab("tools")} className={activeTabButton == "tools" ? activeButtonStyle : noneActiveButtonStyle} >Tools</motion.button>

                </motion.div>
                <motion.div variants={itemVariants} className="">
                    <Skills data={skills} />
                </motion.div>

            </motion.div>

            {/* <div className=" skills relative w-full min-h-[100vh]">
                <div className="dots fixed flex flex-col gap-2 px-4 float-end top-[50%] right-[2%] z-[999]">
                    {SKILLS.map((i) => (
                        <div key={i.skillGroupId} className="dot" data-index={i.skillGroupId}></div>
                    ))}
                </div>

                <motion.div className=" py-[10rem] h-[300vh] flex flex-col gap-[30vh] justify-center items-center">
                    {SKILLS.map((skillItem,index) => {
                        return(
                            <SkillBox key={index} skillItem={skillItem} />
                        )
                    })}
                </motion.div>

            </div> */}

        </section>
    )
}
