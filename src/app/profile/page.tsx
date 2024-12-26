import { Greet } from "@/components/profile/greet";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Profile | Coder2195",
  description: "Profile page of Coder2195. Check out more about me!",
};

// height in how many vh

const Profile: FC = () => {
  return (
    <main className="overflow-hidden">
      <Greet />
      <div className="h-screen mt-[50dvh]">More stuff</div>
    </main>
  );
};

export default Profile;
