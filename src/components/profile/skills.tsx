"use client";
import { motion } from "motion/react";
import { FC, ReactNode, useMemo } from "react";
import { useLoaded } from "../context/loaded";
import { IoChevronForwardSharp } from "react-icons/io5";
import Image from "next/image";

type SkillEntry = {
  icon: string;
  title: ReactNode;
  note: ReactNode;
};

const SKILLS_LIST: SkillEntry[] = [
  {
    icon: "/logos/archlinux.svg",
    title: "Arch Linux",
    note: <>EOS was &ldquo;NOT Arch&rdquo; so I easily converted.</>,
  },
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
    icon: "/logos/neovim.svg",
    title: "Neovim",
    note: "Tried making it like VSCode.",
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
  {
    icon: "/logos/vscode.svg",
    title: "VSCode",
    note: "My trusty ol' editor.",
  },
];

function shuffleAndSplit(entries: SkillEntry[]): SkillEntry[][] {
  const shuffled = [...entries].sort(() => Math.random() - 0.5);

  return Array.from({ length: 4 }, (_, i) =>
    shuffled.filter((_, index) => index % 4 === i)
  );
}

const Skill: FC<{ entry: SkillEntry }> = ({ entry }) => {
  return (
    <div className="inline-flex items-center bg-gray-500/50 p-2 rounded m-2">
      <div className="w-8 aspect-square rounded-md relative">
        <Image
          src={entry.icon}
          fill
          alt=""
          className="object-contain"
          priority
        />
      </div>
      <div className="flex flex-col ml-2">
        <h6>{entry.title}</h6>
        <p className="text-xs -mt-1">{entry.note}</p>
      </div>
    </div>
  );
};

const Skills: FC = () => {
  const { loaded } = useLoaded();

  const splitEntries = useMemo(() => shuffleAndSplit(SKILLS_LIST), []);

  console.log(splitEntries);

  if (!loaded) return;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
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
      className="my-10 "
    >
      <h3 className="flex">
        My Skillset
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
        className="bordered rounded-lg my-4 py-2 w-full relative"
      >
        <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-black pointer-events-none to-transparent rounded-l-lg z-30" />
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-black pointer-events-none to-transparent rounded-r-lg z-30" />
        {splitEntries.map((entries, index) => {
          const list = entries.map((entry, index) => (
            <Skill key={index} entry={entry} />
          ));
          return (
            <div key={index} className=" overflow-x-hidden flex relative">
              <div
                className={`${index % 2 === 0 ? "animate-marquee" : "animate-marquee3"
                  } whitespace-nowrap`}
              >
                {list}
              </div>
              <div
                className={`absolute top-0 ${index % 2 === 0 ? "animate-marquee2" : "animate-marquee4"
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

export default Skills;
