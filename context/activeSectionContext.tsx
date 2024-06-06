"use client"
import React, { useState,createContext, useContext } from 'react'
import type { SectionName } from '@/lib/types'
//its better to define the types in a separate file and import them here



type ActiveSectionContextProviderProps = {
    children: React.ReactNode
}
type ActiveSectionContextType = {
    activeSection: SectionName
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>> 
    timeOfLastClick: number
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const  ActiveSectionContext = createContext<ActiveSectionContextType | null >(null)

export default function ActiveSectionContextProvider({children}: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home")
    const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0) //we need to keep track of the this to disable the observer when the user clicks on a link
  return (
    <ActiveSectionContext.Provider value={{
        activeSection, 
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick
        }}>
        {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext(){
    const context = useContext(ActiveSectionContext)
    if(context===null){
        throw new Error('useActiveSection must be used within a ActiveSectionContextProvider')
    }
    return context
}
