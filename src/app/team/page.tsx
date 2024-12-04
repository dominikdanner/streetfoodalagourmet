"use client";
import Header from "../../components/Header";
import { Headline } from "../../components/Headline";
import Footer from "../../components/Footer";
import Image from "next/image";
import React from "react";

import KrautSVG from "../../../public/Kraut.svg";
import LeafSVG from "../../../public/Leaf1.svg";

export default function Team() {
  return (
    <React.Fragment>
      <Header></Header>
      <TeamPictureSection />
      <Footer />
    </React.Fragment>
  );
}

const TeamPictureSection = () => {
  return (
    <div className="flex flex-col justify-center items-center container pt-40">
      <div className="relative flex flex-col items-center w-full">
        <Image
          src={KrautSVG}
          alt="Garlic"
          className="absolute scale-150 top-[-70px] right-[-70px] z-10"
        ></Image>
        <Image
          src={LeafSVG}
          alt="Onion"
          className="absolute opacity-10 -rotate-90 left-[-100px] -bottom-[120px] z-10"
        ></Image>
        <Headline>Unser Team</Headline>
        <div className="flex justify-center items-center w-full mt-10 bg-gray-200 h-[600px] rounded-lg text-xl">
          Team Foto
        </div>
      </div>

      <div className="flex flex-col items-center w-full mt-20">
        <Headline>Alle Teammitglieder</Headline>

        <div className="flex mt-10 flex-wrap justify-center items-center gap-5">
          <TeamMemberCard name={"Kevin Frick"} role={"Role"}></TeamMemberCard>
          <TeamMemberCard name={"Raphael Mayer"} role={"Role"}></TeamMemberCard>
          <TeamMemberCard name={"Lukas Mayer"} role={"Role"}></TeamMemberCard>
          <TeamMemberCard name={"Laurenz Mayer"} role={"Role"}></TeamMemberCard>
          <TeamMemberCard name={"Florian"} role={"Role"}></TeamMemberCard>
          <TeamMemberCard name={"Kevin"} role={"Role"}></TeamMemberCard>
          <TeamMemberCard name={"Leonie"} role={"Role"}></TeamMemberCard>
          <TeamMemberCard
            name={"Nadine Frühwirth"}
            role={"Role"}
          ></TeamMemberCard>
          <TeamMemberCard
            name={"Dominik Danner"}
            role={"Role"}
          ></TeamMemberCard>
          <TeamMemberCard name={"Peter"} role={"Role"}></TeamMemberCard>
        </div>
      </div>
    </div>
  );
};

interface TeamMemberCardProps extends React.PropsWithChildren {
  name: String;
  role: String;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = (props) => {
  return (
    <div className="flex flex-col relative justify-center items-center w-80 h-fit lg:py-10">
      <div className="absolute bg-highlight rounded-full h-16 w-16 bottom-[120px] left-[30px]"></div>
      <div className="bg-gray-200 rounded-full w-64 h-64"></div>
      <h1 className="font-semibold text-xl mt-2">{props.name}</h1>
      <p className="text-gray-400">{props.role}</p>
    </div>
  );
};
