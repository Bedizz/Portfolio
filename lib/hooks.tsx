import { useActiveSectionContext } from "@/context/activeSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type{ SectionName } from "./types";



export function useSectionInView(sectionName: SectionName, threshold = 0.9) {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold
  });
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 2000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick]);
  //buradan ref döndürüyoruz ki componentte kullanabilelim.
  return { ref };
}