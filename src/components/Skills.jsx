import { skillsArr } from "./skillsData";
import { useEffect, useRef } from "react";
import { animateBox } from "./animation";
import { Progress } from "@material-tailwind/react";
import { 
  FaReact, FaHtml5, FaCss3Alt, FaGithub, FaGit, FaNode 
} from "react-icons/fa6";
import { AiFillApi } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiExpress, SiNextdotjs, SiGithubcopilot } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";

const Skills = () => {
  const skill = useRef();

  useEffect(() => {
    animateBox(skill.current);
  }, []);

  return (
    <>
      <section
        ref={skill}
        id="skills"
        className="mt-10 md:mt-32 lg:mt-60 w-full px-6 lg:px-20"
      >
        {/* Title Section */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-500 pl-4 md:pl-8 ">
          SKILLS
        </h1>
        <h2 className="text-sm md:text-lg lg:text-2xl mt-5 text-center text-green-500">
          Continuously honing my skills to deliver exceptional solutions.
        </h2>

        {/* Skills Grid */}
        <div className="w-full md:w-4/5 grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-12 mx-auto md:mt-5 lg:mt-10 p-2 md:p-5">
          {skillsArr.map((skill) => (
            <div
              key={skill.id}
              className="skill-card rounded-lg p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              {/* Flex container for icon and name */}
              <div className="inline-flex items-center gap-1">
                {/* Skill Name with Tech Icons */}
                {skill.skillName === "HTML" && <><FaHtml5 className="icon" /><span>{skill.skillName}</span></>}
                {skill.skillName === "CSS" && <><FaCss3Alt className="icon" /><span>{skill.skillName}</span></>}
                {skill.skillName === "JavaScript" && <><IoLogoJavascript className="icon" /><span>{skill.skillName}</span></>}
                {skill.skillName === "Tailwind CSS" && <><SiTailwindcss className="icon" /><span>{skill.skillName}</span></>}
                {skill.skillName === "React JS" && <><FaReact className="icon" /><span>{skill.skillName}</span></>}
                {skill.skillName === "MongoDB" && <><DiMongodb className="icon" /><span>{skill.skillName}</span></>}
                {skill.skillName === "Express.js" && <><SiExpress className="icon" /><span>{skill.skillName}</span></>}
                {skill.skillName === "Node.js" && <><FaNode className="icon" /><span>{skill.skillName}</span></>}
                {skill.skillName === "Next.js" && <><SiNextdotjs className="icon" /><span>{skill.skillName}</span></>}
                {skill.skillName === "Git" && <><FaGit className="icon" /><span>{skill.skillName}</span></>}
                {skill.skillName === "GitHub" && <><FaGithub className="icon" /><span>{skill.skillName}</span></>}
                {skill.skillName === "APIs" && <><AiFillApi className="icon" /><span>{skill.skillName}</span></>}
                {skill.skillName === "Developer Tools" && <><MdOutlineDeveloperMode className="icon" /><span>{skill.skillName}</span></>}
                {skill.skillName === "Artificial Intelligence" && <><GiArtificialIntelligence className="icon" /><span>{skill.skillName}</span></>}
                {skill.skillName === "GitHub Copilot" && <><SiGithubcopilot className="icon" /><span>{skill.skillName}</span></>}
              </div>

              {/* Percentage and Progress Bar hidden on small screens */}
              <h1 className="text-green-500 font-semibold text-sm md:text-lg hidden md:block">
                {skill.value}%
              </h1>

              <div className="relative mb-3 hidden md:block">
                <Progress
                  value={skill.value}
                  color="green"
                  className="rounded-full h-2 bg-opacity-40"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-green-200 opacity-30 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Style for the component */}
      <style jsx>{`
        .skill-card {
          transition: box-shadow 0.3s ease-in-out, transform 0.3s ease;
        }

        .skill-card:hover {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          transform: scale(1.05);
        }

        /* Floating Animation for Tech Icons */
        @keyframes floatEffect {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }

        .icon {
          text-green-400 text-lg sm:text-2xl hover:scale-110 transform transition-transform duration-500;
        }

        .animate-float {
          animation: floatEffect 2s infinite ease-in-out;
        }

        /* Pulse animation on hover for the tech icons */
        .skill-card:hover .icon {
          animation: pulseEffect 1s infinite;
        }

        @keyframes pulseEffect {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default Skills;
