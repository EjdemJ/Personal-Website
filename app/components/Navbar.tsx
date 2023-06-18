"use client";

import Link from "next/link";

import Logo from "./Logo";
import Button from "./Button";

type Props = {
  scrollToAbout: () => void;
  scrollToSkills: () => void;
  scrollToProcess: () => void;
};

const Navbar: React.FC<Props> = ({
  scrollToAbout,
  scrollToSkills,
  scrollToProcess,
}) => {
  return (
    <>
      <nav className="lg-px-0 navbar-shadow sticky top-[-20px] z-10 h-[130px] w-full">
        <div className="container flex h-full items-center justify-between">
          <Link
            href="/"
            className="flex items-center text-2xl font-bold text-white"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Logo />
            <span>
              dam<span className="font-bold text-blue-600">.dev</span>
            </span>
          </Link>
          <ul className="hidden gap-12 md:flex">
            <li className="text-[16px] tracking-wide text-gray-400 duration-300 after:block after:h-[1px] after:w-0 after:bg-blue-600 after:transition-all after:content-[''] hover:text-white hover:after:w-full">
              <Link href="#about" onClick={scrollToAbout}>
                About
              </Link>
            </li>
            <li className="text-[16px] tracking-wide text-gray-400 duration-300 after:block after:h-[1px] after:w-0 after:bg-blue-600 after:transition-all after:content-[''] hover:text-white hover:after:w-full">
              <Link href="#skills" onClick={scrollToSkills}>
                Skills
              </Link>
            </li>
            <li className="text-[16px] tracking-wide text-gray-400 duration-300 after:block after:h-[1px] after:w-0 after:bg-blue-600 after:transition-all after:content-[''] hover:text-white hover:after:w-full">
              <Link href="#process" onClick={scrollToProcess}>
                Process
              </Link>
            </li>
            <li className="text-[16px] tracking-wide text-gray-400 duration-300 after:block after:h-[1px] after:w-0 after:bg-blue-600 after:transition-all after:content-[''] hover:text-white hover:after:w-full">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
          <Button text="Contact Me" isHover changeBg={false} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
