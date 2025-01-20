"use client";

import Link from "next/link";
import { FC } from "react";
import { NAV_LINKS, NavLink } from "../ui/navbar";
import { IoChevronForwardSharp } from "react-icons/io5";

const HomeLink: FC<{
  link: NavLink;
}> = ({ link: { href, name, description } }) => {
  return (
    <Link
      href={href}
      className="group block font-extralight text-2xl p-2 my-4 rounded-md button"
    >
      <div className="flex items-center">
        <IoChevronForwardSharp className="w-0 h-6 group-hover:w-6 transition-[width] duration-300  " />
        <div className="flex-1">{name}</div>
      </div>
      <div className="max-h-0 w-full font-normal text-base group-hover:max-h-12 transition-all duration-500 overflow-hidden">
        {description}
      </div>
    </Link>
  );
};

export const HomeLinks = () => {
  return (
    <div>
      {NAV_LINKS.slice(1).map((link, idx) => (
        <HomeLink key={idx} link={link} />
      ))}
    </div>
  );
};
