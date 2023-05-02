import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Alex",
      "Guy-who-loves-Coffee.js",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="realtive rounded-full h-32 w-32 mx-auto object-cover"
        src="https://media.licdn.com/dms/image/D4E35AQHncV0dIt-iDw/profile-framedphoto-shrink_400_400/0/1673453980500?e=1683666000&v=beta&t=94uKmwyVV8BvbTiJDyqsNJCSxtEPRoggXqNp3nNjpAU"
        alt="Profile-Picture"
      />
      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <h1>
            <button className="heroButton">About</button>
            <button className="heroButton">Experience</button>
            <button className="heroButton">Skills</button>
            <button className="heroButton">Projects</button>
        </h1>
      </div>
    </div>
  );
}
