import { GET_PROJECT, hygraph } from "@/graphql";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FC } from "react";

export const revalidate = 300;

interface Params {
  params: Promise<{ slug: string }>;
}

const ProjectPage: FC<Params> = async ({ params }) => {
  const slug = (await params).slug;
  const data = await hygraph.request(GET_PROJECT, {
    slug,
  });

  if (!data.project) notFound();
  const { project } = data;

  return (
    <main>
      <div className="absolute left-0 top-0 w-full aspect-video flex items-center justify-center min-h-96 max-h-screen">
        <h1 className="font-light p-4 rounded-lg flex gap-3 items-center flex-wrap bg-mocha-overlay0/50 z-10  backdrop-blur-lg border-4 border-mocha-mauve">
          {project.title}
        </h1>
        <Image
          src={project.coverImage?.url || "https://picsum.photos/1280/720"}
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>
    </main>
  );
};

export default ProjectPage;
