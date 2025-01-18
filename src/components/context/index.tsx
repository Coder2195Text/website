import { FC, PropsWithChildren } from "react";
import LoadedProvider from "./loaded";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <LoadedProvider>{children}</LoadedProvider>;
};

export default Providers;
