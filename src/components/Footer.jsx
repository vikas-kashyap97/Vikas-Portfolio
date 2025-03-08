import { IconButton, Button } from "@material-tailwind/react";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="bg-forth text-green w-full flex flex-col items-center mt-10 md:mt-20">
      <p className="sm:text-lg md:text-xl lg:text-3xl text-center px-5 md:px-12 text-green-500">
        “Let's collaborate synergistically, pooling our diverse talents and perspectives to achieve remarkable outcomes. Together, we can innovate, problem-solve, and propel each other towards success. With open communication, mutual respect, and a shared vision, let's embark on a journey of growth, learning, and achievement. Together, we are unstoppable.” 🙂😉
      </p>
      <div className="flex gap-5 m-5 items-center">
        <a href="https://www.linkedin.com/in/vikas-kashyap8542/">
          <IconButton className="bg-black">
            <FaLinkedin className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-green-500 hover:scale-110 bg-black transition-transform" />
          </IconButton>
        </a>

        <a href="https://github.com/vikas-kashyap97">
          <IconButton className="bg-black">
            <FaGithub className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-green-500 hover:scale-110 bg-black transition-transform" />
          </IconButton>
        </a>

        <a href="https://x.com/vikaskashyapro6">
          <IconButton className="bg-black">
            <FaXTwitter className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-green-500 hover:scale-110 bg-black transition-transform" />
          </IconButton>
        </a>
      </div>
      <p className="m-5 text-green-500 sm:text-lg md:text-xl lg:text-3xl">vikaskashyaprock@gmail.com</p>
      <Button
        onClick={scrollToTop}
        className="px-6 lg:px-8 py-3 lg:py-4 rounded-md bg-gradient-to-r from-green-500 to-green-700 text-black hover:scale-105 transition-transform my-5"
      >
        Move to Top
      </Button>
      
    </section>
  );
};

export default Footer;
