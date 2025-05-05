import { FC, PropsWithChildren } from "react";
import LoadedProvider from "./loaded";
import TooltipProvider from "./tooltip";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <TooltipProvider>
      <LoadedProvider>{children}</LoadedProvider>
    </TooltipProvider>
  );
};

export default Providers;
