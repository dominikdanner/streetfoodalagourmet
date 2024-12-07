"use client";
import React from "react";
import Header from "../../components/Header";
import { Headline } from "@/components/Headline";

export default function Impressum() {
  return (
    <React.Fragment>
      <Header></Header>
      <ContactCard />
    </React.Fragment>
  );
}

const ContactCard = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-40 container">
      <Headline>Impressum</Headline>
    </div>
  );
};
