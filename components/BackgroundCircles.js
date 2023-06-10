import React from 'react'
import { motion } from 'framer-motion'

export default function BackgroundCircles() {
  return (
    <motion.div initial={{
        opacity: 0
    }}
    animate={{
        scale: [1,2,2,3,1],
        opacity: [0.1,0.2,0.4,0.8,0.1,1.0],
        borderRadius: ["20%","20%","50%","80%","20%"],
    }}
    transition={{
        duration: 2.5,
    }}
    className='relative flex justify-center items-center'>
        <div className='absolute border border-[#9b0fc2] rounded-full h-[250px] w-[250px] mt-52 animate-ping'/>
        <div className='absolute border border-[#6b4d74] rounded-full h-[300px] w-[300px] mt-52'/>
        <div className='absolute border border-[#6b4d74] rounded-full h-[500px] w-[500px] mt-52'/>
        <div className='rounded-full border border-[#9b0fc2] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse'/>
        <div className='absolute border border-[#6b4d74] rounded-full h-[800px] w-[800px] mt-52'/>
    </motion.div>
  )
}
