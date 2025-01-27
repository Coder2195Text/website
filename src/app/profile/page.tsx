import Experience from "@/components/profile/experience";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Profile | Coder2195",
  description: "Learn more about me and my interests.",
};

const Profile: FC = () => {
  return (
    <main>
      <h1 className="font-light  py-4 flex gap-3 items-center flex-wrap">
        Profile
      </h1>
      <h6 className="my-4">
        Hey! Amber here, I&apos;m a software engineer, gamer and railfanner.
      </h6>
      <Experience />
    </main>
  );
};

export default Profile;
