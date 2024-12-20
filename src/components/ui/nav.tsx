"use client";

import { FC } from "react";
import { useLoaded } from "../context/loaded";
import Image from "next/image";
import Link from "next/link";
import { FaRegFolderOpen, FaRegNewspaper } from "react-icons/fa";
import { MdOutlineLink, MdOutlinePerson } from "react-icons/md";
import { IconType } from "react-icons";
import { motion } from "motion/react";

const LINKS: {
  icon: IconType;
  href: string;
}[] = [
  {
    icon: MdOutlinePerson,
    href: "/profile",
  },
  {
    icon: FaRegFolderOpen,
    href: "/projects",
  },
  {
    icon: FaRegNewspaper,
    href: "/blog",
  },
  {
    icon: MdOutlineLink,
    href: "/links",
  },
];

export const NavBar: FC = () => {
  const [loaded] = useLoaded();

  const links = LINKS.map(({ icon: Icon, href }, i) => (
    <Link key={i} href={href} className="button p-1 rounded-full">
      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
          transition: {
            delay: i * 0.2 + 0.7,
            duration: 0.2,
          },
        }}
      >
        <Icon />
      </motion.div>
    </Link>
  ));
  links.splice(2, 0, <div className="w-16" key="divider" />);

  return (
    <nav
      className={`fixed flex justify-center w-screen transition-[top] duration-500 ${
        loaded ? "top-0" : "-top-16"
      }`}
    >
      <div className="backdrop-blur-md bg-zinc-600/50 my-3.5  rounded-full h-7 w-40 flex items-stretch justify-between gap-1 p-0.5">
        {loaded && links}
      </div>
      <span
        className={`fixed ease-in-out transition-all duration-500 left-1/2 -translate-x-1/2 -translate-y-1/2  ${
          !loaded ? "w-24 h-24 top-1/2 " : "w-10 h-10 top-7"
        }`}
      >
        <Link href="/">
          <Image
            src="/profile.jpg"
            alt=""
            fill
            className="rounded-full transition-all duration-200"
          />
        </Link>
      </span>
    </nav>
  );
};
