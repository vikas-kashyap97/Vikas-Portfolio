import Navbar from "./Navbar";
import Hero from "./Hero";
import { lazy } from "react";

const About = lazy(() => import("./About"));
const Skills = lazy(() => import("./Skills"));
const Projects = lazy(() => import("./Projects"));
const Contact = lazy(() => import("./Contact"));
const Footer = lazy(() => import("./Footer"));
const Exeperince = lazy(() => import("./Exeperince"));
const Blogs = lazy(() => import("./Blogs"));

const RootLayout = () => {
  return (
    <section className="w-full max-w-screen xl:w-11/12 mx-auto relative">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Exeperince />
    <Blogs />
    <Projects />
    <Contact />
    <Footer />
  </section>
  )
}

export default RootLayout;