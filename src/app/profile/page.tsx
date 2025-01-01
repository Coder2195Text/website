import { Greet } from "@/components/profile/greet";
import { Journey, JourneyIntro } from "@/components/profile/journey";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Profile | Coder2195",
  description: "Profile page of Coder2195. Check out more about me!",
};

// height in how many vh

const Profile: FC = () => {
  return (
    <main className="overflow-hidden pointer-events-none">
      <div className="h-screen mt-[2000dvh] -z-50"></div>
      <Greet />
      <JourneyIntro />
      <Journey />
    </main>
  );
};

export default Profile;
