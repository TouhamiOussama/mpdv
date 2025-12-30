import React from 'react'
import { navLinks } from '../../websiteContent'
import { motion } from 'framer-motion'


export default function Links({linksColor}) {
  return (
    <>
        <motion.div
                className="links"
        >
                {navLinks.map((link,index) => {
                    return(
                        <motion.a  className={`link ${linksColor}`} href={link.linkPath}>{link.linkName}</motion.a>
                    )
                })}
        </motion.div>
    </>
  )
}
