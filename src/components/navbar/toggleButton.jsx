import "./navbar.scss";
import { motion } from "framer-motion";

export default function ToggleButton({ setOpen,iconColor }) {
  return (
    <>
      <button onClick={() => setOpen((prev) => !prev)} className='toggleButton' >
        <svg width="23" height="23" viewBox="0 0 23 23">
          <motion.path variants={{
            closed: { d: "M 1 2.5 L 22 2.5" },
            opened: { d: "M 2 16.5 L 17 2.5" },
          }} strokeWidth="3" stroke={iconColor} strokeLinecap="round" />
          <motion.path d="M 1 9.5 L 22 9.5" variants={{
            closed: { opacity: 1 },
            opened: { opacity: 0},
          }}
           strokeWidth="3" stroke={iconColor} strokeLinecap="round" />
          <motion.path variants={{
            closed: { d: "M 1 16.5 L 22 16.5" },
            opened: { d: "M 2 2.5 L 17 16.5" },
          }}
           strokeWidth="3" stroke={iconColor} strokeLinecap="round" />
        </svg>
      </button>
    </>
  )
}
