"use client";

import { FC } from "react";
import { useLoaded } from "../context/loaded";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

const Splash: FC = () => {
  const { loaded } = useLoaded();

  return (
    <AnimatePresence>
      {!loaded && (
        <motion.div
          className="fixed w-full h-full z-50 top-0 flex justify-center items-center bg-mocha-base"
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <Image
            src="/icon.png"
            width={96}
            height={96}
            alt=""
            className="rounded-full animate-pulse"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Splash;
