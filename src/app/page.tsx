import HomeLinks from "@/components/home/links";
import Socials from "@/components/home/socials";
import Title from "@/components/home/title";
import { FC } from "react";

const Home: FC = () => {
  return (
    <main>
      <Title />

      <HomeLinks />
      <Socials />
    </main>
  );
};

export default Home;
