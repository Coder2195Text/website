"use client";

import { FC } from "react";
import { useLoaded } from "../context/loaded";
import Image from "next/image";

export const ProfileFly: FC = () => {
  const loaded = useLoaded();

  return (
    <div
      className={`fixed ease-in-out transition-all duration-500 left-1/2 -translate-x-1/2  -translate-y-1/2  ${
        !loaded ? "w-24 h-24 top-1/2" : "w-10 h-10 top-7"
      }`}
    >
      <Image src="/profile.jpg" alt="" fill className="rounded-full" />
    </div>
  );
};
