"use client";
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Pizza from "../../public/Pizza.png";
import GaleriePhoto1 from "../../public/GaleriePreview/Preview_1.jpg";
import GaleriePhoto2 from "../../public/GaleriePreview/Preview_2.jpg";
import GaleriePhoto3 from "../../public/GaleriePreview/Preview_3.jpg";
import GaleriePhoto4 from "../../public/GaleriePreview/Preview_4.jpg";
import OnionSVG from "../../public/Onion.svg";
import GarlicSVG from "../../public/Garlic.svg";
import KrautSVG from "../../public/Kraut.svg";
import Kraut2SVG from "../../public/Kraut2.svg";
import PanSVG from "../../public/Pan.svg";
import Kleeblatt from "../../public/Kleblatt.svg";
import LeafSVG from "../../public/Leaf1.svg";
import { Button, InvertedButton } from "../components/Buttons";
import { useRef } from "react";
import { Headline } from "../components/Headline";
import {
  KidIcon,
  LocationIcon,
  RelievedIcon,
  VegetarianFoodIcon,
} from "../components/Icons";
import Link from "next/link";
import { useWindowSize } from "../util/Hooks";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Image
        src={LeafSVG}
        alt="Onion"
        className="absolute opacity-10 right-[700px] top-[100px] -rotate-90"
      ></Image>
      <Image
        src={GarlicSVG}
        alt="Garlic"
        className="absolute right-[250px] top-[320px] lg:right-[100px] lg:top-[600px] scale-125"
      ></Image>
      <Image
        src={GarlicSVG}
        alt="Garlic"
        className="absolute right-[800px] top-[700px] -rotate-45 scale-125"
      ></Image>
      <Image
        src={KrautSVG}
        alt="Garlic"
        className="absolute scale-150 top-[550px] left-[250px] -z-50"
      ></Image>
      <Image
        src={Kraut2SVG}
        alt="Garlic"
        className="absolute scale-100 top-[750px] left-[500px] -z-50"
      ></Image>
      <Image
        src={PanSVG}
        alt="Pan"
        className="absolute scale-125 top-[1400px] left-[100px] lg:top-[1100px] lg:left-[200px] -z-50"
      ></Image>
      <Image
        src={KrautSVG}
        alt="Garlic"
        className="absolute scale-150 rotate-180 top-[1900px] left-[400px] -z-50"
      ></Image>
      <Image
        src={KrautSVG}
        alt="Garlic"
        className="absolute scale-150 top-[1400px] right-[300px] -z-50"
      ></Image>

      {/** Page layout Begin */}
      <Header />
      <LandingSection />
      <AboutUsSection />
      <QualitiesSection />
      <TeamSection />
      <Footer />
    </div>
  );
}

const LandingSection = () => {
  const windowSize = useWindowSize();

  return (
    <div className="flex justify-center h-screen pt-16">
      <div className="flex xl:m-24 lg:m-20 md:m-16 sm:m-10 m-8 container flex-wrap-reverse">
        <div className="flex flex-col justify-center gap-5 lg:gap-3 p-5 xl:px-36 lg:px-26 md:px-10 min-w-96 lg:h-full w-full lg:w-1/2">
          <h1 className="font-bold text-4xl lg:text-6xl">
            Entdecke den Geschmack der Welt
          </h1>
          <p className="">
            Unsere Philosophie: Kochen mit Liebe und den besten lokalen Zutaten
          </p>
          <div className="mt-5 flex gap-4">
            <Link href={"/galerie"}>
              <InvertedButton>Zur Galerie</InvertedButton>
            </Link>
            <Link href={"/contact"}>
              <Button>Kontaktiere uns</Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center lg:w-1/2 w-full min-w-96 h-1/2 lg:h-full">
          <Image
            src={Pizza}
            width={windowSize.width! <= 1050 ? 500 : 1000}
            height={windowSize.width! <= 3050 ? 500 : 1000}
            alt="Pizza"
            className="rotate-12 scale-125"
          />
        </div>
      </div>
    </div>
  );
};

const AboutUsSection = () => {
  const AboutUsRef = useRef(null);

  return (
    <div className="flex flex-col items-center justify-center z-50 bg-gray-300 lg:p-10 bg-opacity-25">
      <div className={`flex container flex-wrap`}>
        <div className="flex justify-center lg:justify-end items-center flex-wrap relative w-full lg:w-1/2">
          <Link href={"/galerie"}>
            <div
              className={`grid grid-cols-2 min-w-96 w-full px-5 py-5 transition-all hover:opacity-90 hover:scale-105 cursor-pointer`}
            >
              <div className="flex justify-end items-end mr-3 mb-3 hover:scale-105 transition-all">
                <Image
                  src={GaleriePhoto1}
                  alt="Galerie Photo 1"
                  className="w-72 h-60 object-cover"
                />
              </div>
              <div className="flex justify-start items-end ml-3 mb-3 hover:scale-105 transition-all">
                <Image
                  src={GaleriePhoto2}
                  alt="Galerie Photo 2"
                  className="w-56 h-fit object-contain"
                />
              </div>
              <div className="flex justify-end items-start mt-3 mr-3 hover:scale-105 transition-all">
                <Image
                  src={GaleriePhoto3}
                  alt="Galerie Photo 3"
                  className="w-44 h-fit object-contain"
                />
              </div>
              <div className="flex justify-start items-start mt-3 ml-3 hover:scale-105 transition-all">
                <Image
                  src={GaleriePhoto4}
                  alt="Galerie Photo 4"
                  className="w-72 h-fit object-contain"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex justify-center items-center min-w-96 w-full lg:w-1/2">
          <section ref={AboutUsRef} className="p-5">
            <div className="flex justify-center items-center mt-5 lg:justify-start lg:mt-0">
              <Headline>Über uns</Headline>
            </div>
            <h2 className="text-xl mt-5 font-bold">
              Willkommen bei Streetfood a la Gourmet
            </h2>
            <div className="flex flex-col gap-4 mt-5">
              <p>
                Wir sind Streetfood à la Gourmet, ein Kochverein, der seit 2021
                die Vielfalt der Kulinarik feiert. Mit zehn motivierten
                Mitgliedern verbinden wir die Aromen der Welt mit kreativem
                Streetfood-Charme und Gourmetkunst. Für uns ist Essen mehr als
                Genuss – es ist Leidenschaft und verbindet Kulturen!
              </p>
              <p>
                Unser Team setzt sich aus zehn motivierten, jungen Mitgliedern
                zusammen, die alle eine gemeinsame Leidenschaft teilen: Essen.
                Jeder von uns bringt einzigartige Fähigkeiten und kulinarische
                Ideen ein, was uns ermöglicht, immer neue, kreative Gerichte zu
                kreieren.
              </p>
            </div>
            <div className="flex mt-10 flex-wrap gap-2 lg:gap-0">
              <div className="flex w-1/2 h-28 min-w-72">
                <div className="h-full min-w-3 bg-highlight"></div>
                <div className="flex items-center p-5 gap-6">
                  <h1 className="text-7xl font-semibold text-highlight ml-2">
                    10
                  </h1>
                  <p className="text-gray-400 font-semibold p-6">
                    Motivierte Teammitglieder
                  </p>
                </div>
              </div>
              <div className="flex w-1/2 h-28 min-w-72">
                <div className="h-full min-w-3 bg-highlight"></div>
                <div className="flex items-center p-5 gap-6">
                  <h1 className="text-7xl font-semibold text-highlight ml-2">
                    6
                  </h1>
                  <p className="text-gray-400 font-semibold p-6">
                    Veranstaltungen kulinarisch betreut
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const QualitiesSection = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <Headline>Unsere Qualitäten</Headline>
      <div className="flex container justify-center items-center flex-wrap mt-14 gap-8 lg:px-5">
        <QualityCard
          title={"Junges Team"}
          description={
            "Ein junges, kreatives Team, das globale Aromen mit Leidenschaft vereint."
          }
        >
          <KidIcon className="text-highlight" height={50} width={50}></KidIcon>
        </QualityCard>
        <QualityCard
          title={"Qualitätive Zutaten"}
          description={
            "Hochwertige Zutaten, kreative Zubereitung – für einzigartigen Geschmack und Genuss."
          }
        >
          <VegetarianFoodIcon
            height={50}
            width={50}
            className="text-highlight"
          ></VegetarianFoodIcon>
        </QualityCard>
        <QualityCard
          title={"Teamgeist"}
          description={
            "Wir verwenden frische, lokale Zutaten für nachhaltiges Geschmackserlebnisse."
          }
        >
          <RelievedIcon
            height={50}
            width={50}
            className="text-highlight"
          ></RelievedIcon>
        </QualityCard>
        <QualityCard
          title={"Lokalität"}
          description={
            "Wir verwenden frische, lokale Zutaten für nachhaltiges Geschmackserlebnisse."
          }
        >
          <LocationIcon
            height={50}
            width={50}
            className="text-highlight"
          ></LocationIcon>
        </QualityCard>
      </div>
    </div>
  );
};

interface QualityCardProps extends React.PropsWithChildren {
  title: String;
  description: String;
}

const QualityCard: React.FC<QualityCardProps> = ({
  description,
  title,
  children,
}) => {
  return (
    <div className="flex flex-col gap-2 p-8 lg:rounded-lg md:hover:scale-105 transition-all cursor-pointer shadow-xl bg-white min-w-40 max-w-full lg:max-w-80">
      {children}
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

const TeamSection = () => {
  return (
    <div className="flex h-auto justify-center mt-32">
      <div className="flex relative h-max flex-col items-center container gap-3">
        <Image
          src={Kraut2SVG}
          alt="Garlic"
          className="absolute bottom-[-150px] left-[-120px] -rotate-90 -z-50 md:z-50"
        ></Image>
        <Image
          src={Kleeblatt}
          alt="Garlic"
          className="absolute top-[-200px] right-[-200px] lg:top-[-90px] lg:right-[-80px] opacity-10 rotate-12"
        ></Image>

        <Headline>Unser Team</Headline>
        <div className="flex flex-col justify-center items-center lg:shadow-2xl rounded-lg mt-10 lg:bg-white">
          <div className="flex justify-around w-full flex-wrap gap-5 lg:gap-5 px-5 ">
            <TeamMemberCard fullname={"Kevin Frick"} role={"Meister Koch"} />
            <TeamMemberCard fullname={"Raphael Mayer"} role={"Enthusiast"} />
            <TeamMemberCard fullname={"Lukas Mayer"} role={"Pizza Profi"} />
            <TeamMemberCard fullname={"Dominik Danner"} role={"IT Admin"} />
          </div>
          <div className="my-5 lg:my-5">
            <Button>
              <Link href={"/team"} className="w-full h-full">
                Zum gesamten Team
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface TeamMemberCardProps {
  fullname: String;
  role: String;
}

const TeamMemberCard = (props: TeamMemberCardProps) => {
  return (
    <div className="flex flex-col min-w-80 items-center lg:py-10 rounded-xl cursor-default">
      <div className="w-72 h-72 rounded-full bg-gray-300"></div>
      <h1 className="font-semibold text-lg mt-4">{props.fullname}</h1>
      <p className="text-sm text-gray-600">{props.role}</p>
    </div>
  );
};
