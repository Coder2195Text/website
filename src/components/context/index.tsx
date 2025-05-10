import { FC, PropsWithChildren } from "react";
import LoadedProvider from "./loaded";
import TooltipProvider from "./tooltip";
import TransitionProvider from "./transition";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <TooltipProvider>
      <TransitionProvider>
        <LoadedProvider>{children}</LoadedProvider>
      </TransitionProvider>
    </TooltipProvider>
  );
};

export default Providers;
