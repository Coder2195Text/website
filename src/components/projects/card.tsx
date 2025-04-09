import { ProjectData } from "@/app/projects/page";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";


const ProjectCard: FC<{ project: ProjectData }> = ({
  project,
}) => {

  return (
    <Link className="button rounded-lg overflow-hidden" href={`/projects/${project.slug}`}>
      <figure className="aspect-video relative">
        <Image src={project.coverImage?.url || "https://picsum.photos/400/400"} alt={project.title} fill className="object-cover" />
      </figure>
      <div className="p-2">
        <h4 className="card-title tracking-tight">{project.title}</h4>

      </div>
    </Link>
  );

};

export default ProjectCard;