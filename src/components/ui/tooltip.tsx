"use client";

import { FC, useEffect, useState } from "react";
import { useTooltip } from "../context/tooltip";
import { AnimatePresence, motion } from "motion/react";

type Orientations = "ne" | "nw" | "se" | "sw";

const Tooltip: FC = () => {
  const { tooltip } = useTooltip();
  const [position, setPosition] = useState([0, 0]);
  const [orientation, setOrientation] = useState<Orientations>("ne");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setPosition([e.clientX, e.clientY]);
      setOrientation(
        e.clientX < innerWidth / 2
          ? e.clientY < innerHeight / 2
            ? "nw"
            : "sw"
          : e.clientY < innerHeight / 2
          ? "ne"
          : "se"
      );
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // if (!tooltip) return null;

  return (
    <AnimatePresence>
      {tooltip && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed z-50 top-0 left-0 p-2 bg-mocha-surface0 border-4 border-mocha-sapphire rounded-lg pointer-events-none"
          style={{
            translate: `${position[0]}px ${position[1]}px`,
          }}
        >
          {tooltip || "lorem ipsum dolor sit amet"}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Tooltip;
