"use client";
import { useScroll, useTransform, motion, AnimatePresence } from "motion/react";
import { FC, useEffect, useState } from "react";
import { useLoaded } from "../context/loaded";
import { page, PROFILE_PAGE_HEIGHT } from "@/utils/constants";
import { LinkTarget } from "@/utils/types";
import { easeInOut } from "motion";
import Link from "next/link";
import Image from "next/image";

const YEARS = ["2019", "2020", "2021", "2022", "2023", "2024"] as const;
type Year = (typeof YEARS)[number];
type EntryType = {
  title: string;
  icon: string;
  href?: string;
  target?: LinkTarget;
};

const JOURNEY_ENTRIES: {
  [year in Year]: EntryType[];
} = {
  "2019": [
    {
      title: "Learned Scratch",
      icon: "/logos/scratch.svg",
      href: "https://scratch.mit.edu/",
      target: "_blank",
    },
  ],
  "2020": [
    {
      title: "Learned Python",
      icon: "/logos/python.svg",
      href: "https://www.python.org/",
      target: "_blank",
    },
    {
      title: "Learned HTML",
      icon: "/logos/html.svg",
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      target: "_blank",
    },
    {
      title: "Learned CSS",
      icon: "/logos/css.svg",
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      target: "_blank",
    },
    {
      title: "Won an award at the science fair",
      icon: "/logos/trophy.svg",
    },
  ],
  "2021": [
    {
      title: "Learned JavaScript",
      icon: "/logos/javascript.svg",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      target: "_blank",
    },
    {
      title: "Learned TypeScript",
      icon: "/logos/typescript.svg",
      href: "https://www.typescriptlang.org/",
      target: "_blank",
    },
  ],
  "2022": [
    {
      title: "Learned React",
      icon: "/logos/react.svg",
      href: "https://reactjs.org/",
      target: "_blank",
    },
    {
      title: "Learned Next.js",
      icon: "/logos/nextjs.svg",
      href: "https://nextjs.org/",
      target: "_blank",
    },
    {
      title: "Learned Tailwind CSS",
      icon: "/logos/tailwindcss.svg",
      href: "https://tailwindcss.com/",
      target: "_blank",
    },
    {
      title: "Learned Prisma",
      icon: "/logos/prisma.svg",
      href: "https://www.prisma.io/",
      target: "_blank",
    },
    {
      title: "Learned Java",
      icon: "/logos/java.svg",
      href: "https://www.java.com/",
      target: "_blank",
    },
    {
      title: "Learned C#",
      icon: "/logos/csharp.svg",
      href: "https://docs.microsoft.com/en-us/dotnet/csharp/",
      target: "_blank",
    },
    {
      title: "Installed Ubuntu",
      icon: "/logos/ubuntu.svg",
      href: "https://ubuntu.com/",
      target: "_blank",
    },
  ],
  "2023": [
    {
      title: "Learned Rust",
      icon: "/logos/rust.svg",
      href: "https://www.rust-lang.org/",
      target: "_blank",
    },
    {
      title: "Learned Godot",
      icon: "/logos/godot.svg",
      href: "https://godotengine.org/",
      target: "_blank",
    },
  ],
  "2024": [
    {
      title: "Installed EndeavourOS (I use Arch btw)",
      icon: "/logos/endeavouros.svg",
      href: "https://endeavouros.com/",
      target: "_blank",
    },
    {
      title: "RIT Bound - GDD Major",
      icon: "/logos/rit.svg",
      href: "https://www.rit.edu/",
      target: "_blank",
    },
  ],
};

export const JourneyIntro: FC = () => {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(
    scrollYProgress,
    [page(1), page(1.5), page(2.5), page(3)],
    [0, 1, 1, 0],
    {
      ease: easeInOut,
    }
  );

  const shake = useTransform(
    // random bunch of numbers between -10 and 10
    // page 1 to 3
    scrollYProgress,
    [
      page(1),
      page(1.2),
      page(1.4),
      page(1.6),
      page(1.8),
      page(2),
      page(2.2),
      page(2.4),
      page(2.6),
      page(2.8),
      page(3),
    ],
    new Array(11).fill(0).map(() => Math.random() * 10 - 5),
    {
      ease: easeInOut,
    }
  );
  const [loaded] = useLoaded();

  if (!loaded) return;

  return (
    <motion.div className="w-screen h-screen pointer-events-none -z-10 flex fixed justify-center items-center top-0">
      <motion.h3
        style={{
          rotate: shake,
          opacity,
          // scale uses same value as opacity
          scale: opacity,
        }}
      >
        Travel with me through my programmer journey.
      </motion.h3>
    </motion.div>
  );
};

const Year: FC<{ year: string; offset: number }> = ({ year, offset }) => {
  const { scrollYProgress } = useScroll();

  const rawTop = useTransform(
    scrollYProgress,
    [-1, page(3 + offset), page(3.5 + offset), page(4 + offset), 2],
    [10000, 80, 50, 20, -10000]
  );

  const top = useTransform(rawTop, (value) => `${value}dvh`);

  return (
    <motion.div className="flex left-4 fixed" style={{ top, y: "50%" }}>
      {year}
    </motion.div>
  );
};

const JourneyEntry: FC<{
  entry: EntryType;
  index: number;
}> = ({ entry, index }) => {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className=" rounded-md w-16 h-16 relative button p-2  pointer-events-auto hover:cursor-pointer"
      variants={{
        initial: {
          opacity: 0,
          scale: 0,
          y: -100,
          rotate: 45,
        },
        animate: {
          opacity: 1,
          scale: 1,
          y: 0,
          rotate: 0,
          transition: {
            delay: index * 0.1,
          },
        },
        exit: {
          opacity: 0,
          scale: 0,
          y: 100,
          rotate: -45,
        },
      }}
      transition={{
        type: "spring",
        duration: 0.4,
      }}
    >
      <Link
        href={entry.href || ""}
        onClick={(e) => {
          if (!entry.href) e.preventDefault();
        }}
        target={entry.target}
        className=" relative w-full block h-full"
      >
        <Image
          fill
          className="object-contain object-center"
          src={entry.icon}
          alt=""
        />
      </Link>
      <AnimatePresence mode="wait">
        {hover && (
          <motion.div
            // move variants out
            initial={{ opacity: 0, x: "-50%", y: "1rem", scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key="tooltip"
            className="pointer-events-none absolute top-full left-1/2 max-w-screen bg-zinc-800/80 p-0.5 z-20 bg-opacity-50 w-44 mx-auto rounded-md"
            transition={{
              type: "spring",
            }}
          >
            <p className="text-white text-xxs font-mono">{entry.title}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const Journey: FC = () => {
  const [loaded] = useLoaded();
  const { scrollYProgress } = useScroll();

  const [year, setYear] = useState<Year>();

  useEffect(() => {
    console.log(year);
  }, [year]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      const index = Math.ceil(value * PROFILE_PAGE_HEIGHT) - 4;
      setYear(YEARS[index]);
    });

    return () => {
      unsubscribe();
    };
  });

  if (!loaded) return;

  return (
    <>
      {YEARS.map((year, index) => (
        <Year key={index} year={year} offset={index} />
      ))}
      <AnimatePresence mode="wait">
        {year && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-screen h-screen pl-14 p-8 fixed top-0 left-0 flex items-center justify-center"
            key={year}
          >
            <div className="w-full flex  flex-wrap items-center justify-center">
              {JOURNEY_ENTRIES[year]?.map((entry, index) => (
                <JourneyEntry key={index} entry={entry} index={index} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
