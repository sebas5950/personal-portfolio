import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ">
      <motion.div
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: .9,
      }}
       className="flex flex-row items-center">
        {/* Social Icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/alex-guanipatin/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/sebas5950"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://medium.com/@AlexS.Guanipatin"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/channel/UCnQgepgCU7u5lFbvU-c-85A"
          fgColor="grey"
          bgColor="transparent"
        />
        </motion.div>

        <motion.div
       initial={{
        x: 500,
        opacity: 0,
        scale: 0.5
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{duration: 1}}
        className="flex flex-row items-center text-gray-300 cursor-pointer" >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in Touch</p>
        </motion.div>
      
    </header>
  );
}
