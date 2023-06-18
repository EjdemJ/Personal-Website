import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container flex flex-col-reverse items-center justify-between gap-4 pb-12 md:flex-row">
        <span className="text-gray-400">
          © 2023 Adam.dev. All right reserved.
        </span>
        <div className="flex gap-4 text-gray-400">
          <AiFillGithub
            size={30}
            cursor="pointer"
            className="transition-all duration-300 hover:text-gray-300"
          />
          <AiFillLinkedin
            size={30}
            cursor="pointer"
            className="transition-all duration-300 hover:text-gray-300"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
