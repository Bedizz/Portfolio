import React,  from "react";
import SectionHeading from "./sectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section 
    ref={ref} className="mb-10 max-w-[45rem] text-center leading-8  scroll-mt-28 sm:mb-10"
    // scroll-mt-28 is a custom class that I created to add margin-top to the section when it is scrolled into view
    initial={{opacity: 0 , y:100}}
    animate={{opacity:1, y:0}}
    transition={{delay:0.175}}
    id="about">
      <SectionHeading>About me</SectionHeading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
        voluptate? Esse itaque ratione, maxime at nobis neque ipsam omnis
        tenetur. Cumque nostrum magni voluptate! Sed aut ipsum consequatur esse
        eum.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quas
        tempore omnis vero officia praesentium eligendi, sapiente modi alias
        ipsam non commodi nam quos molestiae ullam distinctio architecto
        possimus maxime!
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aliquid nulla a quisquam delectus vero error pariatur nesciunt voluptatem, molestiae, temporibus sequi quis accusamus at voluptates saepe rem, quod accusantium.</p>
    </motion.section>
  );
}
