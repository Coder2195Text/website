import { FC, PropsWithChildren } from "react";
import { LoadedProvider } from "./loaded";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <LoadedProvider>{children}</LoadedProvider>;
};
