import AboutMe from "@/components/profile/about-me";
import Experience from "@/components/profile/experience";
import Skills from "@/components/profile/skills";
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
      <AboutMe />
      <Skills />
      <Experience />
    </main>
  );
};

export default Profile;
