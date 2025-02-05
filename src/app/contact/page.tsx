"use client";
import React from "react";
import Header from "../../components/Header";
import { Headline, InvertedHeadline } from "@/components/Headline";
import Footer from "@/components/Footer";
import { Button, InvertedButton } from "@/components/Buttons";

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
    <div className="flex flex-col justify-center items-center m-40 h-full container">
      <div className="flex w-full justify-center">
        <div className="w-full max-w-2xl bg-white p-10 mt-10 lg:rounded-lg shadow-xl text-center">
          <div className="w-full flex justify-center items-center pb-10">
            <Headline>Kontakt</Headline>
          </div>
          <p className="text-gray-700 mb-6">
            Sie haben Fragen oder möchten uns buchen? Schreiben Sie uns einfach!
          </p>
          <div className="flex flex-col gap-4">
            <input type="text" placeholder="Name" className="p-3 border rounded-lg" />
            <input type="email" placeholder="E-Mail" className="p-3 border rounded-lg" />
            <textarea placeholder="Nachricht" className="p-3 border rounded-lg h-32"></textarea>
            <Button>Jetzt Buchen</Button>
          </div>
          <div className="mt-6 text-gray-600">
            <p>📍 4240 Pregarten</p>
            <p>📞 +43 660 8740280</p>
            <p>📧 streetfoodalagourmet@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

