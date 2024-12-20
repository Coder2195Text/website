"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { FC } from "react";
import { useLoaded } from "../context/loaded";
import { easeInOut } from "motion";

export const Greet: FC = () => {
  const { scrollY } = useScroll();

  const x = useTransform(
    scrollY,
    [-innerHeight, 0, innerHeight],
    [innerWidth * 1.5, 0, -innerWidth * 1.5],
    {
      ease: easeInOut,
    }
  );

  const opacity = useTransform(
    scrollY,
    [-innerHeight / 2, 0, innerHeight / 2],
    [0, 1, 0]
  );

  const [loaded] = useLoaded();

  if (!loaded) return;

  return (
    <motion.div
      initial="hidden"
      animate="animate"
      className="w-screen h-screen flex justify-center items-center"
    >
      <motion.h1
        variants={{
          hidden: { opacity: 0 },
          animate: { opacity: 1, transition: { duration: 0.5, delay: 1.75 } },
        }}
        style={{
          x,
          opacity,
          y: "50%",
        }}
        className="fixed bottom-1/2"
      >
        Hello, I am Coder2195.
      </motion.h1>
    </motion.div>
  );
};
