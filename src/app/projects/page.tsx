import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Projects | Coder2195",
  description: "Explore my creations and contributions.",
};

export const revalidate = 300;

const Projects: FC = () => {
  // const projects = await fetch
  return (
    <main>
      <h1 className="font-light  py-4 flex gap-3 items-center flex-wrap">
        Projects
      </h1>
    </main>
  );
};

export default Projects;
