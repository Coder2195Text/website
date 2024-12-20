"use client";

import Link from "next/link";
import { FC, useState } from "react";
import Typewriter from "typewriter-effect";
import { useLoaded } from "../context/loaded";

export const LinkSuggest: FC = () => {
  const [loaded] = useLoaded();
  const [link, setLink] = useState("/profile");

  if (!loaded) return null;

  return (
    <div>
      <Link
        href={link}
        className="flex gap-1 bordered rounded-md button  px-2 p-1 bg-black/30 backdrop-blur-md"
      >
        Check out my{" "}
        <u className="text-teal-500">
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter

                .typeString(`profile`)
                .pauseFor(2000)
                .deleteChars(7)
                .callFunction(() => {
                  setLink("/projects");
                })
                .pauseFor(1000)
                .typeString("projects")
                .pauseFor(2000)
                .deleteChars(8)
                .callFunction(() => {
                  setLink("/blog");
                })
                .pauseFor(1000)
                .typeString("blog")
                .pauseFor(2000)
                .deleteChars(4)
                .callFunction(() => {
                  setLink("/links");
                })
                .pauseFor(1000)
                .typeString("links")
                .pauseFor(2000)
                .deleteChars(5)
                .callFunction(() => {
                  setLink("/profile");
                })
                .pauseFor(1000)

                .start();
            }}
          />
        </u>
      </Link>
    </div>
  );
};
