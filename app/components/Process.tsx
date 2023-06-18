"use client";
import { useEffect, useState, forwardRef } from "react";
import { Fade } from "react-awesome-reveal";

import { tabs } from "../data/data";

const Process = forwardRef<HTMLElement | null>((props, ref) => {
  Process.displayName = "Process";
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === 5 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref}>
      <div className="container flex flex-col justify-between gap-7 pb-20 pt-12 lg:flex-row lg:pt-28">
        <div
          className="flex flex-[5] flex-col justify-evenly gap-8"
          data-aos="fade-left"
        >
          <h3 className="max-w-3xl text-[46px] leading-[1.3] tracking-wide text-white">
            <span>Hire an experienced engineer for your project</span>
          </h3>
          <p className="max-w-lg text-base leading-[1.5] text-gray-400 lg:text-[20px]">
            I aim high while paying attention to the smallest details. I work in
            precisely planned process to scope, design, develop and launch a
            scalable software that will help you conquer the markets.
          </p>
          <ul className="flex flex-col gap-5">
            <li className="flex items-center gap-4 text-gray-400">
              <span className="h-[8px] w-[8px] rounded-full bg-blue-600" />
              Transparent, iterative process
            </li>
            <li className="flex items-center gap-4 text-gray-400">
              <span className="h-[8px] w-[8px] rounded-full bg-blue-600" />
              Quality-driven approach
            </li>
            <li className="flex items-center gap-4 text-gray-400">
              <span className="h-[8px] w-[8px] rounded-full bg-blue-600" />
              Agile work management
            </li>
            <li className="flex items-center gap-4 text-gray-400">
              <span className="h-[8px] w-[8px] rounded-full bg-blue-600" />
              Focus on partnership
            </li>
            <li className="flex items-center gap-4 text-gray-400">
              <span className="h-[8px] w-[8px] rounded-full bg-blue-600" />
              User-centered attitude
            </li>
          </ul>
        </div>
        <div className="flex flex-[3] flex-col justify-between gap-5">
          {tabs.map((tab, index) => (
            <Fade key={tab.heading} direction="left">
              <div
                className={`${
                  activeTab === index && "bg-blue-600"
                } group flex gap-4 rounded-md bg-[#ffffff0d] p-5 duration-300 hover:bg-blue-600`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-opacity-10 transition-all duration-300 group-hover:bg-white">
                  {tab.svg}
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-white">{tab.heading}</span>
                  <span
                    className={`${
                      activeTab === index && "text-white"
                    } text-sm text-gray-400 group-hover:text-white`}
                  >
                    {tab.subheading}
                  </span>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Process;
