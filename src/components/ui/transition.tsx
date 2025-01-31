"use client";

import { animate } from "motion/react";
import { TransitionRouter } from "next-transition-router";
import { FC, PropsWithChildren, useRef } from "react";

const PageTransition: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <TransitionRouter
      auto
      leave={(next) => {
        animate(
          ref.current!,
          { opacity: [1, 0] },
          { duration: 0.5, onComplete: next }
        );
      }}
      enter={(next) => {
        animate(
          ref.current!,
          { opacity: [0, 1] },
          { duration: 0.5, onComplete: next }
        );
      }}
    >
      <div ref={ref} className="h-[100dvh] overflow-auto w-full">
        {children}
      </div>
    </TransitionRouter>
  );
};

export default PageTransition;
