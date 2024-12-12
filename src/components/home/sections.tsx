"use client";

import { FC } from "react";
import { Title } from "./title";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useScroll } from "../context/scroll";

export const Greet: FC = () => {
  return (
    <motion.section
      className="w-screen h-screen"
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
      <div className="flex justify-center items-center h-full w-full -z-50">
        <Title />
        <Image
          src="/images/coder.jpg"
          alt=""
          className=" brightness-50 object-cover -z-50"
          fill
        />
      </div>
    </motion.section>
  );
};

const SECTIONS = [Greet, Greet, Greet, Greet, Greet];

export const SectionsPage: FC = () => {
  const { page } = useScroll();
  const Section = SECTIONS[page];
  return (
    <div className="w-screen h-screen">
      <AnimatePresence mode="wait">
        {
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            key={page}
          >
            <Section />
          </motion.div>
        }
      </AnimatePresence>
    </div>
  );
};
