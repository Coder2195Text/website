"use client";

import { StateType } from "@/utils/types";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

type ContextType = StateType<{ page: number }>;

const ScrollContext = createContext<ContextType>(
  undefined as unknown as ContextType
);

export const ScrollProvider: FC<
  PropsWithChildren<{
    pages: number;
  }>
> = ({ children, pages }) => {
  const [state, setState] = useState<{ page: number }>({ page: 0 });
  const [lastScroll, setLastScroll] = useState<number>(0);

  function scrollEvent(e: WheelEvent) {
    if (Date.now() - lastScroll < 1000) {
      return;
    }
    const delta = e.deltaY;
    const page = state.page + (delta > 0 ? 1 : -1);

    if (page >= 0 && page < pages) {
      console.log(page);
      setState({ page });
      setLastScroll(Date.now());
    }
  }

  useEffect(() => {
    document.addEventListener("wheel", scrollEvent);
    return () => {
      document.removeEventListener("wheel", scrollEvent);
    };
  });

  return (
    <ScrollContext.Provider value={[state, setState]}>
      {children}
    </ScrollContext.Provider>
  );
};

export function useScroll() {
  return useContext(ScrollContext);
}
