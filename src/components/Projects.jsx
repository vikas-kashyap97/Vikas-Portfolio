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
    <section ref={project} id="project" className="mt-10 md:mt-20 w-full">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-green-500 pl-2">
        PROJECTS
      </h1>
      <div className="w-full md:w-4/5 mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Project 1 */}
        <div className="rounded-lg p-5 shadow-lg hover:scale-105 transition-transform">
          <h1 className="text-sm md:text-lg lg:text-xl mb-2 text-green-400">
            Hospital Management System (Frontend)
          </h1>
          <img
            src="images/Frontend dashboard.jpg"
            alt="project-img"
            className="h-40 sm:h-48 md:h-60 lg:h-72 xl:h-80 w-full rounded-lg"
          />
          <div className="flex gap-5 mt-5 justify-start">
            <Button className="px-6 lg:px-8 py-3 lg:py-4 rounded-md bg-gradient-to-r from-green-500 to-green-700 hover:scale-105">
              <a className="text-black" href="https://hospital-management-system-cwv.netlify.app/">
                Live
              </a>
            </Button>
            <Button className="px-6 lg:px-8 py-3 lg:py-4 rounded-md bg-gradient-to-r from-green-500 to-green-700 hover:scale-105">
              <a className="text-black" href="https://github.com/princeessjay/HMS_FRONTEND.git">
                Github
              </a>
            </Button>
          </div>
        </div>

        {/* Project 2 */}
        <div className="rounded-lg p-5 shadow-lg hover:scale-105 transition-transform">
          <h1 className="text-sm md:text-lg lg:text-xl text-green-400 mb-2">
            Hospital Management System (Admin)
          </h1>
          <img
            src="images/Admin dashboard.jpg"
            alt="project-img"
            className="h-40 sm:h-48 md:h-60 lg:h-72 xl:h-80 w-full rounded-lg"
          />
          <div className="flex gap-5 mt-5 justify-start">
            <Button className="px-6 lg:px-8 py-3 lg:py-4 rounded-md bg-gradient-to-r from-green-500 to-green-700 hover:scale-105">
              <a className="text-black" href="https://admin-dashboard-hms-cwv.netlify.app/login">
                Live
              </a>
            </Button>
            <Button className="px-6 lg:px-8 py-3 lg:py-4 rounded-md bg-gradient-to-r from-green-500 to-green-700 hover:scale-105">
              <a className="text-black" href="https://github.com/princeessjay/HMS_DASHBOARD.git">
                Github
              </a>
            </Button>
          </div>
        </div>

        {/* Project 3 */}
        <div className="rounded-lg p-5 shadow-lg hover:scale-105 transition-transform">
          <h1 className="text-sm md:text-lg lg:text-xl text-green-400 mb-2">
            ECHO VERSE Blog Application
          </h1>
          <img
            src="images/blog 1.JPG"
            alt="project-img"
            className="h-40 sm:h-48 md:h-60 lg:h-72 xl:h-80 w-full rounded-lg"
          />
          <div className="flex gap-5 mt-5 justify-start">
            <Button className="px-6 lg:px-8 py-3 lg:py-4 rounded-md bg-gradient-to-r from-green-500 to-green-700 hover:scale-105">
              <a className="text-black" href="https://blog-app-cwv.netlify.app/">
                Live
              </a>
            </Button>
            <Button className="px-6 lg:px-8 py-3 lg:py-4 rounded-md bg-gradient-to-r from-green-500 to-green-700 hover:scale-105">
              <a className="text-black" href="https://github.com/princeessjay/BLOG_FRONTEND.git">
                Github
              </a>
            </Button>
          </div>
        </div>

        {/* Project 4 */}
        <div className="rounded-lg p-5 shadow-lg hover:scale-105 transition-transform">
          <h1 className="text-sm md:text-lg lg:text-xl text-green-400 mb-2">
            Device Tracker
          </h1>
          <img
            src="images/Device tacker.jpeg"
            alt="project-img"
            className="h-40 sm:h-48 md:h-60 lg:h-72 xl:h-80 w-full rounded-lg"
          />
          <div className="flex gap-5 mt-5 justify-start">
            <Button className="px-6 lg:px-8 py-3 lg:py-4 rounded-md bg-gradient-to-r from-green-500 to-green-700 hover:scale-105">
              <a className="text-black" href="https://device-tracker-zkm4.onrender.com/">
                Live
              </a>
            </Button>
            <Button className="px-6 lg:px-8 py-3 lg:py-4 rounded-md bg-gradient-to-r from-green-500 to-green-700 hover:scale-105">
              <a className="text-black" href="https://github.com/vikas-kashyap97/Device-Tracker.git">
                Github
              </a>
            </Button>
          </div>
        </div>

        {/* Project 5 */}
        <div className="rounded-lg p-5 shadow-lg hover:scale-105 transition-transform">
          <h1 className="text-sm md:text-lg lg:text-xl text-green-400 mb-2">
            Jobly
          </h1>
          <img
            src="images/Jobly.JPG"
            alt="project-img"
            className="h-40 sm:h-48 md:h-60 lg:h-72 xl:h-80 w-full rounded-lg"
          />
          <div className="flex gap-5 mt-5 justify-start">
            <Button className="px-6 lg:px-8 py-3 lg:py-4 rounded-md bg-gradient-to-r from-green-500 to-green-700 hover:scale-105">
              <a className="text-black" href="https://jobly-cwv.netlify.app/">
                Live
              </a>
            </Button>
            <Button className="px-6 lg:px-8 py-3 lg:py-4 rounded-md bg-gradient-to-r from-green-500 to-green-700 hover:scale-105">
              <a className="text-black" href="https://github.com/princeessjay/Jobly-A-job-seeking-app.git">
                Github
              </a>
            </Button>
          </div>
        </div>

        {/* Project 6 */}
        <div className="rounded-lg p-5 shadow-lg hover:scale-105 transition-transform">
          <h1 className="text-sm md:text-lg lg:text-xl text-green-400 mb-2">
            CSV-Query
          </h1>
          <img
            src="images/csv.jpeg"
            alt="project-img"
            className="h-40 sm:h-48 md:h-60 lg:h-72 xl:h-80 w-full rounded-lg"
          />
          <div className="flex gap-5 mt-5 justify-start">
            <Button className="px-6 lg:px-8 py-3 lg:py-4 rounded-md bg-gradient-to-r from-green-500 to-green-700 hover:scale-105">
              <a className="text-black" href="https://csv-query.netlify.app/login">
                Live
              </a>
            </Button>
            <Button className="px-6 lg:px-8 py-3 lg:py-4 rounded-md bg-gradient-to-r from-green-500 to-green-700 hover:scale-105">
              <a className="text-black" href="https://github.com/vikas-kashyap97/CSV-Query.git">
                Github
              </a>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
