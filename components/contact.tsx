import React from "react";
import SectionHeading from "./sectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

import  Button  from "../components/button";

export default function Contact() {
    const { ref } = useSectionInView("Contact",0.75);
    

  return (
    <motion.section ref={ref} id="contact" className=" text-center mb-20 sm:mb-28 w-[min(100%,38rem)]" initial={{opacity: 0}}
    whileInView={{opacity:1}} transition={{duration:1}} viewport={{once:true}}>
      {/* buradaki weight değeri ekran boyutuna göre değişiyor. 38rem küçükse 100% oluyor. büyükse 38rem oluyor. */}
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 dark:text-gray-300">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:turkyilmaz.bediz@gmail.com">
          turkyilmaz.bediz@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form className="mt-10 flex flex-col" action={async(formData) => { const {data,error} = await sendEmail(formData);
    if(error){
      alert("An error occured. Please try again later.")
    } else {
    alert("Your message has been sent. I will get back to you as soon as possible.")}
    }} >
        {/* only works in next.js */}
        <input
          className="h-14 px-4 rounded-lg border-black"
          type="email"
          placeholder="Your email"
          name="email"
          required
        />
        <textarea
        placeholder="Your message"
          className="h-52 my-3 rounded-lg border-black p-4"
          name="textArea"
          id="textArea"
          required
          maxLength={500}
        ></textarea>
        <Button />
      </form>
    </motion.section>
  );
}