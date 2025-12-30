import { useDispatch } from "react-redux"
import { closeWindow } from "../../store/windowSlice";
import { motion } from "framer-motion"

function Window({ children }) {
    const dispatch = useDispatch();

    const handleCloseWindow = () => dispatch(closeWindow());

    const variants = {
        initial: {
            opacity: 0,
            y: 150
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 200,
            }
        }
    }

    return (
        <>
            <motion.div variants={variants} initial={"initial"} animate={"animate"} className="border-2 border-white min-w-[600px] min-h-[450px] max-md:min-w-[300px] rounded-[15px] relative ">
                <div className="flex border-b-2 border-white px-3 py-3 gap-[5px]">
                    {[...Array(3)].map((_, index) => {
                        if (index == 1) {
                            return (
                                <div onClick={() => handleCloseWindow()} key={index} className="w-[15px] h-[15px] rounded-full bg-[red] cursor-pointer" />
                            )
                        }
                        else if (index == 2) {
                            return (
                                [...Array(2)].map((_, index) => {
                                    return (
                                        <div key={index} className="w-[15px] h-[15px] rounded-full bg-white" />
                                    )
                                })
                            )
                        }
                    })}
                </div>
                {children}
            </motion.div>
        </>
    )
}
export default Window;