import { useEffect, useRef, useState } from "react";
import { animateBox } from "./animation";
import { Button } from "@material-tailwind/react";


const About = () => {
  const about = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    animateBox(about);
  }, []);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <>
      <section ref={about} id="about" className="w-full py-10 md:py-20">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-500 pl-4 md:pl-8 ">
          ABOUT ME
        </h1>

        <div className="h-auto w-full md:h-[500px] lg:h-[650px] flex flex-col md:flex-row justify-between items-center md:w-4/5 mx-auto p-5 mt-12">
          {/* Left Section */}
          <div
            className="w-full lg:w-1/2 h-[30vh] md:h-full relative flex justify-center items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`relative ${isHovered ? 'glitch-effect' : ''}`}>
              <img
                src="images/propic.jpeg"
                alt="my-img"
                className="h-[220px] sm:h-[270px] lg:h-[450px] rounded-xl ring-2 lg:ring-4 ring-green-700 transition-all duration-300 ease-out"
              />
              <div className="glitch-layers">
                <div className="glitch-layer"></div>
                <div className="glitch-layer"></div>
                <div className="glitch-layer"></div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 h-auto lg:h-full lg:ml-5 mt-6 md:mt-0">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-5 text-green-400 md:mt-14 lg:mt-0">
              My Bio
            </h1>
            <p className="mt-2 lg:mt-5 text-green-500 text-sm sm:text-base md:text-lg lg:text-2xl">
              As a passionate <a className="lg:text-3xl font-semibold">Frontend & AI Developer</a> with over one year of experience, I specialize in crafting <a className="lg:text-3xl font-semibold">intelligent, user-focused solutions.</a> From designing seamless <a className="lg:text-3xl font-semibold">frontend interfaces</a> to integrating <a className="lg:text-3xl font-semibold">AI-driven automation,</a> I thrive on transforming ideas into <a className="lg:text-3xl font-semibold">scalable digital experiences.</a> With expertise in <a className="lg:text-3xl font-semibold">React.js, Vite, and AI technologies,</a> I am dedicated to delivering <a className="lg:text-3xl font-semibold">high-performance, responsive,</a> and <a className="lg:text-3xl font-semibold">visually stunning applications.</a> My commitment to continuous learning and <a className="lg:text-3xl font-semibold">innovation</a> drives me to push the boundaries of technology. Let’s <a className="lg:text-3xl font-semibold">collaborate</a> and build the future of <a className="lg:text-3xl font-semibold">AI-powered digital experiences.</a>
            </p>
            <table className="w-full mt-5 lg:mt-10 text-sm md:text-base">
              <tbody>
                <tr>
                  <td className="p-1 lg:p-3">
                    <span className="text-green-400 lg:text-xl">Name</span> <br />
                    <span className="text-green-500 hover:text-green-500 transition-colors">Vikas Kashyap</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-1 lg:p-3">
                    <span className="text-green-400 lg:text-xl">Email</span>
                    <br />
                    <span className="text-green-500 hover:text-green-500 transition-colors">vikaskashyaprock@gmail.com</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-1 lg:p-3">
                    <span className="text-green-400 lg:text-xl">Phone</span>
                    <br />
                    <span className="text-green-500 hover:text-green-500 transition-colors">+91 8542050782</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <Button className="px-6 lg:px-8 py-3 lg:py-4 mt-5  rounded-md bg-gradient-to-r from-green-500 to-green-700 hover:scale-105 transition-transform">
              <a className="text-black"
                href="/images/Vikas Kashyap Frontend 1Yrs.pdf"
                download="/images/Vikas Kashyap Frontend 1Yrs.pdf"
              >
                DOWNLOAD RESUME
              </a>
            </Button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .glitch-effect {
          position: relative;
          display: inline-block;
        }
        .glitch-layers {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .glitch-effect:hover .glitch-layers {
          opacity: 1;
        }
        .glitch-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('images/propic.jpeg') no-repeat center center;
          background-size: cover;
        }
        .glitch-layer:nth-child(1) {
          left: 2px;
          animation: glitch1 2s infinite linear alternate-reverse;
          mix-blend-mode: multiply;
          filter: brightness(2) saturate(150%) hue-rotate(90deg);
        }
        .glitch-layer:nth-child(2) {
          left: -2px;
          animation: glitch2 3s infinite linear alternate-reverse;
          mix-blend-mode: screen;
          filter: brightness(2) saturate(150%) hue-rotate(-90deg);
        }
        .glitch-layer:nth-child(3) {
          left: 0;
          animation: glitch3 2.5s infinite linear alternate-reverse;
          mix-blend-mode: overlay;
          filter: brightness(2) saturate(150%) hue-rotate(180deg);
        }
        @keyframes glitch1 {
          0% { clip-path: inset(20% 0 60% 0); }
          100% { clip-path: inset(80% 0 0% 0); }
        }
        @keyframes glitch2 {
          0% { clip-path: inset(0 20% 0 60%); }
          100% { clip-path: inset(0 80% 0 0); }
        }
        @keyframes glitch3 {
          0% { clip-path: inset(60% 0 20% 0); }
          100% { clip-path: inset(0 0 80% 0); }
        }
      `}</style>
    </>
  );
};

export default About;
