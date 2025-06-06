"use client";

import { FC } from "react";
import TypewriterComponent from "typewriter-effect";
import { useLoaded } from "../context/loaded";

const Title: FC = () => {
  const { loaded } = useLoaded();
  return (
    <h1 className=" py-4 flex gap-3 items-center flex-wrap">
      Hello, I&apos;m{" "}
      <span className="font-mono border-4 border-mocha-mauve p-2 rounded-lg bg-mocha-mantle ">
        {loaded && (
          <TypewriterComponent
            options={{
              strings: "Coder2195",
              deleteSpeed: 100000000,
              autoStart: true,
              cursorClassName: "Typewriter__cursor -mx-2.5! ",
            }}
          />
        )}
      </span>
    </h1>
  );
};

export default Title;
