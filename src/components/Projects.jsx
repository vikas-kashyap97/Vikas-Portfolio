import { useEffect, useRef } from "react";
import { animateBox } from "./animation";
import { Button } from "@material-tailwind/react";

export let res = null;

const Projects = () => {
  const project = useRef();

  useEffect(() => {
    animateBox(project);
  }, []);

  return (
    <section ref={project} id="project" className="mt-10 md:mt-20 w-full px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-green-500 pl-2">
          PROJECTS
        </h1>

        <div className="w-full mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Hospital Management System (Frontend)",
              img: "images/Frontend dashboard.jpg",
              live: "https://hospital-management-system-cwv.netlify.app/",
              github: "https://github.com/princeessjay/HMS_FRONTEND.git",
            },
            {
              title: "Hospital Management System (Admin)",
              img: "images/Admin dashboard.jpg",
              live: "https://admin-dashboard-hms-cwv.netlify.app/login",
              github: "https://github.com/princeessjay/HMS_DASHBOARD.git",
            },
            {
              title: "ECHO VERSE Blog Application",
              img: "images/blog 1.JPG",
              live: "https://blog-app-cwv.netlify.app/",
              github: "https://github.com/princeessjay/BLOG_FRONTEND.git",
            },
            {
              title: "Device Tracker",
              img: "images/Device tacker.jpeg",
              live: "https://device-tracker-zkm4.onrender.com/",
              github: "https://github.com/vikas-kashyap97/Device-Tracker.git",
            },
            {
              title: "Jobly",
              img: "images/Jobly.JPG",
              live: "https://jobly-cwv.netlify.app/",
              github: "https://github.com/princeessjay/Jobly-A-job-seeking-app.git",
            },
            {
              title: "CSV-Query",
              img: "images/csv.jpeg",
              live: "https://csv-query.netlify.app/login",
              github: "https://github.com/vikas-kashyap97/CSV-Query.git",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="rounded-lg p-5 border-[1px] border-green-400 border-solid shadow-lg hover:scale-105 transition-transform flex flex-col justify-between bg-transparent dark:bg-gray-900"
            >
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-green-400 mb-2">
                {project.title}
              </h1>
              <img
                src={project.img}
                alt="project-img"
                className="h-40 sm:h-48 md:h-60 lg:h-72 xl:h-80 w-full object-cover rounded-lg"
              />
              <div className="flex flex-wrap gap-4 mt-5">
                <Button className="px-6 py-2 lg:px-8 lg:py-3 rounded-md bg-gradient-to-r from-green-500 to-green-700 hover:scale-105">
                  <a className="text-black" href={project.live} target="_blank" rel="noopener noreferrer">
                    Live
                  </a>
                </Button>
                <Button className="px-6 py-2 lg:px-8 lg:py-3 rounded-md bg-gradient-to-r from-green-500 to-green-700 hover:scale-105">
                  <a className="text-black" href={project.github} target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
