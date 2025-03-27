// import { hygraph } from "@/graphql";
import { GET_PROJECTS, hygraph } from "@/graphql";
import { gql } from "graphql-request";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Projects | Coder2195",
  description: "Explore my creations and contributions.",
};

export const revalidate = 300;


const Projects: FC = async () => {
  const data = await hygraph.request(GET_PROJECTS);

  return (
    <main>
      <h1 className="font-light  py-4 flex gap-3 items-center flex-wrap">
        Projects
      </h1>
      {
        JSON.stringify(data.projects)
      }
    </main>
  );
};

export default Projects;
