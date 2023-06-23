"use client";

import { forwardRef } from "react";

import ArrowDown from "./ArrowDown";
import Button from "./Button";

type Props = {
  scrollToAbout: () => void;
  scrollToContactForm: () => void;
};

const Hero = forwardRef<HTMLElement, Props>((props, ref) => {
  Hero.displayName = "Hero";

  const { scrollToAbout, scrollToContactForm } = props;

  return (
    <div className="relative h-full w-screen">
      <div className="absolute left-0 top-0 h-[calc(100%+130px)] w-full -translate-y-[130px] bg-black opacity-30"></div>
      <video
        poster="img/poster.png"
        className="pointer-events-none absolute bottom-0 left-0 z-[-1] h-[calc(100%+130px)] w-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="videos/bg-video.mp4" type="video/mp4" />
      </video>
      <div className="container flex h-[calc(100vh-80px)] flex-col justify-center">
        <h1
          className="mb-3 text-[46px] leading-[1] text-white lg:text-[90px]"
          data-aos="fade-right"
        >
          I build interactive <br />
          web applications
        </h1>
        <p
          className="mt-4 text-sm text-gray-400 md:text-base"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Let’s create scalable web applications together and give <br /> your
          concept the wings it deserves.
        </p>
        <div
          className="mt-4 flex  gap-3 text-xs"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <Button
            text="GET IN TOUCH"
            isHover={false}
            changeBg
            fontLg
            onClick={scrollToContactForm}
          />
          <Button
            text="LEARN MORE"
            isHover={false}
            changeBg={false}
            fontLg
            onClick={scrollToAbout}
          />
        </div>
        <ArrowDown onClick={scrollToAbout} />
      </div>
    </div>
  );
});

export default Hero;
