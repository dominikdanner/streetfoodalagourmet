"use client";
import React, { FC } from "react";
import Header from "../../components/Header";
import { Headline } from "@/components/Headline";

export default function Impressum() {
  return (
    <React.Fragment>
      <Header></Header>
      <ImpressumContent />
    </React.Fragment>
  );
}

interface KeyValuePair {
  _key: String;
  value: String;
}

const HorizontalKeyValuePair: FC<KeyValuePair> = ({ _key, value }) => {
  return (
    <div className="flex">
      <h1 className="font-bold">{_key}&nbsp;</h1>
      <p>{value}</p>
    </div>
  );
};

const VerticalKeyValuePair: FC<KeyValuePair> = ({ _key, value }) => {
  return (
    <div className="flex-col py-5">
      <h1 className="font-bold text-2xl">{_key}&nbsp;</h1>
      <p>{value}</p>
    </div>
  );
};

const ImpressumContent = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-40 container p-44">
      <Headline>Impressum</Headline>
      <div className="w-full h-full flex-col">
        <HorizontalKeyValuePair
          _key={"Vereinsname:"}
          value={"Streetfood a la Gourmet"}
        />
        <HorizontalKeyValuePair
          _key={"Vereinssitz:"}
          value={"4230 Pregarten"}
        />
        <HorizontalKeyValuePair _key={"Obmann:"} value={"Raphael Mayer"} />
        <HorizontalKeyValuePair
          _key={"Obmann Stellvertreter:"}
          value={"Kevin Frick"}
        />

        <VerticalKeyValuePair
          _key={"Audiovisuelle Mediendienste"}
          value={
            "Zuständige Regulierungs- bzw. Aufsichtsbehörde: Kommunikationsbehörde Austria (KommAustria), https://www.rtr.at"
          }
        />
        <VerticalKeyValuePair
          _key={"EU-Streitschlichtung"}
          value={
            "EU-Streitschlichtung Gemäß Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über die Online-Streitbeilegungsplattform (OS-Plattform) informieren. Verbraucher haben die Möglichkeit, Beschwerden an die Online Streitbeilegungsplattform der Europäischen Kommission unter https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE zu richten. Die dafür notwendigen Kontaktdaten finden Sie oberhalb in unserem Impressum. Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder verpflichtet sind, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."
          }
        />
        <VerticalKeyValuePair
          _key={"Haftung für Inhalte dieser Website"}
          value={
            "Wir entwickeln die Inhalte dieser Website ständig weiter und bemühen uns korrekte und aktuelle Informationen bereitzustellen. Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser Website übernehmen, speziell für jene, die seitens Dritter bereitgestellt wurden. Als Diensteanbieter sind wir nicht verpflichtet, die von Ihnen übermittelten oder gespeicherten Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Unsere Verpflichtungen zur Entfernung von Informationen oder zur Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen aufgrund von gerichtlichen oder behördlichen Anordnungen bleiben auch im Falle unserer Nichtverantwortlichkeit davon unberührt. Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitte wir Sie uns umgehend zu kontaktieren, damit wir die rechtswidrigen Inhalte entfernen können. Sie finden die Kontaktdaten im Impressum."
          }
        />
        <VerticalKeyValuePair
          _key={"Haftung für Links auf dieser Website"}
          value={
            "Unsere Website enthält Links zu anderen Websites für deren Inhalt wir nicht verantwortlich sind. Haftung für verlinkte Websites besteht für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten hatten und haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir Links sofort entfernen würden, wenn uns Rechtswidrigkeiten bekannt werden. Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitte wir Sie uns zu kontaktieren. Sie finden die Kontaktdaten im Impressum."
          }
        />
        <VerticalKeyValuePair
          _key={"Urheberrechtshinweis"}
          value={
            "Unsere Website enthält Links zu anderen Websites für deren Inhalt wir nicht verantwortlich sind. Haftung für verlinkte Websites besteht für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten hatten und haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir Links sofort entfernen würden, wenn uns Rechtswidrigkeiten bekannt werden. Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitte wir Sie uns zu kontaktieren. Sie finden die Kontaktdaten im Impressum."
          }
        />
      </div>
    </div>
  );
};
