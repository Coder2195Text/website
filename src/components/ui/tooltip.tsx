"use client";

import { FC, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTransitioning } from "../context/transition";

type Orientations = "ne" | "nw" | "se" | "sw";

const Tooltip: FC = () => {
  const [tooltip, setTooltip] = useState<string | null>();
  const [position, setPosition] = useState([0, 0]);
  const [orientation, setOrientation] = useState<Orientations>("se");

  const { transitioning } = useTransitioning();

  useEffect(() => {
    if (transitioning) {
      setTooltip("");
    }

    const intvl = setInterval(() => {
      if (transitioning) return;
      const hovered = document.querySelector("[aria-description]:hover");

      setTooltip(hovered?.ariaDescription || null);
    }, 200);

    return () => {
      clearInterval(intvl);
    };
  }, [transitioning, setTooltip]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setPosition([e.clientX, e.clientY]);
      setOrientation(
        e.clientX < innerWidth / 2
          ? e.clientY < innerHeight / 2
            ? "se"
            : "ne"
          : e.clientY < innerHeight / 2
          ? "sw"
          : "nw"
      );
    };

    document.addEventListener("pointermove", handleMouseMove);

    return () => {
      document.removeEventListener("pointermove", handleMouseMove);
    };
  }, []);

  // if (!tooltip) return null;

  return (
    <AnimatePresence>
      {tooltip && typeof tooltip !== "boolean" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="pointer-events-none fixed z-50 top-0 left-0 "
          style={{
            translate: `calc(${position[0]}px) ${position[1]}px`,
          }}
        >
          <div
            className={`${
              orientation == "nw" || orientation == "sw"
                ? "-translate-x-full"
                : ""
            } ${
              orientation == "ne" || orientation == "nw"
                ? "-translate-y-full"
                : ""
            } p-2 max-w-[50vw] bg-mocha-surface0 border-2 border-mocha-sapphire rounded-lg pointer-events-none transition-transform duration-300 text-sm`}
          >
            {tooltip || "lorem ipsum dolor sit amet"}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Tooltip;
