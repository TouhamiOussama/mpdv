import { motion } from "framer-motion";
import { defaultButtonStyle, sectionGlobalStyles, SKILLS_INFO } from "../../websiteContent";
import SkillsCard from "../skillsCard/skillsCard";
import { useDispatch } from "react-redux";
import { textEnter, textLeave } from "../../store/cursorMaskSlice";

function Skills({ data }) {
    const dispatch = useDispatch();


    const handleTextLeave = () => dispatch(textLeave());
    const handleTextEnter = () => dispatch(textEnter());

    

    return (
        <>
            <div className="flex items-center justify-center flex-wrap gap-[1.5rem] p-[2rem] py-[4rem] w-[70%] max-sm:w-[100%] mx-auto">
                {data?.map((skill) => {
                    return (
                        <div
                            key={skill.title}
                            className="group relative bg-[#2e2e2e] p-4 min-w-[130px] min-h-[130px] 
                   max-sm:min-w-[140px] max-sm:min-h-[140px]
                   flex items-center justify-center rounded-[10px] hover:opacity-90 "
                        >
                            {/* Image */}
                            <img
                                src={skill.imgPath}
                                className="w-[60px] max-sm:w-[70px] transition-opacity duration-300 group-hover:opacity-10 "
                                alt={skill.title}
                            />

                            <span
                                className="absolute opacity-0 group-hover:opacity-100
                     text-white text-[1.2rem] text-center font-[700]
                     transition-opacity duration-300 "
                            >
                                {skill.skillName}
                            </span>
                        </div>
                    );
                })}
            </div>

        </>
    )
}
export default Skills;