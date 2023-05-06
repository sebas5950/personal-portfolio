import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className='flex flex-col relative text-center md:text-left md:flex-row h-screen max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>
        <motion.img 
        initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{ opacity: 1, x:0}}
        viewport={{once:true}}
        src='https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/180978949_314228950059549_1005358403722529104_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fDrxhzz6GZ0AX9lrTen&_nc_oc=AQkpr1Tk0enNJmIbpBYH54d9HP6vHFQRG0xVZahjAWctKr0WLMgacp_rBCLRpCd25so&_nc_ht=scontent-lga3-2.xx&oh=00_AfCBzGeMiO3TZ5M6KtTHL802rc9r3hWIbYQBg210jguSow&oe=647BE48E'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />
        <div className='space-y-10 px-10 md:px-10'>
            <h4 className='text-4xl font-semibold '>Here is a <span className=''>little</span> little background</h4>
        </div>
    </div>
  )
}
