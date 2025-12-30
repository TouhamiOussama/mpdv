import { useEffect, useRef, useState } from "react";
import Links from "./links";
import "./navbar.scss";
import ToggleButton from "./toggleButton";
import { motion } from "framer-motion";

function Navbar({ scrollProgress,isDark }) {
    const [open, setOpen] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    const handleEscPress = (e) => {
        if (e.key === "Escape") {
            setOpen(false);
        }
    }




    let variants = {
        opened: {
            clipPath: "circle(200% at 100% 0)",
            transition: {
                delay: 0.01,
                type: "spring",
                stiffness: 20,
            }
        },
        closed: {
            clipPath: "circle(12% at 100% 0)",
            transition: {
                delay: 0.01,
                type: "spring",
                stiffness: 300,
                damping: 40,
            }
        }
    }

    return (
        <div ref={navRef} onKeyDown={handleEscPress} className="nav flex justify-between items-center p-2 ">
            <h1 className="text-[1.5rem] font-[600] " >OUSSAMA TOUHAMI</h1>
            <motion.div
                className={`sidebar ${isDark ? "bg-white" : "bg-black"} shadow-2xl`}
                drag="x"
                dragConstraints={{ left: -0, right: 0 }}
                onDragEnd={(event, info) => {
                    if (info.offset.x < -50) {
                        setOpen(true);
                    } else if (info.offset.x > 50) {
                        setOpen(false);
                    }
                }}
                variants={variants}
                animate={open ? "opened" : "closed"}
            >
                <ToggleButton iconColor={isDark ? "#000" : "#fff"} setOpen={setOpen} />
                <motion.div className="bg">
                    <Links linksColor={isDark ? "text-[#000]" : "text-[#fff]"} />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Navbar;
