import { GET_PROJECT, GET_PROJECT_METADATA, hygraph } from "@/graphql";
import { Metadata } from "next";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FC } from "react";

interface Params {
  params: Promise<{ slug: string }>;
}

export const revalidate = 300;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const slug = (await params).slug;
  const data = await hygraph.request(GET_PROJECT_METADATA, {
    slug,
  });

  if (!data.project)
    return {
      title: "Project Not Found | Coder2195",
      description: "Project not found. Broken link?",
    };
  const { project } = data;

  const title = `Project: ${project.title} | Coder2195`;
  const description = project.excerpt || "Check out this cool project I made!";
  const openGraph: OpenGraph =
    project.projectType == "video" && project.embed
      ? {
          videos: {
            url: project.embed,
            secureUrl: project.embed,
          },
        }
      : {
          images: [project.coverImage?.url || "/icon.png"],
        };

  return {
    title,
    description,
    openGraph,
    twitter: {
      card: "summary_large_image",
    },
  };
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
        <h1 className="p-4 rounded-lg flex gap-3 items-center flex-wrap bg-mocha-overlay0/50 z-10  backdrop-blur-lg border-4 border-mocha-mauve">
          {project.title}
        </h1>
        <Image
          src={project.coverImage?.url || "https://picsum.photos/1280/720"}
          alt=""
          fill
          className="object-cover object-center -z-10 mask-t-from-10%"
        />
      </div>
      <div className="mt-[100vh] grid grid-cols-2 gap-4">
        {project.embed && (
          <div>
            <h1 className="my-4">Preview</h1>
            <iframe
              src={project.embed}
              className="w-full aspect-video rounded-lg bordered"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowFullScreen
            ></iframe>
          </div>
        )}
        <div>
          <h1 className="my-4">Description</h1>
          <div className="bordered rounded-lg w-full p-2">
            {project.description.markdown}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
