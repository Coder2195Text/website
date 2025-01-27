"use client";
import { motion } from "motion/react";
import { FC, ReactNode, useMemo } from "react";
import { useLoaded } from "../context/loaded";
import { IoChevronForwardSharp } from "react-icons/io5";
import Image from "next/image";

type ExperienceEntry = {
  icon: string;
  title: ReactNode;
  note: ReactNode;
};

const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  {
    icon: "/logos/csharp.svg",
    title: "C#",
    note: "See sharp. Why I need glasses.",
  },
  {
    icon: "/logos/css.svg",
    title: "CSS",
    note: "Write in with style.",
  },
  {
    icon: "/logos/endeavouros.svg",
    title: "EndeavourOS",
    note: "Still using Arch btw.",
  },
  {
    icon: "/logos/git.svg",
    title: "Git",
    note: "Just commit.",
  },
  {
    icon: "/logos/godot.svg",
    title: "Godot",
    note: "Go. Dot.",
  },
  {
    icon: "/logos/html.svg",
    title: "HTML",
    note: "Marked up for the web.",
  },
  {
    icon: "/logos/javascript.svg",
    title: "JavaScript",
    note: "Yea, Typescript will always be better.",
  },
  {
    icon: "/logos/nextjs.svg",
    title: "NextJS",
    note: "Truly next level. This site uses NextJS.",
  },
  {
    icon: "/logos/nodejs.svg",
    title: "NodeJS",
    note: "WTF is a PHP?",
  },
  {
    icon: "/logos/prisma.svg",
    title: "Prisma",
    note: "Which insane fella writes raw queries?",
  },
  {
    icon: "/logos/python.svg",
    title: "Python",
    note: (
      <>
        I&apos;ll <code>pass</code> on the snake.
      </>
    ),
  },
  {
    icon: "/logos/react.svg",
    title: "React",
    note: "Why so many libraries involving atoms?",
  },
  {
    icon: "/logos/rust.svg",
    title: "Rust",
    note: "Blazingly fast traits and confusion.",
  },
  {
    icon: "/logos/scratch.svg",
    title: "Scratch",
    note: "Where it all began.",
  },
  {
    title: "TailwindCSS",
    icon: "/logos/tailwindcss.svg",
    note: "CSS in my files? No way!",
  },
  {
    icon: "/logos/typescript.svg",
    title: "TypeScript",
    note: "Gigachad version of JavaScript.",
  },
  {
    icon: "/logos/ubuntu.svg",
    title: "Ubuntu",
    note: "Windows broke on me and I had a USB stick.",
  },
];

function shuffleAndSplit(entries: ExperienceEntry[]): ExperienceEntry[][] {
  entries = entries.slice();

  const arrays: ExperienceEntry[][] = Array.from({ length: 3 }, () => []);

  let count = 0;

  while (entries.length) {
    const index = Math.floor(Math.random() * entries.length);
    const entry = entries.splice(index, 1)[0];
    arrays[count % 3].push(entry);
    count++;
  }
  return arrays;
}

const ExperienceItem: FC<{ entry: ExperienceEntry }> = ({ entry }) => {
  return (
    <div className="inline-flex items-center bg-gray-500/50 p-2 rounded m-2">
      <div className="w-8 aspect-square rounded-md relative">
        <Image src={entry.icon} fill alt="" />
      </div>
      <div className="flex flex-col ml-2">
        <h6>{entry.title}</h6>
        <p className="text-xs -mt-1">{entry.note}</p>
      </div>
    </div>
  );
};

const Experience: FC = () => {
  const { loaded } = useLoaded();

  const splitEntries = useMemo(() => shuffleAndSplit(EXPERIENCE_ENTRIES), []);

  console.log(splitEntries);

  if (!loaded) return;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            delay: 0.5,
          },
        },
      }}
    >
      <h3 className="flex">
        My Experience
        <motion.div
          className="inline-block "
          variants={{
            hidden: {
              rotate: 0,
            },
            visible: {
              rotate: 90,
              transition: {
                delay: 1,
              },
            },
          }}
        >
          <IoChevronForwardSharp className="w-8 h-8 mx-4" />
        </motion.div>
      </h3>

      <motion.div
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              delay: 1.5,
              duration: 1,
            },
          },
        }}
        className="bordered rounded-lg my-4 w-full"
      >
        {splitEntries.map((entries, index) => {
          const list = entries.map((entry, index) => (
            <ExperienceItem key={index} entry={entry} />
          ));
          return (
            <div key={index} className=" overflow-x-hidden flex relative">
              <div
                className={`${
                  index % 2 === 0 ? "animate-marquee" : "animate-marquee3"
                } whitespace-nowrap`}
              >
                {list}
              </div>
              <div
                className={`absolute top-0 ${
                  index % 2 === 0 ? "animate-marquee2" : "animate-marquee4"
                } whitespace-nowrap`}
              >
                {list}
              </div>
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Experience;
