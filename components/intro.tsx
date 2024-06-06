import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/activeSectionContext";


export default function Intro() {
  const {setActiveSection,setTimeOfLastClick} = useActiveSectionContext()
  const { ref } = useSectionInView("Home");
  // const { setActiveSection,timeOfLastClick } = useActiveSectionContext();
  // const { ref , inView } = useInView({
  //   threshold:0.9,
  // });
  // useEffect(() => {
  //   if(inView && Date.now()-timeOfLastClick>1000) {
  //     setActiveSection("Home")
  //   }},[inView,setActiveSection,timeOfLastClick])
  
  return (
    <section ref={ref} id="home" className="mb-20 max-w-[45rem] text-center leading-8 sm:mb-8 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <motion.div className="relative"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}>
          <Image
            src={"/ProfilePicture1.jpg"}
            alt="Bediz Türkyılmaz"
            width="192"
            height="192"
            quality="95"
            priority={true}
            
            className="h-24 w-24 rounded-full  shadow-2xl object-cover hover:scale-125 "
          />
        </motion.div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* here !leading is for overwriting it on text-2xl  */}
        Hi, I&apos;m <span className="font-bold">Bediz Türkyılmaz</span>, a{" "}
        <span className="font-bold">Full Stack Developer.</span> I build modern
        web applications with{" "}
        <span className="italic">
          JavaScript 🚀, React.js ⚛️, Node.js 🛠️, MongoDB 🍃, PostgreSQL 🐘
        </span>
        .
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-5 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:text-gray-900"
          onClick={() => {
            setActiveSection("Contact")
            setTimeOfLastClick(Date.now())
          }
          }
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 " />
        </Link>
        <a
          href="CV.pdf"
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 dark:text-white dark:bg-black"
          download
        >
          Download My CV
          <HiDownload  />
        </a>
        <a
          href="https://www.linkedin.com/in/bediz-t%C3%BCrkyilmaz/"
          target="_blank"
          className="bg-white p-4 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] outline-none hover:scale-[1.15]  active:scale-[1.15]"
        >
          <BsLinkedin className="dark:text-black" />
        </a>
        <a
          href="https://github.com/Bedizz"
          target="_blank"
          className="bg-white p-4 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] outline-none hover:scale-[1.15] active:scale-[1.15]"
        >
          <BsGithub className="dark:text-black" />
        </a>
      </motion.div>
    </section>
  );
}
