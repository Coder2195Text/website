import type { Metadata } from "next";
import { DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { FC, PropsWithChildren } from "react";
import { Splash } from "@/components/ui/splash";
import { Providers } from "@/components/context/providers";
import { ProfileFly } from "@/components/ui/profile";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
});
const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Coder2195",
  description: "Personal website of Coder2195",
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${spaceMono.variable}`}>
        <Providers>
          <Splash />
          <ProfileFly />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
