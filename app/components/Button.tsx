type Props = {
  text: string;
  isHover?: boolean;
  changeBg?: boolean;
  fontLg?: boolean;
  onClick?: () => void;
};

const Button = ({ text, isHover, changeBg, fontLg, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`z-1 group relative rounded-md px-6 py-4 text-white ${
        changeBg && "bg-blue-600 transition-all duration-300 hover:bg-blue-400"
      } ${fontLg && "text-[16px]"}`}
    >
      {text}
      {isHover && (
        <div className="absolute bottom-0 right-0 z-[-1] h-[2px] w-[100%] rounded-md bg-blue-600 transition-all group-hover:h-[100%]" />
      )}
    </button>
  );
};

export default Button;
