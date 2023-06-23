"use client";

import { useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "./globals.css";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Process from "./components/Process";
import GetInTouch from "./components/GetInTouch";
import ContactForm from "./components/ContactForm";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const aboutRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const processRef = useRef<HTMLElement | null>(null);
  const contactFormRef = useRef<HTMLElement | null>(null);
  // const messageAreaRef = useRef<any>(null);

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

  const scrollToContactForm = () => {
    if (contactFormRef?.current) {
      contactFormRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <html lang="en">
      <body>
        <Navbar
          scrollToAbout={scrollToAbout}
          scrollToSkills={scrollToSkills}
          scrollToProcess={scrollToProcess}
          scrollToContactForm={scrollToContactForm}
        />
        <Hero
          scrollToAbout={scrollToAbout}
          scrollToContactForm={scrollToContactForm}
        />
        <About ref={aboutRef} />
        <Skills ref={skillsRef} />
        <Process ref={processRef} />
        <GetInTouch />
        <ContactForm contactFormRef={contactFormRef} />
        <Footer />
      </body>
    </html>
  );
}
