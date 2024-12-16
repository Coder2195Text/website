"use client";
import { FC } from "react";
import { Title } from "./title";
import { motion } from "motion/react";

export const Greet: FC = () => {
  return (
    <motion.section
      className="w-screen h-screen pointer-events-none"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
        exit: {
          opacity: 0,
        },
      }}
    >
      <div className="flex justify-between items-center h-full w-full flex-col -z-50 pointer-events-none">
        <div className="h-4" />
        <Title />

        <div className="h-4 text-xs text-white/50">Effect by @haljasala</div>
      </div>
    </motion.section>
  );
};
