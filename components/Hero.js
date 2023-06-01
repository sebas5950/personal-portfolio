import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Img from "../assets/picture.jpg"
import Link from "next/link";
export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Software Engineer",
      "Guy-who-loves-Coffee.js",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2500,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="realtive rounded-full h-32 w-32 mx-auto object-cover"
        src={Img}
        alt="Profile-Picture"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
        <h1 className="text-5xl lg:text-4xl font-semibold px-10">
          <span className="mr-3">My name is Alex and I am a {text}</span>
          <Cursor cursorColor="#9d0dc4" />
        </h1>
        <h1>
            <Link href="#about">
            <button className="heroButton">About</button>
            </Link>
            <Link href="#experience">
            <button className="heroButton">Experience</button>
            </Link>
            <Link href="#skills">
            <button className="heroButton">Skills</button>
            </Link>
            <Link href="#projects">
            <button className="heroButton">Projects</button>
            </Link>
        </h1>
      </div>
    </div>
  );
}
