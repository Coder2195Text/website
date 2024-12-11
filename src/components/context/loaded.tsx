"use client";

import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

const LoadedContext = createContext<boolean>(false);

export const LoadedProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setState(true);
    });

    return () => clearTimeout(timeout);
  }, []);

  return (
    <LoadedContext.Provider value={state}>{children}</LoadedContext.Provider>
  );
};

export function useLoaded() {
  return useContext(LoadedContext);
}
