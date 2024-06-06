"use client"
import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function Button() {
  const {pending} = useFormStatus();
  return (
    <>
      <button
        className="group flex items-center justify-center gap-3 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 dark:!text-black dark:bg-white"
        type="submit"
      >
        {pending ? <div className="w-5 h-5 border-t-2 border-r-2 border-gray-100 rounded-full animate-spin" ></div> :
        <>
        Submit
        <FaPaperPlane
          className="text-xs opacity-70 transition-all 
            group-hover:translate-x-1 
            group-hover:-translate-y-1
            "
        />
        </>}
      </button>
    </>
  );
}
