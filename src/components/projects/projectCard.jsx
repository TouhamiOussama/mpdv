import { img } from "framer-motion/m";
import DarkButton from "../button/darkButton";
import LightButton from "../button/lightbutton";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";


function ProjectCard({ project, variant }) {
    const [slideIndex, setSlideIndex] = useState(0);
    let slidesLength = project.thumbnails.length

    const handleNext = () => {
        if (slidesLength == slideIndex + 1) {
            setSlideIndex(0);
            return;
        }
        setSlideIndex((prev) => prev + 1);
    }
    const handlePrev = () => {
        if (slideIndex == 0) {
            setSlideIndex(slidesLength - 1);
            return;
        }
        setSlideIndex((prev) => prev - 1);
    }

    return (
        <>
            <motion.div variants={variant} className="bg-[#fff] projectItem rounded-[10px] relative overflow-hidden max-w-[600px]">
                <div className="projectOverview overflow-hidden flex relative">
                    <img src={project.thumbnails[slideIndex]} className="w-[600px] rounded-t-[10px] transition-all duration-500 h overflow-hidden " alt="" />
                    <div className="blurOverlay absolute text-white left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full transition-all duration-700 flex items-center justify-center  ">
                        <a href={project.url} target="_blank">
                            <DarkButton buttonText={"Visit website"} />
                        </a>
                    </div>
                </div>
                <div className="p-[1.5rem] px-[1.5rem] min-h-[300px] z-[999] flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-[2px]">
                            {project.projectTechs.map((item) => {
                                return <img key={item.id} src={item.img} width={25} alt={item.id} />
                            })}
                        </div>
                        <div className="flex items-center gap-[0.3rem]">
                            <button disabled={slidesLength == 1} onClick={handlePrev} className={`p-[0.3rem] rounded-full border-2 ${slidesLength == 1 ? " text-[#c4c4c4] border-[#c4c4c4] cursor-not-allowed" : "border-[#575757] cursor-pointer hover:bg-[#575757] hover:text-[white]"} `} ><FaArrowLeft size={14} /></button>
                            <button disabled={slidesLength == 1} onClick={handleNext} className={`p-[0.3rem] rounded-full border-2 ${slidesLength == 1 ? " text-[#c4c4c4] border-[#c4c4c4] cursor-not-allowed" : "border-[#575757] cursor-pointer hover:bg-[#575757] hover:text-[white]"} `} ><FaArrowRight size={14} /></button>
                        </div>
                    </div>
                    <h1 className="text-[2rem] font-[700] my-[0.5rem]">{project.name}</h1>
                    <p className="my-3" >
                        {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                        <a href={project.url} target="_blank">
                            <LightButton buttonText={"Visit website"} />
                        </a>

                    </div>
                </div>
            </motion.div>
        </>
    )
}
export default ProjectCard;