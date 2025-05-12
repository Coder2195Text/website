import { ProjectData } from "@/app/projects/page";
import { ProjectType } from "@/graphql/generated/graphql";
import Image from "next/image";
import Link from "@/components/ui/link";
import { FC } from "react";
import { IconType } from "react-icons";
import { FaCode } from "react-icons/fa";
import { FaThumbtack } from "react-icons/fa6";
import { GoProjectRoadmap } from "react-icons/go";
import { MdOutlineVideoLibrary } from "react-icons/md";

const TYPE_MAP: {
  [key in ProjectType]: {
    icon: IconType;
  };
} = {
  coding: {
    icon: FaCode,
  },
  video: {
    icon: MdOutlineVideoLibrary,
  },
  other: {
    icon: GoProjectRoadmap,
  },
};

const ProjectCard: FC<{ project: ProjectData }> = ({ project }) => {
  const TypeIcon = TYPE_MAP[project.projectType].icon;
  return (
    <Link
      className="button rounded-lg overflow-hidden"
      href={`/projects/${project.slug}`}
      // null doesn't go into the aria-description, use !
      aria-description={project.excerpt!}
    >
      <figure className="aspect-video relative">
        <Image
          src={project.coverImage?.url || "https://picsum.photos/800/450"}
          alt={project.title}
          fill
          className="object-cover"
        />
      </figure>
      <div className="p-2">
        <h4 className="card-title tracking-tight flex items-center gap-2">
          {project.featured && <FaThumbtack className="inline w-6 h-6" />}{" "}
          {project.title}
        </h4>
        <div className="flex items-center gap-2">
          <div className="text-sm text-mocha-overlay2">
            <TypeIcon className="inline-block" />
          </div>
          <div className="text-sm text-mocha-overlay2">
            {new Date(project.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
