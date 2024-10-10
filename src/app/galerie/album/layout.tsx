import { useQuery } from "@tanstack/react-query";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Album | Streetfood a la Gourmet",
  description: "Streetfood Verein based in Pregarten",
};

export default function TeamOverviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <Suspense>
      <div className="relative overflow-hidden flex flex-col items-center w-full">
        {/** Background Placement */}

        {children}
      </div>
    </Suspense>
  );
}
