"use client"
import React, { useContext } from "react";
import SectionHeading from "./sectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/themeContext";


export default function Experience() {
  const { ref } = useSectionInView("Experience",0.75);
  const {theme} = useTheme()
  
  return (
    <section ref={ref} id="experience">
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="" >
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement visible={true}
            className="dark:!text-black"
            contentStyle={{
                background: "#f3f4f6",
                boxShadow:"none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.5rem 2rem",
            }}
            contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
            }}
            date={item.date}
            dateClassName="dark:text-white"
            icon={item.icon}
            iconStyle={{
                background: "white",
                fontSize: "1.5rem",
            }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!font-normal !mt-0">{item.description}</p>
              
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
