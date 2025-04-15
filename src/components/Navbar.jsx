import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { Drawer, IconButton } from "@material-tailwind/react";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="h-16 w-full flex items-center justify-between px-5 bg-forth sticky top-0 z-[2000]">
        <Link to={"/"}>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
            Vikas.dev
          </h1>
        </Link>
        <div className="hidden lg:flex flex-col md:flex-row gap-5 pl-5 md:pl-0 md:gap-10 text-md md:text-xl">
          <a href="#about" className="hover:text-green-400 sm:text-lg md:text-xl lg:text-3xl text-green-500 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-green-400 sm:text-lg md:text-xl lg:text-3xl text-green-500 transition-colors">
            Skills
          </a>
          <a href="#project" className="hover:text-green-400 sm:text-lg md:text-xl lg:text-3xl text-green-500 transition-colors">
            Project
          </a>
          <a href="#experience" className="hover:text-green-400 sm:text-lg md:text-xl lg:text-3xl text-green-500 transition-colors">
            Experience
          </a>
          <a href="#blogs" className="hover:text-green-400 sm:text-lg md:text-xl lg:text-3xl text-green-500 transition-colors">
            Blogs
          </a>
          <a href="#contact" className="hover:text-green-400 sm:text-lg md:text-xl lg:text-3xl text-green-500 transition-colors">
            Contact
          </a>
        </div>

        <Drawer open={open} onClose={() => setOpen(false)} className="bg-forth">
          <div className="mb-2 flex items-center justify-end p-4">
            <IconButton
              variant="text"
              color="green"
              onClick={() => setOpen(false)}
            >
              <RxCross2 size={26} />
            </IconButton>
          </div>

          <div className="flex flex-col" onClick={() => setOpen(false)}>
            <a
              href="#about"
              className="px-5 py-3 text-lg transition-colors text-green-400 hover:bg-green-500 hover:text-black border-b border-green-800"
            >
              About
            </a>
            <a
              href="#skills"
              className="px-5 py-3 text-lg transition-colors text-green-400 hover:bg-green-500 hover:text-black border-b border-green-800" 
            >
              Skills
            </a>
            <a
              href="#project"
              className="px-5 py-3 text-lg transition-colors text-green-400 hover:bg-green-500 hover:text-black border-b border-green-800"
            >
              Project
            </a>
            <a
              href="#experience"
              className="px-5 py-3 text-lg transition-colors text-green-400 hover:bg-green-500 hover:text-black border-b border-green-800"
            >
              Experience
            </a>
            <a
              href="#blogs"
              className="px-5 py-3 text-lg transition-colors text-green-400 hover:bg-green-500 hover:text-black border-b border-green-800"
            >
              Blogs
            </a>
            <a
              href="#contact"
              className="px-5 py-3 text-lg transition-colors text-green-400 hover:bg-green-500 hover:text-black border-b border-green-800"
            >
              Contact
            </a>
          </div>
        </Drawer>

        <IconButton  variant="text"  className="lg:hidden text-green-400">

          <FaBars
            size={26}
           
            onClick={() => setOpen(!open)}
            />
            </IconButton>
      </nav>
    </>
  );
};

export default Navbar;
