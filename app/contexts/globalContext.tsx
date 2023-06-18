"use client";
import { createContext, useRef } from "react";

export type GlobalContextType = {
  children: React.ReactNode;
};

export const GlobalContext = createContext<GlobalContextType | null | {}>(null);

export const GlobalProvider: React.FC<GlobalContextType> = ({ children }) => {
  // const heroRef = useRef<null | HTMLDivElement>(null);
  // const aboutRef = useRef<null | HTMLDivElement>(null);
  // const skillsRef = useRef<null | HTMLDivElement>(null);

  // const handleHeroRef = () => {
  //   if (heroRef.current) heroRef.current.scrollIntoView({ behavior: "smooth" });
  // };
  // const handleAboutRef = () => {
  //   if (aboutRef.current)
  //     aboutRef.current.scrollIntoView({ behavior: "smooth" });
  // };
  // const handleSkillsRef = () => {
  //   if (skillsRef.current)
  //     skillsRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <GlobalContext.Provider
      value={
        {
          // heroRef,
          // aboutRef,
          // skillsRef,
          // handleHeroRef,
          // handleAboutRef,
          // handleSkillsRef,
        }
      }
    >
      {children}
    </GlobalContext.Provider>
  );
};
