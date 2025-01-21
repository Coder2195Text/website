import HomeLinks from "@/components/home/links";
import Socials from "@/components/home/socials";
import Title from "@/components/home/title";
import { FC } from "react";

const Home: FC = () => {
  return (
    <main>
      <Title />
      <div className="m-6 mb-8 text-sm font-extrabold">
        The master of unfinished projects.
      </div>
      <HomeLinks />
      <Socials />
    </main>
  );
};

export default Home;
