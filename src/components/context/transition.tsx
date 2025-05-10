"use client";
import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

type Context = {
  transitioning: boolean;
  setTransitioning: Dispatch<SetStateAction<boolean>>;
};

const TransitionContext = createContext<Context>(null! as Context);

const TransitionProvider: FC<PropsWithChildren> = ({ children }) => {
  const [transitioning, setTransitioning] = useState<boolean>(false);

  return (
    <TransitionContext.Provider value={{ transitioning, setTransitioning }}>
      {children}
    </TransitionContext.Provider>
  );
};

export function useTransitioning() {
  return useContext(TransitionContext);
}

export default TransitionProvider;
