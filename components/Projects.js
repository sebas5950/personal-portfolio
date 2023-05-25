import React, {useState} from "react";
import Object from "./Object";
import Image from "next/image";


export default function Projects() {

  const [current, setCurrent] = useState(0)
  const length = Object.length
  
  function nextSlide(){
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  function prevSlide(){
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if(!Array.isArray(Object) ||  Object.length <= 0) {
    return null
  }

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects I am back at it no giving up
      </h3>
      <div className="relative flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {Object.map((project, index) => (
          <div
            key={index}
            className="w-screen flex flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <img src={project.img} alt="Project Image" />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                {project.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#B7D7E6]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}
