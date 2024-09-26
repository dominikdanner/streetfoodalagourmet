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
import { useRouter } from "next/navigation";

export default function Galerie() {
    return (
        <React.Fragment>

            <Header />
            <GalerieContent />
            <Footer />

        </React.Fragment>
    )

}

const GalerieContent = () => {
    return (
        <div className="flex flex-col justify-center items-center pt-40 container">

            <Headline>Galerie</Headline>

            <div className="mt-10 z-30">

                <GalerieEntry 
                    id={"skdhfsgjh4239t87ghfdsuigh"}
                    orientation="left"
                    imageSrc={TestPhoto}
                    title={"Raphael's Helferfest"} 
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas id dolorem odit fuga non excepturi eum! Ipsam et accusamus vero beatae sunt laborum enim numquam in mollitia, reiciendis corporis cumque recusandae debitis! Facere, officia."} 
                    date={"24 August 2024"}
                    location={"Pregarten"}
                />
                <GalerieEntry 
                    id={"skdhfsgjh4239t87ghfdsuigh"}
                    orientation="right"
                    imageSrc={TestPhoto2}
                    title={"Grillerei bei den Mayers"} 
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas id dolorem odit fuga non excepturi eum! Ipsam et accusamus vero beatae sunt laborum enim numquam in mollitia, reiciendis corporis cumque recusandae debitis! Facere, officia."} 
                    date={"12 Juli 2023"}
                    location={"Pregarten"}
                />
                <GalerieEntry 
                    id={"skdhfsgjh4239t87ghfdsuigh"}
                    orientation="left"
                    imageSrc={TestPhoto3}
                    title={"Hochzeit der Familie Schmidt"} 
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas id dolorem odit fuga non excepturi eum! Ipsam et accusamus vero beatae sunt laborum enim numquam in mollitia, reiciendis corporis cumque recusandae debitis! Facere, officia."} 
                    date={"28 März 2024"}
                    location={"Bad Leonfelden"}
                />
                
            </div>

        </div> 
    )
}

interface GalerieEntryProps {
    id: String
    orientation: "left" | "right"
    title: String
    description: String
    date: String
    location: String
    imageSrc: StaticImageData
}

const GalerieEntry: React.FC<GalerieEntryProps> = (props) => {
    const router = useRouter()

    return (
        <div className="shadow-md bg-white mt-10 lg:rounded-lg">

                {props.orientation == "left" ? (
                    <div className="flex flex-wrap-reverse w-full">

                        <div className="flex flex-col gap-3 w-full lg:w-1/3 p-8 min-w-80 h-auto min-h-min">
                            <p className="text-base text-gray-400">{props.date}, {props.location}</p>
                            <h1 className="text-kaushan-script text-3xl">{props.title}</h1>
                            <p className="mb-14">{props.description}</p>
                            <Button  onClick={() => router.push("/galerie/album?albumId=" + props.id)}>Zu den Fotos</Button>
                        </div>

                        <div className="w-full lg:w-2/3 bg-gray-300 rounded-e-lg">
                            <Image src={props.imageSrc} alt="Galerie Photo" className="w-full object-cover max-h-[490px] lg:rounded-e-lg"></Image>
                        </div>

                    </div>
                ) : (
                    <div className="flex flex-wrap w-full">

                        <div className="w-full lg:w-2/3 bg-gray-300 rounded-s-lg  ">
                            <Image src={props.imageSrc} alt="Galerie Photo" className="w-full h-auto object-cover lg:rounded-s-lg max-h-[490px]"></Image>
                        </div>

                        <div className="flex flex-col gap-3 w-full lg:w-1/3 p-8 min-w-80">
                            <p className="text-base text-gray-400">{props.date}, {props.location}</p>
                            <h1 className="text-kaushan-script text-3xl">{props.title}</h1>
                            <p className="mb-14">{props.description}</p>
                            <Button onClick={() => router.push("/galerie/album?albumId=" + props.id)}>Zu den Fotos</Button>
                        </div>

                    </div>
                )}

        </div>
    )
}