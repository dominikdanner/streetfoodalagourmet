import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";

// Static Imports
import OnionSVG from "../../../public/Onion.svg";
import GarlicSVG from "../../../public/Garlic.svg";
import KrautSVG from "../../../public/Kraut.svg";
import Kraut2SVG from "../../../public/Kraut2.svg";
import PanSVG from "../../../public/Pan.svg";
import Kleeblatt from "../../../public/Kleblatt.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Team | Streetfood a la Gourmet",
  description: "Streetfood Verein based in Pregarten",
};

export default function TeamOverviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative overflow-hidden flex flex-col items-center w-full">
      {/** Background Placement */}
      <Image
        src={GarlicSVG}
        alt="Garlic"
        className="absolute right-[100px] top-[1340px] -rotate-45 scale-125"
      ></Image>
      <Image
        src={Kraut2SVG}
        alt="Garlic"
        className="absolute scale-100 top-[750px] left-[500px] -z-50"
      ></Image>
      <Image
        src={PanSVG}
        alt="Pan"
        className="absolute scale-125 bottom-[10px] left-[100px] lg:bottom-[200px] lg:left-[100px] -z-50"
      ></Image>

      {children}
    </div>
  );
}
