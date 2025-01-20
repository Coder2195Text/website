import { HomeLinks } from "@/components/home/links";
import Title from "@/components/home/title";
import { FC } from "react";

const Home: FC = () => {
  return (
    <main>
      <Title />
      <h3>Explore My:</h3>
      <HomeLinks />
    </main>
  );
};

export default Home;
