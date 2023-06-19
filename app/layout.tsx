"use client";

import { RefObject, useEffect, useRef } from "react";
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
import GetInTouch from "./components/GetInTouch";
import ContactForm from "./components/ContactForm";

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
  const contactFormRef = useRef<HTMLElement | null>(null);
  const messageAreaRef = useRef<any>(null);

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

  const focusOnMessageArea = () => {
    if (messageAreaRef?.current) {
      messageAreaRef?.current.focus();
    }
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
            scrollToContactForm={scrollToContactForm}
          />
          <Hero
            scrollToAbout={scrollToAbout}
            scrollToContactForm={scrollToContactForm}
          />
          <About ref={aboutRef} />
          <Skills ref={skillsRef} />
          <Process ref={processRef} />
          <GetInTouch focusOnMessageArea={focusOnMessageArea} />
          <ContactForm
            contactFormRef={contactFormRef}
            messageAreaRef={messageAreaRef}
          />
          <Footer />
        </body>
      </html>
    </GlobalProvider>
  );
}
