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

type ContextType = StateType<boolean>;

const LoadedContext = createContext<ContextType>(
  undefined as unknown as ContextType
);

export const LoadedProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setState(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <LoadedContext.Provider value={[state, setState]}>
      {children}
    </LoadedContext.Provider>
  );
};

export function useLoaded() {
  return useContext(LoadedContext);
}
