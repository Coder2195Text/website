"use client";

import { easeInOut } from "motion";
import { useScroll, useTransform, motion } from "motion/react";
import { FC } from "react";
import { useLoaded } from "../context/loaded";
import { page } from "@/utils/constants";

export const JourneyIntro: FC = () => {
  const { scrollYProgress } = useScroll();

  const rawY = useTransform(scrollYProgress, [page(1), page(2)], [-25, 0], {
    ease: easeInOut,
  });

  const y = useTransform(rawY, (value) => `${value}dvh`);

  const opacity = useTransform(
    scrollYProgress,
    [page(1), page(1.5), page(2.5), page(3)],
    [0, 1, 1, 0]
  );

  const [loaded] = useLoaded();

  if (!loaded) return;

  return (
    <motion.div className="w-screen h-screen flex fixed justify-center items-center top-0">
      <motion.h3
        style={{
          y,

          opacity,
          // scale uses same value as opacity
          scale: opacity,
        }}
      >
        Travel with me through my programmer journey.
      </motion.h3>
    </motion.div>
  );
};

const Year: FC<{ year: string; offset: number }> = ({ year, offset }) => {
  const { scrollYProgress } = useScroll();

  const rawTop = useTransform(
    scrollYProgress,
    [0, page(2.75 + offset), page(3.75 + offset), 1],
    [1000, 100, 0, -1000]
  );

  const top = useTransform(rawTop, (value) => `${value}dvh`);

  return (
    <motion.div className="flex left-4 fixed" style={{ top, y: "50%" }}>
      {year}
    </motion.div>
  );
};

export const Journey: FC = () => {
  return (
    <>
      {[2018, 2019, 2020, 2021, 2022, 2023, 2024].map((year, index) => (
        <Year key={index} year={year.toString()} offset={index} />
      ))}
    </>
  );
};
