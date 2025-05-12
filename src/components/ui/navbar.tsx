"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "@/components/ui/link";
import { FC } from "react";
import { IconType } from "react-icons";
import { BiHomeAlt2, BiFolder } from "react-icons/bi";
import { FaRegNewspaper } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { useLoaded } from "../context/loaded";

export type NavLink = {
  name: string;
  href: string;
  icon: IconType;
  description: string;
  tooltip?: string;
};

export const NAV_LINKS: NavLink[] = [
  {
    name: "Home",
    href: "/",
    icon: BiHomeAlt2,
    description: "Home page, with links to other pages.",
    tooltip: "This is the page you are on, silly goose! 😝",
  },
  {
    name: "Profile",
    href: "/profile",
    icon: IoPersonCircle,
    description: "Learn more about me and my skills.",
    tooltip: "Amber has a lot of skill to show you! ‼️",
  },
  {
    name: "Projects",
    href: "/projects",
    icon: BiFolder,
    description: "Projects and repositories.",
    tooltip: "This the juicy stuff you looking for... 🔥",
  },
  {
    name: "Blog",
    href: "/blog",
    icon: FaRegNewspaper,
    description: "Blog posts and articles.",
    tooltip: "Oh, uh this is just my yapping space. 🙃",
  },
];

const Navbar: FC = () => {
  const { loaded } = useLoaded();
  if (!loaded) return null;

  return (
    <div className="fixed w-full p-2 top-0 z-40">
      <motion.nav
        className="w-full max-w-5xl bordered mx-auto p-2 rounded-lg flex overflow-hidden items-center bg-mocha-base/50 backdrop-blur-md select-none"
        initial={{
          scale: 2,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: {
            type: "spring",
            duration: 0.75,
            bounce: 0.4,
          },
        }}
      >
        <Link href="/">
          <Image
            src="/icon.png"
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-md bordered"
          />
        </Link>
        <div className="flex flex-1 justify-end">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              aria-description={link.description}
              className="flex gap-1 justify-end items-center button bg-transparent p-1 m-1 rounded-md"
            >
              <link.icon className="w-5 h-5" />
              <span className="text-sm hidden xs:inline-block">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
