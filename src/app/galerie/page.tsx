"use client"
import { Button } from "../components/Buttons";
import Header from "../components/Header";
import { Headline } from "../components/Headline";
import Image, { StaticImageData } from "next/image";
import Footer from "../components/Footer";
import React from "react";
import TestPhoto from "../../../public/GaleriePreview/Preview_4.jpg"
import TestPhoto2 from "../../../public/GaleriePreview/Preview_3.jpg"
import TestPhoto3 from "../../../public/GaleriePreview/Preview_2.jpg"

export default function Galerie() {
    return (
        <div className="overflow-hidden flex flex-col items-center w-full">

            {/** Background Placement */}
            <div className="absolute w-[1100px] h-[1100px] rounded-full border border-gray-300 -left-[600px] -top-[900px] lg:-left-[470px] lg:-top-[670px] -z-50"></div>
            <div className="absolute w-[1100px] h-[1100px] rounded-full border border-gray-300 -left-[560px] -top-[870px] lg:-left-[600px] lg:-top-[560px] -z-50"></div>
            <div className="absolute w-[1100px] h-[1100px] rounded-full border border-gray-300 -left-[640px] -top-[830px] lg:-left-[490px] lg:-top-[730px] -z-50"></div>

            <Header></Header>
            <div className="flex flex-col justify-center items-center pt-40 container">
                <Headline>Galerie</Headline>
                <div className="mt-10">
                    <GalerieEntry 
                        orientation="left"
                        imageSrc={TestPhoto}
                        title={"Raphael's Helferfest"} 
                        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas id dolorem odit fuga non excepturi eum! Ipsam et accusamus vero beatae sunt laborum enim numquam in mollitia, reiciendis corporis cumque recusandae debitis! Facere, officia."} 
                        date={"24 August 2024"}
                        location={"Pregarten"}
                    />
                    <GalerieEntry 
                        orientation="right"
                        imageSrc={TestPhoto2}
                        title={"Grillerei bei den Mayers"} 
                        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas id dolorem odit fuga non excepturi eum! Ipsam et accusamus vero beatae sunt laborum enim numquam in mollitia, reiciendis corporis cumque recusandae debitis! Facere, officia."} 
                        date={"12 Juli 2023"}
                        location={"Pregarten"}
                    />
                    <GalerieEntry 
                        orientation="left"
                        imageSrc={TestPhoto3}
                        title={"Hochzeit der Familie Schmidt"} 
                        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas id dolorem odit fuga non excepturi eum! Ipsam et accusamus vero beatae sunt laborum enim numquam in mollitia, reiciendis corporis cumque recusandae debitis! Facere, officia."} 
                        date={"28 März 2024"}
                        location={"Bad Leonfelden"}
                    />
                </div>
            </div> 

            <Footer />
        </div>
    )

}

interface GalerieEntryProps {
    orientation: "left" | "right"
    title: String
    description: String
    date: String
    location: String
    imageSrc: StaticImageData
}

const GalerieEntry: React.FC<GalerieEntryProps> = (props) => {
    return (
        <div className="shadow-md bg-white mt-10 lg:rounded-lg">
                {props.orientation == "left" ? (
                    <div className="flex flex-wrap-reverse w-full">

                        <div className="flex flex-col gap-3 w-full lg:w-1/3 p-8 min-w-80">
                            <p className="text-base text-gray-400">{props.date}, {props.location}</p>
                            <h1 className="text-kaushan-script text-3xl">{props.title}</h1>
                            <p className="mb-14">{props.description}</p>
                            <Button>Zu den Fotos</Button>
                        </div>

                        <div className="w-full lg:w-2/3 bg-gray-300 rounded-e-lg">
                            <Image src={props.imageSrc} alt="Galerie Photo" className="w-full max-h-96 object-cover lg:rounded-e-lg"></Image>
                        </div>

                    </div>
                ) : (
                    <div className="flex flex-wrap w-full">

                        <div className="w-full lg:w-2/3 bg-gray-300 rounded-s-lg  ">
                            <Image src={props.imageSrc} alt="Galerie Photo" className="w-full h-full object-cover lg:rounded-s-lg max-h-96"></Image>
                        </div>

                        <div className="flex flex-col gap-3 w-full lg:w-1/3 p-8 min-w-80">
                            <p className="text-base text-gray-400">{props.date}, {props.location}</p>
                            <h1 className="text-kaushan-script text-3xl">{props.title}</h1>
                            <p className="mb-14">{props.description}</p>
                            <Button>Zu den Fotos</Button>
                        </div>

                    </div>
                )}



        </div>
    )
}