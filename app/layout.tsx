"use client";

import { useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "./globals.css";
import { GlobalProvider } from "./contexts/globalContext";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Process from "./components/Process";
import Contact from "./components/Contact";

// export const metadata = {
//   title: "Adam Personal Website",
//   description: "Personal Website made with the newest technologies",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const aboutRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const processRef = useRef<HTMLElement | null>(null);

  const scrollToAbout = () => {
    if (aboutRef?.current)
      aboutRef?.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSkills = () => {
    if (skillsRef?.current)
      skillsRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProcess = () => {
    if (processRef?.current)
      processRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <GlobalProvider>
      <html lang="en">
        <body>
          <Navbar
            scrollToAbout={scrollToAbout}
            scrollToSkills={scrollToSkills}
            scrollToProcess={scrollToProcess}
          />
          <Hero scrollToAbout={scrollToAbout} />
          <About ref={aboutRef} />
          <Skills ref={skillsRef} />
          <Process ref={processRef} />
          <Contact />
          <Footer />
        </body>
      </html>
    </GlobalProvider>
  );
}
