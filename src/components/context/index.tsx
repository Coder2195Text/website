import { FC, PropsWithChildren } from "react";
import LoadedProvider from "./loaded";
import TransitionProvider from "./transition";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <TransitionProvider>
      <LoadedProvider>{children}</LoadedProvider>
    </TransitionProvider>
  );
};

export default Providers;
