"use client";
import React from "react";
import Header from "../../components/Header";
import { Headline } from "@/components/Headline";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <React.Fragment>
      <Header></Header>
      <ContactCard />
      <Footer />
    </React.Fragment>
  );
}

const ContactCard = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-40 container">
      <Headline>Kontakt</Headline>
      <div className="flex w-full justify-center">
        <div className="w-full mx-32 bg-white mt-10 lg:rounded-lg shadow-lg">
          <h1 className="text-kaushan-script text-3xl">
            Lorem ipsum dolor sit.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore non
            iusto iste. Amet facere dolore porro dolores aliquid numquam harum?
          </p>

          <div>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};
