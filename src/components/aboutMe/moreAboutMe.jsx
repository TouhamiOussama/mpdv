import { useRef } from "react";
import LightButton from "../button/lightbutton";
import { motion, useScroll, useTransform } from "framer-motion";
import { sectionGlobalStyles } from "../../websiteContent";
import { useDispatch } from "react-redux";
import { textEnter, textLeave } from "../../store/cursorMaskSlice";

function MoreAboutMe() {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end start"]
    });

    const firstBoxY = useTransform(scrollYProgress, [0, 0.3], ["500px", "0px"]);
    const firstBoxOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const circleClipPath = useTransform(scrollYProgress, [0, 0.3], ["",
        "circle(200px at 50% 0)"])

    const secondBoxY = useTransform(scrollYProgress, [0.3, 0.6], ["500px", "0px"]);
    const secondBoxOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

    const thirdBoxY = useTransform(scrollYProgress, [0.6, 0.7], ["400px", "0px"]);
    const thirdBoxOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);


    const dispatch = useDispatch();
    function handleTextEnter() {
        dispatch(textEnter())
    }
    function handleTextLeave() {
        dispatch(textLeave())
    }

    return (
        <>
            <section id="moreAboutMe" data-index={3} ref={ref} style={{ minHeight: "300vh" }} className="darkSection bg-[#111111]  max-md:overflow-y-hidden" >
                <h1 className={`sectionTitle text-[2rem] text-center font-[900] text-white`} >What Else ?</h1>
                <div className="parallaxContainer min-h-[300vh] relative flex items-center justify-around max-md:flex-col">
                    <div className="sticky top-[10%]  h-[100vh] max-md:relative ">
                        <motion.div
                            className="aboutMeImgContainer m-4 "
                        >
                            <div className="aboutDummyNav flex items-center px-3">
                                <div className=" flex items-center gap-2">
                                    <div className="h-[15px] w-[15px] bg-[#fc0000]  rounded-full"></div>
                                    <div className="h-[15px] w-[15px] bg-[#ffaa00]  rounded-full"></div>
                                    <div className="h-[15px] w-[15px] bg-[#26ff00]  rounded-full"></div>
                                </div>
                            </div>
                            <img src="/images/myImage4.jpg" className="w-[400px]" alt="" />
                            <div className="bottomNavBorder"></div>
                        </motion.div>
                    </div>

                    <div onMouseEnter={handleTextEnter} onMouseLeave={handleTextLeave} className="content flex flex-col gap-[30vh] max-md:gap-[20vh] ">
                        <motion.div
                            style={{ y: firstBoxY, opacity: firstBoxOpacity }}
                            className="lightWindow translate-y-[300px] min-h-[240px] h-auto w-[600px]  max-md:w-[90%] text-center max-md:mx-auto max-md:translate-y-[0px] ">
                            <div className="nav flex items-center gap-[4px] ps-4">
                                {[...Array(3)].map((_, index) => {
                                    return (
                                        <div key={index} className="w-[15px] h-[15px] rounded-full bg-white"></div>
                                    )
                                })}
                            </div>
                            <div className="p-5">
                                <h1 className="text-[3rem] font-[900] text-white max-md:text-[2rem]">How I discovered this field ?</h1>
                                <p className="text-[#9b9b9b]">My story with this field started when I was 15 years old, the first two things I discovered were HTML and CSS, I was impressed with these two Web design languages, I've built the ugliest websites then, the funny thing about that, is that none of these first websites were responsive, just a little zoom will ruin everything. but with time I learnt how to make responsive static websites.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            style={{ y: secondBoxY, opacity: secondBoxOpacity }}
                            className="lightWindow translate-y-[300px] min-h-[240px] h-auto w-[600px]  max-md:w-[90%] text-center max-md:mx-auto max-md:translate-y-[0px]">
                            <div className="nav flex items-center gap-[4px] ps-4">
                                {[...Array(3)].map((_, index) => {
                                    return (
                                        <div key={index} className="w-[15px] h-[15px] rounded-full bg-white"></div>
                                    )
                                })}
                            </div>
                            <div className="p-5">
                                <h1 className="text-[3rem] font-[900] text-white max-md:text-[2rem]">And then ?</h1>
                                <p className="text-[#9b9b9b]">After I've got my bachelor degree, I accomplished my studies in <strong>ISTA-Specialized Institute of Applied Technology</strong>, I took me 2 years to take my specialized technician diploma. During this 2 years, I've learnt lot of things, lot of programming languages and technologies such as <strong>React Js</strong> and <strong>Laravel</strong> etc... </p>
                            </div>
                        </motion.div>
                        <motion.div
                            style={{ y: thirdBoxY, opacity: thirdBoxOpacity }}
                            className="lightWindow translate-y-[300px] min-h-[240px] h-auto w-[600px]  max-md:w-[90%] text-center max-md:mx-auto max-md:translate-y-[0px]">
                            <div className="nav flex items-center gap-[4px] ps-4">
                                {[...Array(3)].map((_, index) => {
                                    return (
                                        <div key={index} className="w-[15px] h-[15px] rounded-full bg-white"></div>
                                    )
                                })}
                            </div>
                            <div className="p-5">
                                <h1 className="text-[3rem] font-[900] text-white max-md:text-[2rem]">Why I had choosen this field ?</h1>
                                <p className="text-[#9b9b9b]">Simply the answer is that I enjoy learning new things about tech to build and create digital projects to solve real world problems, furthermore I have the capability to solve problems, fix code and make it even much more reliable, I'm in love with this field because it's interesting for me.</p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default MoreAboutMe;