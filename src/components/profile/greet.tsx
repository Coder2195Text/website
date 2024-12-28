"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { FC } from "react";
import { useLoaded } from "../context/loaded";
import { easeInOut } from "motion";
import { page } from "@/utils/constants";

export const Greet: FC = () => {
  const { scrollYProgress } = useScroll();

  const rawX = useTransform(
    scrollYProgress,
    [page(-1), 0, page(1)],
    [50, 0, -50],
    {
      ease: easeInOut,
    }
  );

  const x = useTransform(rawX, (value) => `${value}dvw`);

  const opacity = useTransform(
    scrollYProgress,
    [page(-1), 0, page(1)],
    [0, 1, 0]
  );

  const [loaded] = useLoaded();

  if (!loaded) return;

  return (
    <motion.div
      initial="hidden"
      animate="animate"
      variants={{
        hidden: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.5, delay: 1.75 } },
      }}
      className="w-screen h-screen flex justify-center items-center"
    >
      <motion.h1
        style={{
          x,
          opacity,
          // scale uses same value as opacity
          scale: opacity,
          y: "50%",
        }}
        className="fixed bottom-1/2"
      >
        Hello, I am Coder2195.
      </motion.h1>
    </motion.div>
  );
};
