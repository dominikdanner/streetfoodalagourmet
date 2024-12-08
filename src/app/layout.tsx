import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReactQueryProvider from "../providers/ReactQueryProvider";
import "../../globals.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Home | Streetfood a la Gourmet",
  description: "Streetfood Verein based in Pregarten",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
        </body>
    </html>
  );
}
