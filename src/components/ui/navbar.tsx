import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { IconType } from "react-icons";
import { BiHomeAlt2, BiFolder } from "react-icons/bi";
import { FaRegNewspaper } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";

export type NavLink = {
  name: string;
  href: string;
  icon: IconType;
  description: string;
};

export const NAV_LINKS: NavLink[] = [
  {
    name: "Home",
    href: "/",
    icon: BiHomeAlt2,
    description: "Home page, with links to other pages.",
  },
  {
    name: "Profile",
    href: "/profile",
    icon: IoPersonCircle,
    description: "Personal information and links.",
  },
  {
    name: "Projects",
    href: "/projects",
    icon: BiFolder,
    description: "Projects and repositories.",
  },
  {
    name: "Blog",
    href: "/blog",
    icon: FaRegNewspaper,
    description: "Blog posts and articles.",
  },
];

const Navbar: FC = () => {
  return (
    <div className="fixed w-full p-2 top-0">
      <nav className="w-full max-w-5xl bordered mx-auto p-2 rounded-lg flex overflow-hidden">
        <Link href="/">
          <Image
            src="/icon.png"
            width={36}
            height={36}
            alt=""
            className="w-9 h-9 rounded-md bordered"
          />
        </Link>
        <div className="flex flex-1 justify-end">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className="flex gap-2 justify-end items-end button  p-1 m-1 rounded-md"
            >
              <link.icon className="w-5 h-5" />
              <span className="text-sm hidden xs:inline-block">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
