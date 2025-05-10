"use client";
import { animate } from "motion/react";
import { TransitionRouter } from "next-transition-router";
import { FC, PropsWithChildren, useRef } from "react";
import { useTransitioning } from "../context/transition";

const PageTransition: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { setTransitioning } = useTransitioning();
  return (
    <TransitionRouter
      auto
      leave={(next) => {
        setTransitioning(true);

        animate(
          ref.current!,
          { opacity: [1, 0] },
          { duration: 0.5, onComplete: next }
        );
      }}
      enter={(next) => {
        setTransitioning(false);
        animate(
          ref.current!,
          { opacity: [0, 1] },
          { duration: 0.5, onComplete: next }
        );
      }}
    >
      <div ref={ref} className="h-auto w-full">
        {children}
      </div>
    </TransitionRouter>
  );
};

export default PageTransition;
