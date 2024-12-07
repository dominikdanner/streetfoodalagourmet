import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Impressum | Streetfood a la Gourmet",
  description: "Streetfood Verein based in Pregarten",
};

export default function ImpressumLayoutView({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative overflow-hidden flex flex-col items-center w-full">
      {/** Background Placement */}

      {children}
    </div>
  );
}
