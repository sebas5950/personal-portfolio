import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative text-center md:text-left md:flex-row h-screen max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className=" flex-shrink-0"
      >
        <Image
          src="/picture.jpg"
          width="500"
          height="600"
          className="rounded-full -mb-20 md:mb-0 flex-shrink-0"
        />
      </motion.div>
      <div className="space-y-10 px-10 md:px-10">
        <h4 className="text-4xl font-semibold ">
          Here is a{" "}
          <span className="underline decoration-[#9d0dc4]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base text-justify">
          Full-Stac Software Engineer with experience in JavaScript, ReactJS,
          Python, and Ruby on Rails, I am passionate about the constantly
          evolving tech industry. I enjoy the challenge of learning emerging
          trends and the problem-solving aspect of creating solutions. With a
          nine-year background in management in federal and retail spaces, I
          have developed strong leadership and teamwork skills, which have been
          instrumental in achieving set goals and increasing productivity.
        </p>
      </div>
    </motion.div>
  );
}
