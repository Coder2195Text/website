"use client";

import { FC } from "react";
import { useScroll } from "../context/scroll";

export const PageNav: FC = () => {
  const { pages, setNewPage, page } = useScroll();

  return (
    <div className="fixed top-0 right-0 my-auto h-full flex items-center">
      <div className="relative flex flex-col  bg-white/20 m-1 justify-center rounded-md">
        <div
          className="w-3 h-3 m-1.5 absolute left-0 bg-teal-500 rounded-full transition-all duration-300 ease-in-out"
          style={{
            top: `${page * 1.5}rem`,
          }}
        />
        {Array.from({ length: pages }, (_, i) => (
          <button key={i} onClick={() => setNewPage(i)} className="p-1.5">
            <div className="w-3 h-3 rounded-full bg-white/40" />
          </button>
        ))}
      </div>
    </div>
  );
};
