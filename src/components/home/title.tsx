"use client";

import { FC } from "react";
import { useLoaded } from "../context/loaded";
import { motion } from "motion/react";

export const Title: FC = () => {
  const [loaded] = useLoaded();

  if (!loaded) return null;
  return (
    <motion.h1
      className="font-mono bg-zinc-600/50  backdrop-blur-md bg-opacity-40 rounded-lg p-3"
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
          className="inline-block"
          key={i}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
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
