import React from 'react'
import SectionHeading from './sectionHeading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
// import Image from 'next/image'



const fadeInUp = {
    initial: {
        opacity:0,
        y:100,
    }
    ,animate:(index:number)=> ({
        opacity:1,
        y:0,
        transition:{
            delay:0.05* index,
        }})
    

}

export default function Skills() {
    const { ref } = useSectionInView("Skills",0.75);
  return (
    <section id='skills' ref={ref} className="mb-20 max-w-[53rem] scroll-mt-28 text-center sm:mb-10">
        <SectionHeading>My Skills</SectionHeading>
        <ul  className='flex flex-wrap justify-center gap-2 text-lg text-gray-500'>
        {skillsData.map((skill,index) => (
                <motion.li key={index} className='bg-gray-100 border border-black/[0.1] rounded-xl px-5 py-3'
                variants={fadeInUp}
                initial='initial'
                whileInView='animate'
                viewport={{once:true}}
                custom={index}
                >{skill}</motion.li>
            ))}
        </ul>
    </section>
  )
}
