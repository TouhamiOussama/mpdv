import { useDispatch } from "react-redux";
import { textEnter, textLeave } from "../../store/cursorMaskSlice";
import { defaultButtonStyle, sectionGlobalStyles, socialMedia } from "../../websiteContent";
import { motion, useScroll, useTransform } from "framer-motion";
import DarkButton from "../button/darkButton";
import SocialItem from "../socialMedia/socialItem";
import { useRef } from "react";
import { handleDownloadCv } from "../../store/downloadCvSlice";

function AboutMe() {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end start"]
    });
    const contentY = useTransform(scrollYProgress, [0, 0.4], ["200px", "0px"]);
    const imgBlocX = useTransform(scrollYProgress, [0, 0.3], ["-200px", "0px"]);
    const contentClipPath = useTransform(scrollYProgress,[0,0.9],["circle(0% at 50% 100%)",
    "circle(200% at 50% 100%)"])
    const circleClipPath = useTransform(scrollYProgress,[0,0.7],["circle(0% at 50% 0)",
    "circle(200% at 50% 0)"])
    const opacity = useTransform(scrollYProgress,[0,0.4],[0,1]);



    const dispatch = useDispatch();
    function handleTextEnter() {
        dispatch(textEnter())
    }
    function handleTextLeave() {
        dispatch(textLeave())
    }

    const downloadCv = () => dispatch(handleDownloadCv());
    return (
        <>
            <motion.section
                id="aboutMe"
                data-index={2}
                /* initial={{ clipPath: "circle(5% at 50% 0)" }}
                whileInView={{ clipPath: "circle(200% at 40% 0)" }}
                transition={{ duration: 5, ease: "easeOut" }}
                viewport={{ margin: "30px" }} 
                ref={ref} */
                ref={ref}
                style={{clipPath: circleClipPath}}
                transition={{type: "spring", stiffness: 1}}
                className="darkSection overflow-hidden bg-[#111111] relative p-[1.5rem]" >
                <motion.h1
                    onMouseEnter={handleTextEnter}
                    onMouseLeave={handleTextLeave}
                    className={`font-[800] sectionTitle ${sectionGlobalStyles.titleStyle} text-[white]`} >About Me</motion.h1>

                <div  className="aboutMeSection  p-[2rem] py-[4rem] w-full flex items-center justify-between">
                    <motion.div
                        className="aboutMeImgContainer m-4 sticky top-[30px]"
                        style={{x:imgBlocX,opacity}}
                        >
                        <div className="aboutDummyNav flex items-center px-3">
                            <div className=" flex items-center gap-2">
                                <div className="h-[15px] w-[15px] bg-[#fc0000]  rounded-full"></div>
                                <div className="h-[15px] w-[15px] bg-[#ffaa00]  rounded-full"></div>
                                <div className="h-[15px] w-[15px] bg-[#26ff00]  rounded-full"></div>
                            </div>
                        </div>
                        <img className="aboutMeImg " src="/images/myImage5.jpg" width={400} alt="" />
                        <div className="bottomNavBorder"></div>
                    </motion.div>

                    <motion.div
                        
                        style={{ y: contentY,opacity,clipPath: contentClipPath }}
                        className="aboutMeContent w-[50%] max-lg:w-[100%]">
                        <h1 onMouseEnter={handleTextEnter} onMouseLeave={handleTextLeave} className="text-[3rem] font-[800] text-[white]" >Who I Am ?</h1>
                        <p onMouseEnter={handleTextEnter} onMouseLeave={handleTextLeave} className="my-[2rem] text-[var(--lightMode-light-text-color)]">Hi, I'm Oussama Touhami a web developer passionate about building useful and creative digital experiences. I work with a wide range of programming languages and modern technologies, and I love turning ideas into real projects. Problem solving, learning, facing challenges is what I like most about a such a field like this.</p>
                        <DarkButton onClick={() => downloadCv()} buttonText={"Download CV"} />
                    </motion.div>

                </div>

            </motion.section>
        </>
    )
}
export default AboutMe;