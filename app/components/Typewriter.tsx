"use client";

import TypewriterComponent from "typewriter-effect";

type Props = {
  words: string[];
};

const Typewriter: React.FC<Props> = ({ words }) => {
  return (
    <div>
      <TypewriterComponent
        options={{
          strings: words,
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default Typewriter;
