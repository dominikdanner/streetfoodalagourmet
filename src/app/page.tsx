'use client'
import Image from "next/image"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Pizza from "../../public/Pizza.png"
import GaleriePhoto1 from "../../public/GaleryPreview.jpg"
import GaleriePhoto2 from "../../public/Galerie_2.jpg"
import OnionSVG from "../../public/Onion.svg"
import GarlicSVG from "../../public/Garlic.svg"
import KrautSVG from "../../public/Kraut.svg"
import Kraut2SVG from "../../public/Kraut2.svg"
import PanSVG from "../../public/Pan.svg"
import Kleeblatt from "../../public/Kleblatt.svg"
import LeafSVG from "../../public/Leaf1.svg"
import { Button, InvertedButton } from "./components/Buttons"
import { useRef } from "react"
import { Headline } from "./components/Headline"
import { KidIcon, LocationIcon, RelievedIcon, VegetarianFoodIcon } from "./components/Icons"
import Link from "next/link"

export default function Home() {

  return (
    <div className="relative overflow-hidden">

      {/** Background Placement */}
      <div className="absolute w-[1100px] h-[1100px] rounded-full border border-gray-300 -left-[600px] -top-[900px] lg:-left-[470px] lg:-top-[670px] -z-50"></div>
      <div className="absolute w-[1100px] h-[1100px] rounded-full border border-gray-300 -left-[560px] -top-[870px] lg:-left-[600px] lg:-top-[560px] -z-50"></div>
      <div className="absolute w-[1100px] h-[1100px] rounded-full border border-gray-300 -left-[640px] -top-[830px] lg:-left-[490px] lg:-top-[730px] -z-50"></div>
      <Image src={LeafSVG} alt="Onion" className="absolute opacity-10 right-[700px] top-[100px] -rotate-90"></Image>
      <Image src={GarlicSVG} alt="Garlic" className="absolute right-[250px] top-[320px] lg:right-[100px] lg:top-[600px] scale-125"></Image>
      <Image src={GarlicSVG} alt="Garlic" className="absolute right-[800px] top-[700px] -rotate-45 scale-125"></Image>
      <Image src={KrautSVG} alt="Garlic" className="absolute scale-150 top-[550px] left-[250px] -z-50"></Image>
      <Image src={Kraut2SVG} alt="Garlic" className="absolute scale-100 top-[750px] left-[500px] -z-50"></Image>
      <Image src={PanSVG} alt="Garlic" className="absolute scale-150 rotate-90 top-[1400px] left-[100px] lg:top-[1400px] lg:left-[200px] -z-50"></Image>

      {/** Page layout Begin */}
      <Header></Header>
      <LandingSection />
      <AboutUsSection />
      <QualitiesSection />
      <TeamSection />
      <Footer />
    </div>
  );
}

const LandingSection = () => {
  return (
    <div className="flex justify-center h-screen pt-16">
      <div className="flex xl:m-24 lg:m-20 md:m-16 sm:m-10 m-8 container flex-wrap-reverse">
        <div className="flex flex-col justify-center gap-5 lg:gap-3 p-5 xl:px-36 lg:px-26 md:px-10 min-w-96 lg:h-full w-full lg:w-1/2">
          <h1 className="font-bold text-4xl lg:text-6xl">Entdecken Sie den Geschmack von Streetfood</h1>
          <p className="">Unsere Philosophie: Kochen mit Liebe und den besten lokalen Zutaten</p>
            <div className="mt-5 flex gap-4">
              <Button>Jetzt Buchen</Button>
              <InvertedButton>Zur Galerie</InvertedButton>
            </div>
        </div>
        <div className="justify-center items-center lg:w-1/2 w-full min-w-96 h-1/2 lg:h-full hidden lg:flex">
          <Image src={Pizza} width={1000} height={1000} alt="Pizza" className="rotate-12 scale-125"/>
        </div>
      </div>
    </div>
  )
}


const AboutUsSection = () => {
  const Galerie = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col items-center justify-center z-50">
      <div className="flex container flex-wrap">
        <div className="flex flex-wrap w-full lg:w-1/2">
          <div ref={Galerie} className="grid grid-cols-2 min-w-96 w-full px-5 py-5">
            <div className="flex justify-end items-end mr-3 mb-3">
              <Image src={GaleriePhoto1} height={180} width={0} alt="Galerie Photo 1"/>
            </div>
            <div className="flex justify-start items-end ml-3 mb-3">
              <Image src={GaleriePhoto2} height={130} width={0} alt="Galerie Photo 2"/>
            </div>
            <div className="flex justify-end items-start mt-3 mr-3">
              <Image src={GaleriePhoto1} height={130} width={0} alt="Galerie Photo 3"/>
            </div>
            <div className="flex justify-start items-start mt-3 ml-3">
              <Image src={GaleriePhoto2} height={180} width={0} alt="Galerie Photo 4"/>
            </div>
          </div>
        </div>
        <div className="min-w-96 w-full lg:w-1/2">
          <section className="p-5">
            <div className="flex justify-center items-center mt-5 lg:justify-start lg:mt-0">
              <Headline>Über uns</Headline>
            </div>
            <h2 className="text-xl mt-5 font-bold">Willkommen bei Streetfood a la Gourmet</h2>
            <div className="flex flex-col gap-4 mt-5">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium officiis cupiditate ipsum doloribus praesentium, provident quae aliquid incidunt nihil magni debitis labore odit esse aperiam.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo numquam aut dolorum dignissimos deserunt facere ut ex, nam, iusto quae tempora iste minus accusamus possimus distinctio dolor ad nihil cumque?</p>
            </div>
            <div className="flex mt-10 flex-wrap gap-2 lg:gap-0">
              <div className="flex w-1/2 h-28 min-w-72">
                <div className="h-full min-w-3 bg-highlight"></div>
                <div className="flex items-center p-5 gap-6">
                  <h1 className="text-7xl font-semibold text-highlight ml-2">10</h1>
                  <p className="text-gray-400 font-semibold p-6">Motivierte Teammitglieder</p>
                </div>
              </div>
              <div className="flex w-1/2 h-28 min-w-72">
                <div className="h-full min-w-3 bg-highlight"></div>
                <div className="flex items-center p-5 gap-6">
                  <h1 className="text-7xl font-semibold text-highlight ml-2">6</h1>
                  <p className="text-gray-400 font-semibold p-6">Veranstaltungen kulinarisch betreut</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

const QualitiesSection = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-32">
        <Headline>Unsere Qualitäten</Headline>
        <div className="flex container justify-center items-center flex-wrap mt-14 gap-8 px-5">
          <QualityCard title={"Junges Team"} description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo numquam aut dolorum dignissimos deserunt facere"}>
            <KidIcon height={50} width={50}></KidIcon>
          </QualityCard>
          <QualityCard title={"Qualitätives Essen"} description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo numquam aut dolorum dignissimos deserunt facere"}>
            <VegetarianFoodIcon height={50} width={50}></VegetarianFoodIcon>
          </QualityCard>
          <QualityCard title={"Freie Wahl"} description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo numquam aut dolorum dignissimos deserunt facere"}>
            <RelievedIcon height={50} width={50}></RelievedIcon>
          </QualityCard>
          <QualityCard title={"Lokalität"} description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo numquam aut dolorum dignissimos deserunt facere"}>
            <LocationIcon height={50} width={50}></LocationIcon>
          </QualityCard>
        </div>
    </div>
  )
}

interface QualityCardProps extends React.PropsWithChildren {
  title: String
  description: String
} 

const QualityCard: React.FC<QualityCardProps> = ({ description, title, children}) => {
  return (
    <div className="flex flex-col gap-2 p-8 rounded-lg hover:scale-105 transition-all cursor-pointer shadow-2xl bg-white min-w-40 max-w-full lg:max-w-80">
      {children}
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p>{description}</p>
    </div>
  )
}

const TeamSection = () => {
  return (
    <div className="flex h-auto justify-center mt-32">
      <div className="flex relative h-max flex-col items-center container gap-3">
        <Image src={Kraut2SVG} alt="Garlic" className="absolute bottom-[-150px] left-[-120px] -rotate-90"></Image>
        <Image src={Kleeblatt} alt="Garlic" className="absolute top-[-200px] right-[-200px] lg:top-[-90px] lg:right-[-80px] opacity-10 rotate-12"></Image>

        <Headline>Unser Team</Headline>
        <div className="flex flex-col justify-center items-center lg:shadow-2xl rounded-lg lg:mt-5 lg:bg-white">
          <div className="flex justify-around w-full flex-wrap gap-5 lg:gap-5 px-5 ">
            <TeamMemberCard fullname={"Kevin Frick"} role={"Meister Koch"} />
            <TeamMemberCard fullname={"Raphael Mayer"} role={"Enthusiast"}/>
            <TeamMemberCard fullname={"Lukas Mayer"} role={"Pizza Profi"}/>
            <TeamMemberCard fullname={"Dominik Danner"} role={"IT Admin"}/>
          </div>
          <div className="my-10 lg:my-5">
          <Button><Link href={"/team"} className="w-full h-full">Zum gesamten Team</Link></Button>
          </div>
        </div>
      </div>
    </div>
  )

}


interface TeamMemberCardProps {
  fullname: String,
  role: String,
}

 const TeamMemberCard = (props: TeamMemberCardProps) => {
  return (
    <div className="flex flex-col min-w-80 items-center lg:py-10 rounded-xl cursor-default">
      <div className="w-72 h-72 rounded-full bg-gray-300"></div>
      <h1 className="font-semibold text-lg mt-4">{props.fullname}</h1>
      <p className="text-sm text-gray-600">{props.role}</p>
    </div>
  )
 }


