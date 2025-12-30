import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function SkillBox({ skillItem,...props }) {
    const { skillGroupId, groupName, skills } = skillItem;
    const containerRef = useRef();


    const containerVariants = {
        initial: {
            opacity: 0,
            
        },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, 
                delayChildren: 0.2,    
            },
        },
    };

    const itemVariants = {
        initial: {
            opacity: 0,
            scale: 0.5,
        },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 30,
            },
        },
    };

    return (
        <>
            <motion.div {...props} data-index={skillGroupId} className="skillBox" >
                <motion.h1 className="text-[3rem] font-[600] text-center">{groupName}</motion.h1>
                <motion.div variants={containerVariants}
                    initial="initial"
                    whileInView={"animate"} className="skillsContainer pt-[5rem]">
                    {skills.map((skill, index) => {
                        return (
                            <motion.div variants={itemVariants} key={index} style={{ background: skill.bgColor }} className="sphere w-[150px] h-[150px] flex items-center justify-center text-[1.5rem] font-[800] rounded-full text-[white] uppercase text-center max-sm:w-[110px] max-sm:h-[110px] max-sm:text-[1rem] ">{skill.name}</motion.div>
                        )
                    })}
                </motion.div>

            </motion.div>
        </>
    )
}
