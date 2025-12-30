import { img } from "framer-motion/m";
import DarkButton from "../button/darkButton";
import LightButton from "../button/lightbutton";
import { motion } from "framer-motion";

function ProjectCard({ project, variant }) {
    return (
        <>
            <motion.div variants={variant} className="bg-[#fff] projectItem rounded-[10px] relative overflow-hidden max-w-[600px]">
                <div className="projectOverview overflow-hidden flex relative">
                    <img src={project.thumbnail} className="w-[600px] rounded-t-[10px] transition-all duration-500 h overflow-hidden " alt="" />
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
                        <div className="date font-[600] text-[#bababa]">
                            {project.date}
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