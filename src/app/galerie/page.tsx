"use client";
import { Button } from "../../components/Buttons";
import Header from "../../components/Header";
import { Headline } from "../../components/Headline";
import Image from "next/image";
import Footer from "../../components/Footer";
import React from "react";
import { getAllAlbums, SERVER_URL } from "../../api/album";
import { useQuery } from "@tanstack/react-query";

export default function Galerie() {
  return (
    <React.Fragment>
      <Header />
      <GalerieContent />
      <Footer />
    </React.Fragment>
  );
}

const GalerieContent = () => {
  const { data: albums } = useQuery({ queryKey: ["albums"], queryFn: getAllAlbums });

  return (
    <div className="flex flex-col justify-center items-center pt-40 container">

      <Headline>Galerie</Headline>

      <div className="mt-10 z-30">
        {albums?.map((album, idx) => (
          <GalerieEntry
            id={album.id}
            key={idx}
            orientation={idx % 2 ? "left" : "right"}
            thumbnail={album.thumbnail}
            title={album.title}
            description={album.description}
            date={album.date}
            location={album.location}
          />
        ))}
      </div>
    </div>
  );
};

interface GalerieEntryProps {
  id: String;
  orientation: "left" | "right";
  title: String;
  description: String;
  date: String;
  location: String;
  thumbnail: String;
}

const GalerieEntry: React.FC<GalerieEntryProps> = (props) => {
  const date = new Date(props.date.toString());

  return (
    <div className="shadow-md bg-white mt-10 lg:rounded-lg">
      {props.orientation == "left" ? (
        <div className="flex flex-wrap-reverse w-full">
          <div className="flex flex-col gap-3 w-full lg:w-1/3 p-8 min-w-80 h-auto min-h-min">
            <p className="text-base text-gray-400">
              {date.toLocaleDateString()}
              , {props.location}
            </p>
            <h1 className="text-kaushan-script text-3xl">{props.title}</h1>
            <p className="mb-14">{props.description}</p>
            <Button
              onClick={() =>
                document.location.assign("/galerie/album?id=" + props.id)
              }
            >
              Zu den Fotos
            </Button>
          </div>

          <div className="w-full lg:w-2/3 bg-gray-300 rounded-e-lg">
            <Image
              src={SERVER_URL + "/assets/" + props.thumbnail}
              alt="Galerie Photo"
              className="w-full object-cover max-h-[490px] lg:rounded-e-lg"
              width={6000}
              height={4000}
            ></Image>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap w-full">
          <div className="w-full lg:w-2/3 bg-gray-300 rounded-s-lg">
            <Image
              src={SERVER_URL + "/assets/" + props.thumbnail}
              alt="Galerie Photo"
              className="w-full object-cover max-h-[490px] lg:rounded-s-lg"
              width={6000}
              height={4000}
            ></Image>
          </div>

          <div className="flex flex-col gap-3 w-full lg:w-1/3 p-8 min-w-80">
            <p className="text-base text-gray-400">
              {date.toLocaleDateString()}
              , {props.location}
            </p>
            <h1 className="text-kaushan-script text-3xl">{props.title}</h1>
            <p className="mb-14">{props.description}</p>
            <Button
              onClick={() =>
                document.location.assign("/galerie/album?id=" + props.id)
              }
            >
              Zu den Fotos
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
