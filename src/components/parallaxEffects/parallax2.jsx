import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Parallax2() {
    let ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end start"]
    });
    const sq1 = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
    const sq2 = useTransform(scrollYProgress, [0, 0.5], [500, 0]);
    const sq3 = useTransform(scrollYProgress, [0, 0.5], [800, 0]);
    const shape1Dim = useTransform(scrollYProgress, [0.5, 0.6], ["0px", "500px"]);
    const shape2Dim = useTransform(scrollYProgress, [0.6, 0.7], ["0px", "500px"]);
    const shape3Dim = useTransform(scrollYProgress, [0.7, 0.8], ["0px", "500px"]);
    const textFill = useTransform(scrollYProgress, [0.3, 0.4], ["100% 0%", "0% 0%"])

    let titleStyle = "whiteBorderedText text-[3.5rem] pt-[2rem] max-lg:text-[3rem]   font-[900] flex flex-col justify-center items-center text-white";
    let squareStyle = "lightWindow w-[400px] h-[300px] max-sm:w-[85%] max-sm:h-[200px] rounded-2xl relative overflow-hidden";

    return (
        <>
            <motion.section className="min-h-[550vh] relative bg-[#111111]">
                <motion.div ref={ref} className=" min-h-[500vh] relative flex flex-col items-center justify-center gap-[5rem]">
                    <motion.h1 style={{ backgroundPosition: textFill }} className="fillText text-[5.5rem] text-[#111111] font-[900] overflow-hidden max-xl:text-[4.5rem] max-lg:text-[3.5rem] max-md:text-[2.5rem] max-sm:text-[1.5rem]  sticky top-[10%]" >
                        print("Hello world") <br />
                        console.log("Hello world"); <br />
                        echo "Hello World"; <br />
                    </motion.h1>
                    <motion.div className="bg-[#111111ed] backdrop-blur-[10px] flex flex-wrap gap-[3rem] items-center justify-center w-full h-[100vh] sticky top-[10%] max-sm:top-[10%]">
                        <motion.div style={{ y: sq1 }} className={squareStyle}>
                            <div className="nav flex items-center gap-[4px] ps-4">
                                {[...Array(3)].map((_, index) => {
                                    return (
                                        <div key={index} className="w-[15px] h-[15px] rounded-full bg-white"></div>
                                    )
                                })}
                            </div>
                            <h1 className={titleStyle} >#CODING</h1>
                            <motion.div style={{ width: shape1Dim, mixBlendMode: "difference" }} className="bg-white absolute top-1/2 -translate-y-1/2 left-[-10%] h-[350px] " />
                        </motion.div>
                        <motion.div style={{ y: sq2 }} className={squareStyle}>
                            <div className="nav flex items-center gap-[4px] ps-4">
                                {[...Array(3)].map((_, index) => {
                                    return (
                                        <div key={index} className="w-[15px] h-[15px] rounded-full bg-white"></div>
                                    )
                                })}
                            </div>
                            <h1 className={titleStyle} >#COFFEE</h1>
                            <motion.div style={{ width: shape2Dim, mixBlendMode: "difference" }} className="bg-white absolute top-1/2 -translate-y-1/2 left-[-10%] h-[350px] " />
                        </motion.div>
                        <motion.div style={{ y: sq3 }} className={squareStyle}>
                            <div className="nav flex items-center gap-[4px] ps-4">
                                {[...Array(3)].map((_, index) => {
                                    return (
                                        <div key={index} className="w-[15px] h-[15px] rounded-full bg-white"></div>
                                    )
                                })}
                            </div>
                            <h1 className={titleStyle} >#DEBUGGING</h1>
                            <motion.div style={{ width: shape3Dim, mixBlendMode: "difference" }} className="bg-white absolute top-1/2 -translate-y-1/2 left-[-10%] h-[350px] " />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.section>
        </>
    )
}
export default Parallax2;