import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Tomato from "@/public/Tomato.jpg";
import Aora from "@/public/Aora.png";
import Portfolio from "@/public/Portfolio.png";
import ThreadsClone from "@/public/Threads.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
//as const is used to make the array immutable

export const experiencesData = [
  {
    title: "University Graduation",
    location: "İzmir, Turkey",
    description:
      "I graduated from university with a degree in Business Administration as a honour student.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2022",
  },
  {
    title: "Integration and German Course",
    location: "Berlin, Germany",
    description:
      "I attended an integration course for 2 months and a German course for 4 months. I learned German at B1 level.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2022",
  },
  {
    title: "Marketing Pro",
    location: "Berlin, Germany",
    description:
      "I worked as Marketing Pro for 1 year.I was responsible for more than hundred social media agencies, managing their budgets and campaigns in META.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Graduated from WBS Coding Bootcamp",
    location: "Berlin, Germany",
    description:
      "I'm now a full-stack developer improving my skills and learning a new thing everyday. My stack includes React, Next.js, Redux, React Native, TypeScript, Tailwind, Node.js and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact ),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Tomato - Food Delivery App",
    description:
      "This project contains a clone of a simple food delivery application. Users can view restaurant menus, place food orders, and track the status of their orders.",
    tags: ["React", "MongoDB", "Node.js", "JWT Token","Stripe", "multer" ],
    imageUrl: Tomato,
    gitUrl:"https://github.com/Bedizz/FoodDeliveryApp"
  },
  {
    title: "Aora - Video Sharing App",
    description:
      "Providing video sharing feature with your own account.Features include filtering, sorting, and pagination",
    tags: ["React Native", "Expo", "Nativewind", "Appwrite"],
    imageUrl: Aora,
    gitUrl:"https://github.com/Bedizz/ReactNativeApp"
  },
  {
    title: "Portfolio App",
    description:
      "A public web app for sharing my projects and experiences. I built it with Next.js and Tailwind CSS",
    tags: ["React", "Next.js", "clsx","toast", "Tailwind", "Framer Motion"],
    imageUrl: Portfolio,
    gitUrl:"https://github.com/Bedizz/Portfolio"
  },
  {
    title: "Threads Clone- Social Media App",
    description:
      "It is a clone of the popular social media app Threads.",
    tags: ["Chakra UI", "Socket.io","React", "Recoil", "MongoDB","toast", "Express","Node.js",],
    imageUrl: ThreadsClone,
    gitUrl:"https://github.com/Bedizz/ThreadsClone"
  }

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Express",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "SQL",
  "NoSQL",
  "MongoDB",
  "Redis",
  "PostgreSQL",
  "Framer Motion",
  "Recoil",
  "Chakra UI",
  "Socket.io",
  "Toast",
  "Appwrite",
  "NativeWind",
  "TypeScript"
] as const;
