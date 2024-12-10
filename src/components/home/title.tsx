"use client";

import { FC } from "react";
import { useLoaded } from "../context/loaded";
import { motion } from "motion/react";

export const Title: FC = () => {
  const loaded = useLoaded();

  if (!loaded) return null;
  return (
    <motion.h1
      className="font-mono bg-gradient-to-b from-zinc-600/25 to-slate-800/25  rounded-lg p-3"
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.75,
          duration: 0.5,
        },
      }}
    >
      {"Coder2195".split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 1.5 + i * 0.1,
            },
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};
