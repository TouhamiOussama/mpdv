// Projects.jsx
import Parallax1 from "../parallaxEffects/parallax1";
import { projectCards } from "../../websiteContent";
import ProjectCard from "./projectCard";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

function Projects() {
    const [currentPage, setCurrentPage] = useState(1);

    const projectsPerPage = 2;

    const indexOfLastProject = currentPage * projectsPerPage;
    const projectsToShow = projectCards.slice(0, indexOfLastProject);

    function handleLoadMore() {
        setCurrentPage((prev) => prev + 1);
    }

    const isEndOfProjects = projectCards.length === projectsToShow.length;

    const containerVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
        },
    };

    const itemVariants = {
        initial: { opacity: 0, y: 40 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 60, damping: 14 },
        },
    };

    return (
        <section
            id="projects"
            data-index={5}
            className="lightSection min-h-[100vh] h-auto py-[3rem]"
        >
            <Parallax1 sectionName={"My Projects"} />
            <div className="lightSection min-h-[100vh] bg-white px-[1.5rem] py-[4rem] md:px-[3rem]">
                <div className="max-w-[1100px] mx-auto text-center mb-[3rem]">
                    <p className="uppercase tracking-[0.2em] text-[0.8rem] text-[#8a8a8a] font-[600] mb-[0.5rem]">
                        Selected work
                    </p>
                    <h1 className="text-[2rem] md:text-[2.5rem] font-[700] tracking-tight">
                        All Projects
                    </h1>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    className="projectsContainer grid grid-cols-1 lg:grid-cols-2 gap-[2.5rem] max-w-[1300px] mx-auto"
                >
                    {projectsToShow.map((project) => (
                        <ProjectCard
                            key={project.id}
                            variant={itemVariants}
                            project={project}
                        />
                    ))}
                </motion.div>

                <div className="flex justify-center mt-[3.5rem]">
                    <button
                        onClick={handleLoadMore}
                        disabled={isEndOfProjects}
                        className={`flex items-center gap-[0.5rem] p-[0.7rem] px-[1.6rem] rounded-[10px] font-[500] transition-colors duration-300 ${
                            isEndOfProjects
                                ? "bg-[#f0f0f0] text-[#a3a3a3] cursor-not-allowed"
                                : "bg-black text-white hover:bg-[#222]"
                        }`}
                    >
                        {isEndOfProjects ? "You've reached the end" : "Load More"}
                        {!isEndOfProjects && <FaArrowDown size={12} />}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Projects;