import { LavaLamp } from "@/components/home/lava-lamp";
import { LinkSuggest } from "@/components/home/link-suggest";
import { Title } from "@/components/home/title";
import { Page } from "@/components/ui/page";
import Link from "next/link";

import { FC } from "react";
import { MdOpenInNew } from "react-icons/md";

const Home: FC = () => {
  return (
    <Page className="h-screen w-screen">
      <div className="flex justify-between items-center h-full w-full flex-col -z-50 ">
        <div className="h-12" />
        <Title />
        <div>
          <LinkSuggest />{" "}
          <Link
            href="https://github.com/haljasala"
            target="_blank"
            className="h-4 text-xs text-white/50 hover:text-white transition-all duration-300"
          >
            Effect by @haljasala <MdOpenInNew className="inline" />
          </Link>
        </div>
      </div>
      <LavaLamp />
    </Page>
  );
};

export default Home;
