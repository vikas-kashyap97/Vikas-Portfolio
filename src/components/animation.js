import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const animateBox = (refValue) => {
  const el = refValue.current;
  gsap.fromTo(
    el,
    { y: 200, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
      scrollTrigger: {
        trigger: el,
      },
    }
  );
}

export const appVariant = {
    hidden: {
      y: 200,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
      },
    },
  };
