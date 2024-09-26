"use client"
import Header from "@/app/components/Header";
import { Headline } from "@/app/components/Headline";
import { useSearchParams } from "next/navigation";
import React, { createContext, FC, useContext, useState } from "react";
import GaleriePhoto1 from "../../../../public/GaleriePreview/Preview_1.jpg"
import GaleriePhoto2 from "../../../../public/GaleriePreview/Preview_2.jpg"
import GaleriePhoto3 from "../../../../public/GaleriePreview/Preview_3.jpg"
import GaleriePhoto4 from "../../../../public/GaleriePreview/Preview_4.jpg"
import Image from "next/image";
import Footer from "@/app/components/Footer";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ImageGalerieContext {
    imageData: StaticImport | undefined 
}

const ImageGalerieContext = createContext<ImageGalerieContext>({
    imageData: undefined
})

export default function Album() {

  const params = useSearchParams();
  const albumId = params.get("albumId")

    return (
        <React.Fragment>

            <Header />

            <ImageGalerieContainer />


            <Footer />
            

        </React.Fragment>
    )
}

interface ImageGalerieContainerProps extends React.PropsWithChildren {

}


const ImageGalerieContainer: FC<ImageGalerieContainerProps> = ({ children }) => {
    const [isBigViewExpanded, setBigViewExpanded] = useState(false);

    return (
            <div className="flex flex-col justify-center items-center pt-40 container bg-transparent">
                <ImageGalerieContext.Provider value={{ imageData: undefined  }}>
                    {isBigViewExpanded ? (

                        <div className="fixed w-screen h-screen bg-black bg-opacity-30 z-50 top-0">
                            <div className="fixed w-2/3 h-2/3 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg z-50">
                            <div className="flex justify-end items-center p-10">
                                <div className="absolute flex flex-col justify-center items-center w-20 h-20 cursor-pointer" onClick={() => setBigViewExpanded(false)}>
                                    <div className="w-10 h-1 bg-black rounded-lg rotate-45 translate-y-1"></div>
                                    <div className="w-10 h-1 bg-black rounded-lg -rotate-45"></div>
                                </div>
                            </div>
                    
                            </div>
                        </div>
                    ): null}


                    <Headline>Raphaels Helferfest</Headline>
                    <div className="mt-10 grid grid-cols-1 grid-rows-1 gap-4 items-end md:grid-cols-2 md:gap-1 my-5 xl:grid-cols-4">
                        <div className="flex flex-col w-full gap-2 px-1 min-w-96 xl:min-w-60">
                            <ImageItem src={GaleriePhoto3} />
                            <ImageItem src={GaleriePhoto2} />
                            <ImageItem src={GaleriePhoto1} />
                            <ImageItem src={GaleriePhoto4} />
                        </div>
                        <div className="flex flex-col w-full gap-2 px-1 min-w-96 xl:min-w-60">
                            <ImageItem src={GaleriePhoto2} />
                            <ImageItem src={GaleriePhoto1} />
                            <ImageItem src={GaleriePhoto3} />
                            <ImageItem src={GaleriePhoto4} />
                        </div>
                        <div className="flex flex-col w-full gap-2 px-1 min-w-96 xl:min-w-60">
                            <ImageItem src={GaleriePhoto4} />
                            <ImageItem src={GaleriePhoto2} />
                            <ImageItem src={GaleriePhoto3} />
                            <ImageItem src={GaleriePhoto1} />
                        </div>
                        <div className="flex flex-col w-full gap-2 px-1 min-w-96 xl:min-w-60">
                            <ImageItem src={GaleriePhoto3} />
                            <ImageItem src={GaleriePhoto2} />
                            <ImageItem src={GaleriePhoto1} />
                            <ImageItem src={GaleriePhoto4} />
                        </div>
                    </div>
                </ImageGalerieContext.Provider>
            </div>
    )
}

interface ImageItemProps {
    src: StaticImport
}

const ImageItem: FC<ImageItemProps> = (props) => {
    let { imageData } = useContext(ImageGalerieContext)

    return (
        <div className="group relative w-full h-fit object-contain cursor-pointer" onClick={() => imageData = props.src }>
            <Image src={props.src} width={0} height={0} alt="Galerie Foto"></Image>
        </div>

    )
}