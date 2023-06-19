import Button from "./Button";

type Props = {
  focusOnMessageArea: () => void;
};

const GetInTouch: React.FC<Props> = ({ focusOnMessageArea }) => {
  return (
    <section>
      <div className="container flex flex-col justify-center gap-12 pb-24 lg:flex-row lg:pb-40">
        <div className="flex flex-col gap-5">
          <h3 className="relative max-w-2xl text-[46px] leading-[1.3] tracking-wide text-white">
            <span>From start-ups to medium enterprises</span>
            <span className="absolute left-[-40px] top-[20px] h-4 w-4 rounded-full bg-blue-600 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:animate-ping after:rounded-full after:bg-blue-600 after:content-['']" />
          </h3>
          <p className="max-w-2xl text-base leading-[1.5] text-gray-400 lg:text-[20px]">
            Tell me about your needs. Together we can build a long-term
            partnership that will take your business to a bright future.
          </p>
        </div>
        <div className="flex items-center justify-center lg:justify-end">
          <Button
            text="Get in touch"
            changeBg={false}
            isHover
            fontLg
            onClick={focusOnMessageArea}
          />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
