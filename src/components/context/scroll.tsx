"use client";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

type ContextType = {
  page: number;
  previousPage: number;
  lastScroll: number;
  setPage: (page: number) => void;
  setPreviousPage: (page: number) => void;
  setLastScroll: (time: number) => void;

  readonly pages: number;
};

function setNewPage(
  { page, pages, setPage, setPreviousPage, setLastScroll }: ContextType,
  newPage: number
) {
  if (newPage >= 0 && newPage < pages) {
    setPreviousPage(page);
    setPage(newPage);
    setLastScroll(Date.now());
  }
}

const ScrollContext = createContext<ContextType>(
  undefined as unknown as ContextType
);

export const ScrollProvider: FC<
  PropsWithChildren<{
    pages: number;
    delay?: number;
  }>
> = ({ children, pages, delay }) => {
  const [page, setPage] = useState<number>(0);
  const [previousPage, setPreviousPage] = useState<number>(0);
  const [lastScroll, setLastScroll] = useState<number>(0);

  const context: ContextType = {
    pages,
    page,
    previousPage,
    lastScroll,
    setPage,
    setPreviousPage,
    setLastScroll,
  };

  function scrollEvent(e: WheelEvent) {
    if (Date.now() - lastScroll < (delay || 500)) {
      return;
    }
    const delta = e.deltaY;
    const newPage = page + (delta > 0 ? 1 : -1);

    setNewPage(context, newPage);
  }

  useEffect(() => {
    document.addEventListener("wheel", scrollEvent);
    return () => {
      document.removeEventListener("wheel", scrollEvent);
    };
  });

  return (
    <ScrollContext.Provider value={context}>{children}</ScrollContext.Provider>
  );
};

export function useScroll() {
  const context = useContext(ScrollContext);
  return {
    ...context,
    setNewPage: setNewPage.bind(null, context),
  };
}
