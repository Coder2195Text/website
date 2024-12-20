"use client";
import { HTMLMotionProps, motion } from "motion/react";
import { FC } from "react";

export const Page: FC<HTMLMotionProps<"main">> = ({ children, ...props }) => {
  return (
    <motion.main
      {...props}
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
      {children}
    </motion.main>
  );
};
