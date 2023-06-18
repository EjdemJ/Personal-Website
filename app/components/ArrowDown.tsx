import Link from "next/link";
import { AiOutlineArrowDown } from "react-icons/ai";

type Props = {
  onClick: () => void;
};

const ArrowDown: React.FC<Props> = ({ onClick }) => {
  return (
    <Link
      href="#about"
      className="absolute bottom-[10%] left-[50%] flex h-[44px] w-[44px] -translate-x-[50%] -translate-y-[50%]  cursor-pointer items-center justify-center rounded-full border border-gray-400 text-xl text-white transition-all duration-300 hover:bg-gray-200 hover:text-gray-200"
      onClick={onClick}
    >
      <AiOutlineArrowDown className="animate-jump" />
    </Link>
  );
};

export default ArrowDown;
