"use client"
import React, { useRef } from "react";
import SectionHeading from "./sectionHeading";
import { projectsData } from "../lib/data";
import Image from "next/image";
import { motion,useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  // burada 0.5 kısmı ne kadar scroll edildiğinde çalışacağını belirler. 0.5 demek %50 scroll edildiğinde çalışır demek. ve bunu dinamik yaptığımız için her componentte farklı bir değer verebiliriz. bu değeri useSectionInView fonksiyonuna parametre olarak veririz. orayı güncelleyerek istediğimiz değeri verebiliriz.
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-20 sm:mb-10">
      {/* burada ref kullanmazsak hangi satırı yakalacağını bilmeyecek. o yüzden refi kullanmak burada çok önemli. */}
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((item, index) => (
          <React.Fragment key={index}>
            <Project key={index} {...item} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset:["0 1","1.33 1"]
  });
  const scaleProgress = useTransform(scrollYProgress,[0,1],[0.8,1])
  const scaleOpacity = useTransform(scrollYProgress,[0,1],[0.6,1])
  return (
    <motion.div ref={ref} style={{
      scale:scaleProgress,
      opacity:scaleOpacity
    }} className="group mb-3 sm:mb-8 last:mb-0 ">
      <section   className=" bg-gray-100 max-w-[42rem] border rounded-lg border-black/5 overflow-hidden relative sm:pr-8 sm:h-[20rem]  sm:group-even:pl-8 ">
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
        <h3 className="text-2xl">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>

        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto ">
          {tags.map((tag, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
        <Image
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:-right-[initial] group-even:-left-40 transition group-hover:scale-[1.04] 
          group-hover:-translate-x-3 
          group-hover:-translate-y-3 
          group-hover:-rotate-2
          group-even:group-hover:translate-x-3 
          group-even:group-hover:translate-y-3 
          group-even:group-hover:rotate-2 " 
          src={imageUrl}
          alt={title}
          quality={95}
          
        />
      </div>
    </section>
    </motion.div>
  );
}
