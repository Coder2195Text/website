"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { FC } from "react";
import { useLoaded } from "../context/loaded";

export const Splash: FC = () => {
  const loaded = useLoaded();
  console.log(loaded);

  return (
    <AnimatePresence>
      {!loaded && (
        <motion.div
          key="splash"
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="flex fixed top-0 right-0 w-screen h-screen items-center justify-center bg-black z-50"
        >
          <Image
            src="/profile.jpg"
            alt="Coder2195"
            width={128}
            height={128}
            className="rounded-full animate-pulse w-24 h-24"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
