import React, { useEffect, useRef, useState } from 'react'
import { hasWarned, motion } from "framer-motion"
import ToggleButton from '../navbar/toggleButton';

export default function SectionTracker({ activeSection, scrollProgress }) {
    const [sectionName, setSectionName] = useState("Home");
    const [open, setOpen] = useState(false);
    const [islandOpened,setIslandOpened] = useState(false);
    const islandRef = useRef();

    let sectionData = [
        { sectionId: "home", sectionName: "Home", isDark: false },
        { sectionId: "quickInfo", sectionName: "Terminal", isDark: false },
        { sectionId: "aboutMe", sectionName: "About Me", isDark: true },
        { sectionId: "moreAboutMe", sectionName: "More", isDark: true },
        { sectionId: "skillsSection", sectionName: "Skills", isDark: false },
        { sectionId: "projects", sectionName: "Projects", isDark: false },
        { sectionId: "contact", sectionName: "Contact", isDark: false },
    ];
    let currentActiveSection = sectionData.find((item) => item.sectionId == activeSection);
    useEffect(() => {
        if (currentActiveSection) {
            setSectionName(currentActiveSection.sectionName);
        }
    }, [activeSection])

    useEffect(() => {
        const quitIsland = (e) => {
            if (islandRef.current && !islandRef.current.contains(e.target)){
                setIslandOpened(false);
            }
        }
        document.addEventListener("mousedown",quitIsland);
        return () => document.removeEventListener("mousedown",quitIsland)
    },[])
    
    function handleOpenCloseIsland(){
        setIslandOpened((prev) => !prev)
    }


    return (
        <>
            {sectionName !== "Home" && <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 2 } }}
                whileHover={{ y: -5 }}
                onClick={handleOpenCloseIsland}
                className="overflow-hidden bg-[#4b4b4b5a] backdrop-blur-[20px] text-white w-[180px] h-[35px] flex items-center justify-center fixed left-1/2 top-[92%] -translate-x-1/2 z-[9999] rounded-full font-[500] text-[0.8rem] border-2 border-[#c8c8c847] cursor-pointer  ">
                {sectionName}
                <div style={{ width: `${scrollProgress}%`, mixBlendMode: "difference" }} className={`bg-white h-[60px]  absolute left-0`}>

                </div>
            </motion.div>}
           {islandOpened && 
             <motion.div ref={islandRef} initial={{scale: 0.7,opacity:0,y:150}} animate={{scale:1,opacity:1,transition:{type: "spring",stiffness: 150},y:0}} className="overflow-hidden bg-[#4b4b4b5a] backdrop-blur-[20px] text-white w-[400px] h-[300px] max-sm:w-[300px]  fixed left-1/2 top-[45%] -translate-x-1/2 z-[9999] rounded-xl font-[500] text-[0.8rem] border-2 border-[#c8c8c847] p-4 ">
                <motion.div >
                    <div className="flex justify-end">
                        <button onClick={() => setIslandOpened(false)} className='cursor-pointer ' >
                            <svg width="23" height="23" viewBox="0 0 23 23">
                                <motion.path d="M 2 16.5 L 17 2.5" strokeWidth="3" stroke={"white"} strokeLinecap="round" />
                                <motion.path d="M 2 2.5 L 17 16.5" strokeWidth="3" stroke={"white"} strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="grid grid-cols-2 items-center h-[12rem] text-center py-[1rem] ">
                        {sectionData.map((section,index) => {
                            return(
                                <>
                                    <a 
                                        onClick={() => setIslandOpened()}
                                        className={`text-[1.5rem] ${activeSection == section.sectionId ? 
                                            "text-black bg-[url('/icons/brush.png')] bg-no-repeat bg-center bg-contain ":
                                            "text-white"
                                        } `} href={`#${section.sectionId}`}>{section.sectionName}</a>
                                </>
                            )
                        })}
                    </div>
                </motion.div>
            </motion.div>
           }
        </>
    )
}
