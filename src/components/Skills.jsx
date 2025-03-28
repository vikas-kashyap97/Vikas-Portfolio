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
      <section ref={skill} id="skills" className="mt-10 md:mt-32 lg:mt-60 w-full px-6 lg:px-20">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-500 text-center">
          SKILLS
        </h1>
        <h2 className="text-sm md:text-lg lg:text-2xl mt-5 text-center text-green-500">
          Continuously honing my skills to deliver exceptional solutions.
        </h2>

        {/* Skills List */}
        <div className="w-full md:w-4/5 mx-auto md:mt-5 lg:mt-10 p-2 md:p-5">
          {skillsArr.map((skill) => (
            <div key={skill.id} className="flex items-center gap-3 mb-4 hover:scale-105 transition-transform duration-300">
              {/* Skill Icon */}
              {skill.skillName === "HTML" && <FaHtml5 className="icon text-green-500" />}
              {skill.skillName === "CSS" && <FaCss3Alt className="icon text-green-500" />}
              {skill.skillName === "JavaScript" && <IoLogoJavascript className="icon text-green-500" />}
              {skill.skillName === "Tailwind CSS" && <SiTailwindcss className="icon text-green-500" />}
              {skill.skillName === "React JS" && <FaReact className="icon text-green-500" />}
              {skill.skillName === "MongoDB" && <DiMongodb className="icon text-green-500" />}
              {skill.skillName === "Express.js" && <SiExpress className="icon text-green-500" />}
              {skill.skillName === "Node.js" && <FaNode className="icon text-green-500" />}
              {skill.skillName === "Next.js" && <SiNextdotjs className="icon text-green-500" />}
              {skill.skillName === "Git" && <FaGit className="icon text-green-500" />}
              {skill.skillName === "GitHub" && <FaGithub className="icon text-green-500" />}
              {skill.skillName === "APIs" && <AiFillApi className="icon text-green-500" />}
              {skill.skillName === "Developer Tools" && <MdOutlineDeveloperMode className="icon text-green-500" />}
              {skill.skillName === "Artificial Intelligence" && <GiArtificialIntelligence className="icon text-green-500" />}
              {skill.skillName === "GitHub Copilot" && <SiGithubcopilot className="icon text-green-500" />}

              {/* Skill Name */}
              <span className="text-green-500 font-semibold text-lg">{skill.skillName}</span>

              {/* Progress Bar */}
              <div className="w-full max-w-[200px]">
                <Progress value={skill.value} color="green" className="rounded-full h-2 bg-opacity-40" />
              </div>
              <span className="text-green-500 font-semibold">{skill.value}%</span>
            </div>
          ))}
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        .icon {
          font-size: 2rem;
          transition: transform 0.3s ease-in-out;
        }
        .icon:hover {
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
};

export default Skills;
