"use client";

import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type Context = {
  loaded: boolean;
  setLoaded: Dispatch<SetStateAction<boolean>>;
};

const LoadedContext = createContext<Context>(null! as Context);

const LoadedProvider: FC<PropsWithChildren> = ({ children }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <LoadedContext.Provider value={{ loaded, setLoaded }}>
      {children}
    </LoadedContext.Provider>
  );
};

export function useLoaded() {
  return useContext(LoadedContext);
}

export default LoadedProvider;
