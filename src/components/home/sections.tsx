import { FC } from "react";
import { Title } from "./title";
import Image from "next/image";

export const Greet: FC = () => {
  return (
    <section className="w-screen h-screen">
      <div className="flex justify-center items-center h-full w-full">
        <Title />
        <Image
          src="/images/coder.jpg"
          alt=""
          className="-z-50 brightness-50"
          fill
        />
      </div>
    </section>
  );
};
