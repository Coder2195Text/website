"use client";

import { motion } from "motion/react";
import { FC, ReactNode } from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import { useLoaded } from "../context/loaded";
import { FaRegBuilding } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import Link from "../ui/link";

enum ExperienceType {
  WORK = "work",
  CERTIFICATION = "certification",
  INTERNSHIP = "internship",
  VOLUNTEER = "volunteer",
}

type Experience = {
  type: ExperienceType;
  title: ReactNode;
  company: ReactNode;
  date: string;
  description: ReactNode;
};

const EXPERIENCES: Experience[] = [
  {
    type: ExperienceType.INTERNSHIP,
    title: "Pathfinders CS4ALL Internship",
    company: (
      <>
        <Link href="https://cerbrec.com/" external>Cerbrec</Link>
      </>
    ),
    date: "Spring 2025",
    description: "We worked on helping improve their AI app that is used in ethical means. We primarily worked on organizing graph features and designing an algorithm and a explorer to test these out.",
  },
  {
    type: ExperienceType.INTERNSHIP,
    title: "Summer Design Institute Game Design Internship",
    company: (
      <>
        <Link href="https://www.schools.nyc.gov/" external>
          NYCDOE
        </Link>
        {" + "}
        <Link href="https://www.schools.nyc.gov/" external>
          MetaBronx
        </Link>
        {" + "}

        <Link href="https://www.schools.nyc.gov/" external>
          The Glass Files
        </Link>
      </>
    ),
    date: "Summer 2024",
    description:
      "In this game design internship, we covered aspects of game design, entrepreneurship, and marketing. I created a game that was presented at the end of the internship.",
  },
  {
    title: "Founder & Developer of Action",
    company: (
      <>
        <Link href="https://bthsaction.org/" external>
          BTHS Action
        </Link>
      </>
    ),
    type: ExperienceType.VOLUNTEER,
    date: "Summer 2023 - Spring 2024",
    description:
      "I developed and founded BTHS Action and its website, a volunteer club at my school dedicated to providing fair and legitimate opportunities to students to perform volunteer work. Resigned due to conflict with new executives about the core objective of the club.",
  },
];

const ExperienceItem: FC<{
  experience: Experience;
  index: number;
}> = ({ experience, index }) => {
  return (
    <motion.div
      className="p-4 rounded-md bordered bg-mocha-surface0"
      variants={{
        hidden: {
          opacity: 0,
          scaleY: 0,
        },
        visible: {
          scaleY: 1,
          opacity: 1,

          transition: {
            type: "spring",
            delay: 1.2 + index * 0.5,
            bounce: 0.4,
            duration: 0.75,
          },
        },
      }}
    >
      <h4 className="font-bold">{experience.title}</h4>
      <div className="flex p-2">
        <p className=" w-1/2">
          <FaRegBuilding className="inline mr-2 w-4 h-4" /> {experience.company}
        </p>
        <p className="w-1/2">
          <BsClockHistory className="inline mr-2 w-4 h-4" /> {experience.date}
        </p>
      </div>
      <p>{experience.description}</p>
    </motion.div>
  );
};

const Experience: FC = () => {
  const { loaded } = useLoaded();

  if (!loaded) return;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"

      viewport={{ once: true, amount: 0.25 }}

      variants={{
        hidden: {
          opacity: 0,
          y: 50,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
          },
        },
      }}
      className="min-h-screen"
    >
      <h3 className="flex">
        Experience &amp; Certifications
        <motion.div
          className="inline-block"
          variants={{
            hidden: {
              rotate: 0,
            },
            visible: {
              rotate: 90,
              transition: {
                delay: 0.5,
              },
            },
          }}
        >
          <IoChevronForwardSharp className="w-8 h-8 mx-4" />
        </motion.div>
      </h3>{" "}
      <div className=" rounded-lg my-4 flex gap-4 flex-col w-full relative  overflow-visible">
        {EXPERIENCES.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
