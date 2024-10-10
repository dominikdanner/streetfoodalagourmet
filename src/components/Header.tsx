import Image from "next/image";
import Logo from "../../public/Streetfood.png";
import { useRouter } from "next/navigation";
import { useScrollOffset, useWindowSize } from "../util/Hooks";
import { IconButton } from "./Buttons";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import React, { useState } from "react";
import { BookIcon } from "./Icons";

export default function Header() {
  const windowSize = useWindowSize();

  return (
    <React.Fragment>
      {windowSize.width! <= 1100 ? (
        <SmartphoneNavigation />
      ) : (
        <DesktopNavigation />
      )}
    </React.Fragment>
  );
}

const SmartphoneNavigation = () => {
  const router = useRouter();
  const scrollOffset = useScrollOffset();

  return (
    <React.Fragment>
      {/** Background Placement */}
      <div className="absolute w-[1100px] h-[1100px] rounded-full border border-gray-300 -left-[600px] -top-[900px] lg:-left-[470px] lg:-top-[670px] -z-50"></div>
      <div className="absolute w-[1100px] h-[1100px] rounded-full border border-gray-300 -left-[560px] -top-[870px] lg:-left-[600px] lg:-top-[560px] -z-50"></div>
      <div className="absolute w-[1100px] h-[1100px] rounded-full border border-gray-300 -left-[640px] -top-[830px] lg:-left-[490px] lg:-top-[730px] -z-50"></div>

      <div className="fixed w-full z-50">
        <header
          className={
            scrollOffset.y! < 1
              ? "flex justify-between items-center transition-all h-24 px-6"
              : "flex justify-between items-center h-20 shadow-2xl  bg-white transition-all duration-500 ease-in-out px-6"
          }
        >
          <div className="cursor-pointer" onClick={() => router.push("/")}>
            <Image src={Logo} width={130} height={130} alt="20" />
          </div>

          <SmarthphoneNavigationMenu />
        </header>
      </div>
    </React.Fragment>
  );
};

const SmarthphoneNavigationMenu = () => {
  const [isNavigationMenuExpanded, setNavigationMenuExpanded] = useState(false);

  return (
    <React.Fragment>
      <div
        className="flex flex-col gap-1.5 scale-110 justify-center items-center transition-all w-fit h-full cursor-pointer z-50"
        onClick={() => setNavigationMenuExpanded(!isNavigationMenuExpanded)}
      >
        <div
          className={
            isNavigationMenuExpanded
              ? "w-10 h-1 bg-black rounded-md rotate-45 transition-all translate-y-1"
              : "w-10 h-1 bg-black rounded-md transition-all"
          }
        ></div>
        <div
          className={
            isNavigationMenuExpanded
              ? "hidden"
              : "w-10 h-1 bg-black rounded-md transition-all"
          }
        ></div>
        <div
          className={
            isNavigationMenuExpanded
              ? "w-10 h-1 bg-black rounded-md -rotate-45 transition-all -translate-y-1.5"
              : "w-10 h-1 bg-black rounded-md transition-all"
          }
        ></div>
      </div>

      {isNavigationMenuExpanded ? (
        <div className="fixed transition-all right-0 top-20 bg-white w-full h-full animate-fade-in">
          <div className="flex flex-col justify-center items-center gap-10 mt-20">
            <SmarthphoneHeaderMenuItem
              href={"/"}
              alternative={[]}
              name={"Home"}
            />
            <SmarthphoneHeaderMenuItem
              href={"/team"}
              alternative={[]}
              name={"Team"}
            />
            <SmarthphoneHeaderMenuItem
              href={"/galerie"}
              alternative={["/galerie/album"]}
              name={"Galerie"}
            />
            <SmarthphoneHeaderMenuItem
              href={"/contact"}
              alternative={[]}
              name={"Kontakt"}
            />
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

const DesktopNavigation = () => {
  const router = useRouter();
  const scrollOffset = useScrollOffset();

  return (
    <React.Fragment>
      {/** Background Placement */}
      <div className="absolute w-[1100px] h-[1100px] rounded-full border border-gray-300 -left-[600px] -top-[900px] lg:-left-[470px] lg:-top-[670px] -z-50"></div>
      <div className="absolute w-[1100px] h-[1100px] rounded-full border border-gray-300 -left-[560px] -top-[870px] lg:-left-[600px] lg:-top-[560px] -z-50"></div>
      <div className="absolute w-[1100px] h-[1100px] rounded-full border border-gray-300 -left-[640px] -top-[830px] lg:-left-[490px] lg:-top-[730px] -z-50"></div>

      <div className="fixed w-full z-50">
        <header
          className={
            scrollOffset.y! < 1
              ? "flex justify-between mx-40 items-center h-28 transition-all"
              : "flex justify-between px-40 items-center h-32 shadow-sm  bg-white transition-all duration-200 ease-in-out"
          }
        >
          <div className="cursor-pointer" onClick={() => router.push("/")}>
            <Image src={Logo} width={200} height={200} alt="20" />
          </div>

          <div className="flex gap-10">
            <DesktopHeaderMenuItem href={"/"} alternative={[]} name="Home" />
            <DesktopHeaderMenuItem
              href={"/team"}
              alternative={[]}
              name="Team"
            />
            <DesktopHeaderMenuItem
              href={"/galerie"}
              alternative={["/galerie/album"]}
              name="Galerie"
            />
            <DesktopHeaderMenuItem
              href={"/contact"}
              alternative={[]}
              name="Kontakt"
            />
          </div>

          <IconButton
            Icon={<BookIcon />}
            onClick={() => router.push("tel:+43 660 8740280")}
          >
            Jetzt Buchen
          </IconButton>
        </header>
      </div>
    </React.Fragment>
  );
};

interface HeaderMenuItemProps {
  name: String;
  href: Url;
  alternative: String[];
}

const SmarthphoneHeaderMenuItem: React.FC<HeaderMenuItemProps> = (props) => {
  return (
    <div className="cursor-pointer font-semibold text-black text-2xl">
      <Link href={props.href}>{props.name}</Link>

      {typeof window !== "undefined" &&
      (document.location.pathname == props.href ||
        props.alternative.some(
          (route) => document.location.pathname == route
        )) ? (
        <div className="w-1/2 h-1 rounded-lg opacity-75 bg-black"></div>
      ) : null}
    </div>
  );
};

const DesktopHeaderMenuItem = (props: HeaderMenuItemProps) => {
  return (
    <div className="cursor-pointer font-semibold text-black h-full">
      <Link href={props.href} className="w-fit h-full">
        {props.name}
      </Link>
      {typeof window !== "undefined" &&
      (document.location.pathname == props.href ||
        props.alternative.some(
          (route) => document.location.pathname == route
        )) ? (
        <div className="w-1/2 h-1 rounded-lg opacity-75 bg-black"></div>
      ) : null}
    </div>
  );
};
