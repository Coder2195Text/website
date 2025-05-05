"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type Context = {
  tooltip: ReactNode;
  setTooltip: Dispatch<SetStateAction<ReactNode>>;
};

const TooltipContext = createContext<Context>(null! as Context);

const TooltipProvider = ({ children }: { children: ReactNode }) => {
  const [tooltip, setTooltip] = useState<ReactNode>(null);

  return (
    <TooltipContext.Provider value={{ tooltip, setTooltip }}>
      {children}
    </TooltipContext.Provider>
  );
};

export function useTooltip() {
  return useContext(TooltipContext);
}

export default TooltipProvider;
