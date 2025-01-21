"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { FC } from "react";
import { IconType } from "react-icons";
import { FaGithub, FaRedditAlien, FaYoutube } from "react-icons/fa";
import { useLoaded } from "../context/loaded";
import { PiEnvelopeLight } from "react-icons/pi";

type Social = {
  name: string;
  url: string;
  icon: IconType;
};

const SOCIALS: Social[] = [
  {
    name: "GitHub",
    url: "https://github.com/coder2195text/",
    icon: FaGithub,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@coder2195text",
    icon: FaYoutube,
  },
  {
    name: "Reddit",
    url: "https://www.reddit.com/user/coder2195",
    icon: FaRedditAlien,
  },
  {
    name: "Email",
    url: "mailto:coder2195mail@gmail.com",
    icon: PiEnvelopeLight,
  },
];

const Socials: FC = () => {
  const { loaded } = useLoaded();
  return (
    <div>
      <h3>Reach Out.</h3>
      <div className="flex flex-wrap items-center my-4 gap-4">
        {loaded &&
          SOCIALS.map((social, index) => {
            const Icon = social.icon;
            return (
              <Link
                href={social.url}
                key={index}
                target="_blank"
                className="hover:scale-125 transition-all duration-300 "
              >
                <motion.div
                  initial={{
                    scale: 0,
                  }}
                  animate={{
                    scale: 1,
                    transition: {
                      type: "spring",
                      delay: index * 0.2 + 1.5,
                      duration: 0.5,
                    },
                  }}
                >
                  <Icon size={48} className="w-12 h-12" />
                </motion.div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Socials;
