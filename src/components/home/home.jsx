import { useRef } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { textEnter, textLeave } from "../../store/cursorMaskSlice";
import LightButton from "../button/lightbutton";
import { handleDownloadCv } from "../../store/downloadCvSlice";

function Home() {
    const cardRef = useRef(null);
    const dispatch = useDispatch();

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xPercent = x / rect.width - 0.5;
        const yPercent = y / rect.height - 0.5;

        const rotateX = yPercent * 30;
        const rotateY = -xPercent * 30;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(0.97)`;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    };

    const handleTextEnter = () => dispatch(textEnter());
    const handleTextLeave = () => dispatch(textLeave());

    const variants = {
        initial: { x: "0%" },
        animate: {
            x: "-220%",
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 15,
                ease: "linear",
            },
        },
    };

    const downloadCv = () => dispatch(handleDownloadCv());

    return (
        <section
            data-index={0}
            id="home"
            className="lightSection min-h-[140vh] max-sm:min-h-[110vh] relative overflow-hidden"
        >
            <div className="homePageContainer h-screen w-full flex justify-around items-center p-6">
                <div className="homeContent">
                    <h1
                        className=" text-[5rem] font-[900]"
                        onMouseEnter={handleTextEnter}
                        onMouseLeave={handleTextLeave}
                    >
                      Hey 👋,<br /> I'm <span className="darkBorderedText" >Oussama</span> 
                    </h1>

                    <p className="text-[1.3rem] w-[70%] my-4 font-[400]">
                       Hey there, I'm Oussama Touhami, I'm a full stack web developer. 
                    </p>

                    <LightButton onClick={() => downloadCv()}  buttonText="Download CV" />
                </div>

                <div className="imageBloc">
                    <div
                        ref={cardRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="homeImage"
                        style={{
                            perspective: "300px",
                            transformStyle: "preserve-3d",
                            transition: "transform 0.15s ease",
                        }}
                    />
                    <div className="underShape" />
                </div>
            </div>

            <div className="absolute bottom-[0px] w-full overflow-hidden pointer-events-none">
                <motion.div
                    onMouseEnter={handleTextEnter}
                    onMouseLeave={handleTextLeave}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    style={{ willChange: "transform" }}
                    className="
                        py-6
                        text-[40vh]
                        max-sm:text-[20vh]
                        whitespace-nowrap
                        text-[#1d1d1d16]
                        font-[700]
                        cursor-none
                    "
                >
                    Oussama Touhami - Oussama Touhami - Oussama Touhami - Oussama Touhami
                </motion.div>
            </div>
        </section>
    );
}

export default Home;
