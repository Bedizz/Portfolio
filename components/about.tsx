import React  from "react";
import SectionHeading from "./sectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


export default function About() {
  const { ref } = useSectionInView("About",1);
  return (
    <motion.section 
    ref={ref} className="mb-10 max-w-[45rem] text-center leading-8  scroll-mt-28 sm:mb-10"
    // scroll-mt-28 is a custom class that I created to add margin-top to the section when it is scrolled into view
    initial={{opacity: 0 , y:100}}
    animate={{opacity:1, y:0}}
    transition={{delay:0.175}}
    id="about">
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Business Administration</span>,I worked as a  <span className="font-medium">Marketing Pro</span> for 1 year. After 1 year, I decided to pursue my
        passion for programming although my company wanted to extend my contract. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        creating something special aspect. I <span className="underline">love</span> and <span className="underline">enjoy</span> observing the evolution and development process of a code while writing it. My core stack
        is{" "}
        <span className="font-medium">
          React, Express, Node.js, and MongoDB
        </span>
        . I am also familiar with <span className="font-medium"> Redux, Redis, TypeScript and  Next.js.</span> I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
    </motion.section>
  );
}
