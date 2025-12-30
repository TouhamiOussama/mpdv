import Parallax1 from "../parallaxEffects/parallax1";
import { projectCards } from "../../websiteContent";
import ProjectCard from "./projectCard";
import { useState } from "react";
import { motion } from "framer-motion";

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
            x: -70,
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 50,
            },
        },
    };

    return (
        <section
            id="projects"
            data-index={5}
            className="lightSection min-h-[100vh] h-auto py-[3rem]"
        >
            <Parallax1 sectionName={"My Projects"} />
            <div className="lightSection min-h-[100vh] bg-white p-[2rem] py-[3rem]">
                <h1 className="text-center text-[2.5rem] font-[700]">
                    All Projects
                </h1>

                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    className="projectsContainer flex items-center justify-center gap-[3rem] py-[4rem] flex-wrap"
                >
                    {projectsToShow.map((project) => (
                        <ProjectCard
                            key={project.id}
                            variant={itemVariants}
                            project={project}
                        />
                    ))}
                </motion.div>

                <div className="flex justify-center">
                    <button
                        onClick={handleLoadMore}
                        disabled={isEndOfProjects}
                        className={`${isEndOfProjects
                            ? "bg-[#e3e3e3] text-[#787878] cursor-not-allowed"
                            : "bg-black text-white"
                            } p-2 px-5 rounded-[10px]`}
                    >
                        {isEndOfProjects ? "That's All" : "Load More"}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Projects;
