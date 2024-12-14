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
      <div className="flex justify-center items-center h-full w-full -z-50 pointer-events-none">
        <Title />
        {/* <Image
          src="/images/coder.jpg"
          alt=""
          className=" brightness-50 object-cover -z-50"
          fill
        /> */}
      </div>
    </motion.section>
  );
};
