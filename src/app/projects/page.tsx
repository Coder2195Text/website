// import { hygraph } from "@/graphql";
import ProjectCard from "@/components/projects/card";
import { GET_PROJECTS, hygraph } from "@/graphql";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Projects | Coder2195",
  description: "Explore my creations and contributions.",
};

export const revalidate = 300;

function fetchData() {
  return hygraph.request(GET_PROJECTS);
}

export type ProjectsData = Awaited<ReturnType<typeof fetchData>>;
export type ProjectData = ProjectsData["projects"][number];


const Projects: FC = async () => {
  const data = await fetchData();

  return (
    <main>
      <h1 className="font-light  py-4 flex gap-3 items-center flex-wrap">
        Projects
      </h1>
      <div className="my-4 mb-8">Some of the stuff I have been working on...</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
};

export default Projects;
