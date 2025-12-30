import { motion } from "framer-motion";


function SkillsCard({ skills }) {
    return (
        <>
            <div
                className="skillsCard  min-h-[300px] min-w-[400px] w-auto p-[0.6rem] rounded-2xl max-sm:min-w-[325px] ">
                <h1 className="text-center text-[1.5rem] font-[900] p-2" >{skills.groupName}</h1>
                <div className="grid grid-cols-2 place-items-center gap-[0.8rem] p-5">
                    {skills.skillsList.map((skill) => {
                        return (
                            <div key={skill.id} className="skill flex items-center justify-evenly gap-5 max-sm:gap-3  w-full min-h-[50px] rounded-md  cursor-pointer hover:translate-y-[-5px] transition-all ">
                                <img src={skill.imgPath} width={20} height={20} alt="" />
                                <p className="font-[600] text-[var(--lightMode-text-color)] text-[0.9rem] max-sm:text-[0.8rem] text-center" >{skill.skillName}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default SkillsCard;