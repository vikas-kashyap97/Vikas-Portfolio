import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaGit, FaNode  } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiExpress, SiGithubcopilot, SiNextdotjs  } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { DiMongodb } from "react-icons/di";
import { useEffect, useRef } from "react";
import Typed from 'typed.js';
import { animateBox } from "./animation";

const Hero = () => {
  const hero = useRef();
  const roleRef = useRef(); 

  useEffect(() => {
    animateBox(hero);

    const roleOptions = {
      strings: [
        "Front-End Developer", 
        "Gen AI Developer", 
        "a Coder", 
        "UI Designer", 
        "a Creative Thinker", 
        "a Problem Solver", 
        "an Enthusiast Learner", 
        "a Web Developer", 
        "a Tech Lover"
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
    };

    const roleTyped = new Typed(roleRef.current, roleOptions);

    return () => {
      roleTyped.destroy();
    };
  }, []);

  return (
    <section
      ref={hero}
      className="relative h-screen w-full flex flex-col-reverse lg:flex-row justify-evenly items-center p-5 lg:p-10"
    >
      {/* Left Section */}
      <div className="mt-10 md:mt-0 text-center lg:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-400 drop-shadow-lg">
          Hello,
          <br /> I am <span className="text-green-500">Vikas</span>
        </h1>
        
        <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-green-500 drop-shadow-lg">
          <span ref={roleRef} className="text-green-500"></span>
        </h1>

        <p className="mt-3 text-base md:text-lg lg:text-2xl xl:text-4xl text-green-400 max-w-xl mx-auto lg:mx-0">
          My focus lies in writing clean, maintainable code while continuously
          improving performance. Let's collaborate on bringing creative
          solutions to life and making the web a more interactive space.
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-5 mt-10">
          <h1 className="text-sm md:text-lg lg:text-3xl border-r-2 text-green-500 border-green-400 pr-2">
            Tech Stack
          </h1>
          <div className="flex items-center justify-center lg:justify-start flex-wrap gap-5 m-2">
            <FaHtml5 className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-green-400 hover:scale-125 transition-transform animate-pulse" />
            <FaCss3Alt className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-green-400 hover:scale-125 transition-transform animate-pulse" />
            <IoLogoJavascript className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-green-400 hover:scale-125 transition-transform animate-pulse" />
            <SiTailwindcss className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-green-400 hover:scale-125 transition-transform animate-pulse" />
            <DiMongodb className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-green-400 hover:scale-125 transition-transform animate-pulse" />
            <SiExpress className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-green-400 hover:scale-125 transition-transform animate-pulse" />
            <FaReact className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-green-400 hover:scale-125 transition-transform animate-pulse" />
            <FaNode className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-green-400 hover:scale-125 transition-transform animate-pulse" />
            <SiNextdotjs className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-green-400 hover:scale-125 transition-transform animate-pulse" />
            <MdOutlineDeveloperMode  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-green-400 hover:scale-125 transition-transform animate-pulse" />
            <FaGit className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-green-400 hover:scale-125 transition-transform animate-pulse" />
            <FaGithub className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-green-400 hover:scale-125 transition-transform animate-pulse" />
            <GiArtificialIntelligence className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-green-400 hover:scale-125 transition-transform animate-pulse" />
            <SiGithubcopilot className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-green-400 hover:scale-125 transition-transform animate-pulse" />
          </div>
        </div>
      </div>

      {/* Right Section - Main Image */}
      <div className="relative flex justify-center lg:justify-end">
        <img
          className="h-48 w-48 pb-12 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-[450px] lg:w-[450px] mt-10 lg:mt-0 rounded-full object-cover hover:scale-105 transition-transform drop-shadow-xl"
          src="images/3d-img.webp"
          alt="main-img"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute h-[230px] w-[230px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px] border-4 border-green-500 rounded-full animate-pulse" />
          <div className="absolute h-[150px] w-[150px] sm:h-[250px] sm:w-[250px] md:h-[350px] md:w-[350px] lg:h-[350px] lg:w-[350px] border-4 border-green-400 rounded-full animate-ping" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
