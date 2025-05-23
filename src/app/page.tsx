import HomeLinks from "@/components/home/links";
import Socials from "@/components/home/socials";
import Title from "@/components/home/title";
import { FC } from "react";

export const metadata = {
  title: "Home | Coder2195",
  description: "Welcome to my personal website.",
};

const Home: FC = () => {
  return (
    <main>
      <Title />
      <h6 className="my-4 mb-8">The master of unfinished projects.</h6>
      <HomeLinks />
      <Socials />
    </main>
  );
};

export default Home;
