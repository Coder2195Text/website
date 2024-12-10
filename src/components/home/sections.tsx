import { FC } from "react";
import { Title } from "./title";

export const Greet: FC = () => {
  return (
    <section className="w-screen h-screen">
      <div className="flex justify-center items-center h-full w-full">
        <Title />
      </div>
    </section>
  );
};
