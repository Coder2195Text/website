import { LavaLamp } from "@/components/home/lava-lamp";
import { Greet } from "@/components/home/sections";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div>
      <Greet />
      <LavaLamp />
    </div>
  );
};

export default Home;
