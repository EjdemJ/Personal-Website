import { ForwardedRef, RefObject, forwardRef } from "react";

const About = forwardRef<HTMLElement | null>((props, ref) => {
  About.displayName = "About";

  return (
    <section className="h-[auto] text-white" ref={ref}>
      <div className="container flex flex-col pt-28">
        <span
          className="mb-8 text-[14px] font-bold text-blue-600"
          data-aos="fade-in"
        >
          YOUR PROJECT IN GOOD HANDS
        </span>
        <div className="flex flex-col items-start justify-between gap-8 pb-40 lg:flex-row">
          <p
            className="max-w-[450px] flex-[3] text-[27px] font-bold leading-[1.3] text-white lg:max-w-full"
            data-aos="fade-in"
          >
            As a front-end developer, I provide UX/UI design services and
            front-end engineering solutions that will suit your business.
          </p>
          <p
            className="max-w-[450px] flex-[5] text-[18px] leading-[1.3] text-gray-400 lg:max-w-full lg:text-[26px]"
            data-aos="fade-in"
            data-aos-delay="100"
          >
            I will grant efficient design and agile development for long-lasting
            products so that you can focus on defining further goals. Although I
            support you in your marathon to global success.
          </p>
        </div>
        <span
          className="mb-8 text-center text-[14px] font-bold text-blue-600"
          data-aos="fade-in"
        >
          MY VISION
        </span>
        <div className="flex flex-col items-center gap-7 text-center">
          <h3
            data-aos="fade-in"
            data-aos-delay="100"
            className="px-2 text-[30px] leading-[1.2] tracking-wide lg:px-12 lg:text-[46px] lg:leading-[1.9]"
          >
            <span>
              I want to equip your business with flawless design and solid
              technology
            </span>
          </h3>
          <p
            className="max-w-4xl px-12 text-center text-[15px] text-gray-400 lg:text-[19px]"
            data-aos="fade-in"
          >
            You are the one who is steering your business. What I provide is
            safe, solid and fast technology, as well as trusted staff that will
            support you on every stage.
          </p>
          <div className="flex flex-col justify-center pt-8 lg:flex-row lg:gap-20">
            <div
              className="mb-8 flex flex-[1] flex-col items-start gap-3 p-3"
              data-aos="fade-in"
              data-aos-delay="300"
            >
              <svg
                _ngcontent-ikf-c15=""
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  _ngcontent-ikf-c15=""
                  d="M22.2084 6.16659C22.2084 3.63528 24.2604 1.58325 26.7917 1.58325C29.323 1.58325 31.375 3.63528 31.375 6.16659V8.45825C31.375 9.7239 32.4011 10.7499 33.6667 10.7499H40.5417C41.8074 10.7499 42.8334 11.7759 42.8334 13.0416V19.9166C42.8334 21.1822 41.8074 22.2083 40.5417 22.2083H38.25C35.7187 22.2083 33.6667 24.2603 33.6667 26.7916C33.6667 29.3229 35.7187 31.3749 38.25 31.3749H40.5417C41.8074 31.3749 42.8334 32.4009 42.8334 33.6666V40.5416C42.8334 41.8072 41.8074 42.8333 40.5417 42.8333H33.6667C32.4011 42.8333 31.375 41.8072 31.375 40.5416V38.2499C31.375 35.7186 29.323 33.6666 26.7917 33.6666C24.2604 33.6666 22.2084 35.7186 22.2084 38.2499V40.5416C22.2084 41.8072 21.1824 42.8333 19.9167 42.8333H13.0417C11.7761 42.8333 10.75 41.8072 10.75 40.5416V33.6666C10.75 32.4009 9.72403 31.3749 8.45837 31.3749H6.16671C3.6354 31.3749 1.58337 29.3229 1.58337 26.7916C1.58337 24.2603 3.6354 22.2083 6.16671 22.2083H8.45837C9.72403 22.2083 10.75 21.1822 10.75 19.9166V13.0416C10.75 11.7759 11.7761 10.7499 13.0417 10.7499H19.9167C21.1824 10.7499 22.2084 9.7239 22.2084 8.45825V6.16659Z"
                  stroke="#2563EB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>Discovery Phase</span>
              <p className="text-left text-gray-400">
                That’s where you tell me where you want to go. Together with my
                skills on design, development and project management, you decide
                on the most efficient solutions that will be tailored to your
                needs.
              </p>
            </div>
            <div
              className="mb-8 flex flex-[1] flex-col items-start gap-3 p-3"
              data-aos="fade-in"
              data-aos-delay="400"
            >
              <svg
                _ngcontent-ikf-c15=""
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  _ngcontent-ikf-c15=""
                  d="M9.16675 11.4584C9.16675 10.1928 10.1928 9.16675 11.4584 9.16675H43.5417C44.8074 9.16675 45.8334 10.1928 45.8334 11.4584V16.0417C45.8334 17.3074 44.8074 18.3334 43.5417 18.3334H11.4584C10.1928 18.3334 9.16675 17.3074 9.16675 16.0417V11.4584Z"
                  stroke="#2563EB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  _ngcontent-ikf-c15=""
                  d="M9.16675 29.7917C9.16675 28.5261 10.1928 27.5001 11.4584 27.5001H25.2084C26.4741 27.5001 27.5001 28.5261 27.5001 29.7917V43.5417C27.5001 44.8074 26.4741 45.8334 25.2084 45.8334H11.4584C10.1928 45.8334 9.16675 44.8074 9.16675 43.5417V29.7917Z"
                  stroke="#2563EB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  _ngcontent-ikf-c15=""
                  d="M36.6667 29.7917C36.6667 28.5261 37.6928 27.5001 38.9584 27.5001H43.5417C44.8074 27.5001 45.8334 28.5261 45.8334 29.7917V43.5417C45.8334 44.8074 44.8074 45.8334 43.5417 45.8334H38.9584C37.6928 45.8334 36.6667 44.8074 36.6667 43.5417V29.7917Z"
                  stroke="#2563EB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>Product Design</span>
              <p className="text-left text-gray-400">
                That phase is all about your clients. I define users’ personas
                and create a user’s journey to discover the most engaging design
                that will attract your clients to your brand like a magnet.
              </p>
            </div>
            <div
              className="mb-8 flex flex-[1] flex-col items-start gap-3 p-3"
              data-aos="fade-in"
              data-aos-delay="500"
            >
              <svg
                _ngcontent-ikf-c15=""
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  _ngcontent-ikf-c15=""
                  d="M22.9166 45.8334L32.0833 9.16675M41.2499 18.3334L50.4166 27.5001L41.2499 36.6667M13.7499 36.6667L4.58325 27.5001L13.7499 18.3334"
                  stroke="#2563EB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>Software Development</span>
              <p className="text-left text-gray-400">
                My main focus is to combine the highest quality code with the
                lowest technical debt, ensuring the best security and stability.
                I make sure that your product will be easily scalable in the
                future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
export default About;
