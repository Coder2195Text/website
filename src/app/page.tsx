import { ScrollProvider } from "@/components/context/scroll";
import { Greet } from "@/components/home/sections";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div>
      <ScrollProvider pages={5}>
        <Greet />
      </ScrollProvider>
    </div>
  );
};

export default Home;
