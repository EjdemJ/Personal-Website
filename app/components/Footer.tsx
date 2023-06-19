import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container flex flex-col-reverse items-center justify-between gap-4 pb-12 md:flex-row">
        <span className="text-center text-gray-400">
          © 2023 Adam.dev. All right reserved.
        </span>
        <div className="flex gap-4 text-gray-400">
          <Link href="https://github.com/EjdemJ" target="_blank">
            <AiFillGithub
              size={30}
              cursor="pointer"
              className="transition-all duration-300 hover:text-gray-300"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/adam-jurczyk-27b938279/"
            target="_blank"
          >
            <AiFillLinkedin
              size={30}
              cursor="pointer"
              className="transition-all duration-300 hover:text-gray-300"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
