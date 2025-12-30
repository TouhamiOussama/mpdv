import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import DarkButton from "../button/darkButton";

function Footer() {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const textFill = useTransform(scrollYProgress, [0.2, 0.4], ["100% 0%", "-100% 0%"])

    return (
        <>
            <motion.section ref={ref} id="footer" className="bg-[#111111] min-h-[70vh] p-4 flex flex-col items-center justify-center gap-[2rem]" >
                <motion.h1 style={{ backgroundPosition: textFill }} className="footerFillText uppercase text-[6rem] max-lg:text-[4rem] max-md:text-[3rem] max-sm:text-[2rem] font-[900] text-center " >oussama touhami</motion.h1>
                <p className="text-center font-[600] max-sm:text-[0.9rem]">All rights reserved, Made by <span className="text-[white]" >Oussama Touhami</span></p>

                <a href="#home">
                    <DarkButton buttonText={"Go Home"} />
                </a>
            </motion.section>
        </>
    )
}
export default Footer;