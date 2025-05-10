"use client";

import Link from "@/components/ui/link";
import { FC } from "react";
import { NAV_LINKS, NavLink } from "../ui/navbar";
import { IoChevronForwardSharp } from "react-icons/io5";
import { easeInOut, motion } from "motion/react";
import { useLoaded } from "../context/loaded";

const HomeLink: FC<{
  link: NavLink;
  idx: number;
}> = ({ link: { href, name, description, description2 }, idx }) => {
  return (
    <motion.span
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: idx * 0.2 + 1.8,
          duration: 0.5,
          ease: easeInOut,
        },
      }}
    >
      <Link
        href={href}
        tooltip={description2}
        className="group block font-extralight text-2xl p-2 my-4 rounded-md button"
      >
        <div className="flex items-center">
          <IoChevronForwardSharp className="w-0 h-6 group-hover:w-6 transition-[width] duration-300" />
          <div className="flex-1">{name}</div>
        </div>
        <div className="max-h-0 w-full font-normal text-base group-hover:max-h-12 transition-all duration-500 overflow-hidden">
          {description}
        </div>
      </Link>
    </motion.span>
  );
};

const HomeLinks = () => {
  const { loaded } = useLoaded();
  return (
    <div>
      <h3>Explore My:</h3>
      {loaded &&
        NAV_LINKS.slice(1).map((link, idx) => (
          <HomeLink key={idx} link={link} idx={idx} />
        ))}
    </div>
  );
};

export default HomeLinks;
