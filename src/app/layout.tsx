import type { Metadata } from "next";
import { DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Providers from "@/components/context";
import Splash from "@/components/ui/splash";
import PageTransition from "@/components/ui/transition";
import Tooltip from "@/components/ui/tooltip";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: "variable",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Coder2195",
  description: "Coder2195's personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} ${dmSans.variable} antialiased`}>
        <Providers>
          <Navbar />

          <div className="mx-auto w-full max-w-5xl pt-16 p-2 overflow-x-auto overflow-hidden h-full">
            <PageTransition>{children}</PageTransition>
          </div>
          <Tooltip />

          <Splash />
        </Providers>
      </body>
    </html>
  );
}
