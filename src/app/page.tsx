import { ScrollProvider } from "@/components/context/scroll";
import { SectionsPage } from "@/components/home/sections";
import { PageNav } from "@/components/ui/page-nav";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div>
      <ScrollProvider pages={5}>
        <SectionsPage />
        <PageNav />
      </ScrollProvider>
    </div>
  );
};

export default Home;
