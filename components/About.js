import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className='flex flex-col relative text-center md:text-left md:flex-row h-screen max-w-7xl px-10 justify-evenly mx-auto'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>
        <motion.img />
    </div>
  )
}
