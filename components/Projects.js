import React, { useState } from "react";
import Object from "./Object";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const length = Object.length;

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if (!Array.isArray(Object) || Object.length <= 0) {
    return null;
  }

  return (
    <div className="h-screen relative flex justify-evenly items-center z-0 ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl justify-center">
        Projects
      </h3>
      {Object.map((project, index) => (
        <div
          key={index}
          className={
            index === current
              ? "opacity-[1] ease-in duration-1000"
              : "opacity-[0]"
          }
        >
          <div>
            <FaArrowCircleLeft
            onClick={prevSlide}
              className="absolute top-[50%] left-[30%] text-white/70 cursor-pointer select-none z-[2]"
              size={50}
            />
            {index === current && (
              <div className="relative flex justify-center p-4">
                <img src={project.img} alt="Project Image" />
                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                  <h4 className="text-4xl font-semibold text-center">
                    {project.title}
                  </h4>
                </div>
              </div>
            )}
            <FaArrowCircleRight
            onClick={nextSlide}
              className="absolute top-[50%] right-[30%] text-white/70 cursor-pointer select-none z-[2]"
              size={50}
            />
          </div>
        </div>
      ))}
      <div className="w-full absolute top-[30%] bg-[#B7D7E6]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}
