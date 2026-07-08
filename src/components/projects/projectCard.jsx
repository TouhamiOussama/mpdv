import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import DarkButton from "../button/darkButton";
import LightButton from "../button/lightbutton";

function ProjectCard({ project, variant }) {
    const [slideIndex, setSlideIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    const [direction, setDirection] = useState(0);

    const slidesLength = project.thumbnails.length;
    const thumbnails = project.thumbnails;

    // Improved sentence splitting logic
    const splitIntoSentences = (text) => {
        // Match sentences ending with . ! ? followed by space or end of string
        // Also handle abbreviations like "e.g." and "i.e." by not splitting on them
        const sentenceRegex = /[^.!?]+[.!?]+(?:\s|$)/g;
        const matches = text.match(sentenceRegex);

        if (!matches) return [text]; // Fallback: return whole text as one sentence

        return matches.map(s => s.trim()).filter(s => s.length > 0);
    };

    const sentences = splitIntoSentences(project.description);
    const shouldTruncate = sentences.length > 3;

    const visibleText = isExpanded
        ? project.description
        : sentences.slice(0, 1).join(" ");

    const handleNext = useCallback(() => {
        setDirection(1);
        setSlideIndex((prev) => (prev + 1) % slidesLength);
    }, [slidesLength]);

    const handlePrev = useCallback(() => {
        setDirection(-1);
        setSlideIndex((prev) => (prev - 1 + slidesLength) % slidesLength);
    }, [slidesLength]);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0,
        }),
    };

    const hasMultipleSlides = slidesLength > 1;

    return (
        <motion.div
            variants={variant}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl overflow-hidden max-w-[600px] shadow-sm hover:shadow-lg transition-shadow duration-300"
        >
            {/* Slideshow */}
            <div className="relative overflow-hidden aspect-video bg-gray-100 group">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.img
                        key={slideIndex}
                        src={thumbnails[slideIndex]}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="w-full h-full object-cover absolute inset-0"
                        alt={`${project.name} screenshot ${slideIndex + 1}`}
                    />
                </AnimatePresence>

                {/* Overlay with visit button */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <DarkButton buttonText="Visit Website" />
                    </a>
                </div>

                {/* Slide indicators */}
                {hasMultipleSlides && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {thumbnails.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setDirection(idx > slideIndex ? 1 : -1);
                                    setSlideIndex(idx);
                                }}
                                className={`h-1.5 rounded-full transition-all duration-300 ${idx === slideIndex
                                        ? "w-6 bg-white"
                                        : "w-1.5 bg-white/60 hover:bg-white/80"
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                )}

                {/* Navigation arrows */}
                {hasMultipleSlides && (
                    <>
                        <button
                            onClick={handlePrev}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/50 translate-x-[-10px] group-hover:translate-x-0"
                            aria-label="Previous slide"
                        >
                            <FaArrowLeft size={14} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/50 translate-x-[10px] group-hover:translate-x-0"
                            aria-label="Next slide"
                        >
                            <FaArrowRight size={14} />
                        </button>
                    </>
                )}

                {/* Slide counter */}
                {hasMultipleSlides && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/40 text-white text-xs backdrop-blur-sm font-medium">
                        {slideIndex + 1} / {slidesLength}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4">
                {/* Header: Tech stack + mobile nav */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 flex-wrap">
                        {project.projectTechs.map((item) => (
                            <img
                                key={item.id}
                                src={item.img}
                                width={22}
                                height={22}
                                className="object-contain"
                                alt={item.name || item.id}
                                title={item.name || item.id}
                            />
                        ))}
                    </div>

                    {/* Mobile-friendly nav buttons */}
                    {hasMultipleSlides && (
                        <div className="flex items-center gap-1.5 md:hidden">
                            <button
                                onClick={handlePrev}
                                className="p-1.5 rounded-full border border-gray-400 text-gray-600 hover:bg-gray-700 hover:text-white hover:border-gray-700 transition-colors"
                            >
                                <FaArrowLeft size={12} />
                            </button>
                            <button
                                onClick={handleNext}
                                className="p-1.5 rounded-full border border-gray-400 text-gray-600 hover:bg-gray-700 hover:text-white hover:border-gray-700 transition-colors"
                            >
                                <FaArrowRight size={12} />
                            </button>
                        </div>
                    )}
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                    {project.name}
                </h2>

                {/* Description with Load More */}
                <div className="text-gray-600 leading-relaxed">
                    <p>
                        {visibleText}
                        {shouldTruncate && !isExpanded && "..."}
                    </p>
                    {shouldTruncate && (
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="mt-2 text-sm font-medium text-gray-800 hover:text-black underline underline-offset-2 decoration-gray-400 hover:decoration-black transition-all"
                        >
                            {isExpanded ? "Show Less" : "Load More"}
                        </button>
                    )}
                </div>

                {/* Footer */}
                <div className="pt-2">
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                        <LightButton buttonText="Visit Website" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectCard;