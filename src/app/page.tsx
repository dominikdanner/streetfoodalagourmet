'use client'
import Image from "next/image"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Pizza from "../../public/Pizza.png"
import GaleriePhoto1 from "../../public/Galerie_1.jpg"
import GaleriePhoto2 from "../../public/Galerie_2.jpg"
import { Button, InvertedButton } from "./components/Buttons"
import { Headline } from "./components/Headline"
import { useRef } from "react"

export default function Home() {

  return (
    <div>
      <div></div>
      <Header />
      <LandingSection />
      <AboutUsSection />
      <Qualities />
      <TeamSection />
      <Footer />
    </div>
  );
}

const LandingSection = () => {
  return (
    <div className="flex justify-center h-screen pt-16">
      <div className="flex xl:m-24 lg:m-20 md:m-16 sm:m-10 m-8 container flex-wrap-reverse">
        <div className="flex flex-col justify-center gap-3  xl:px-36 lg:px-26 md:px-10 min-w-96 lg:h-full w-1/2">
          <h1 className="font-bold text-6xl">Entdecken Sie den Geschmack von Streetfood</h1>
          <p className="">Unsere Philosophie: Kochen mit Liebe und den besten lokalen Zutaten</p>
            <div className="mt-5 flex gap-4">
              <Button>Jetzt Buchen</Button>
              <InvertedButton>Zur Galerie</InvertedButton>
            </div>
        </div>
        <div className="flex justify-center items-center lg:w-1/2 w-full min-w-96 h-1/2 lg:h-full">
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
        <div className="relative flex-wrap w-1/2">
          <div ref={Galerie} className="grid grid-cols-2 min-w-96 w-full px-5 py-5 hover:blur-sm transition-all duration-300">
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
              <Image src={GaleriePhoto1} height={180} width={0} alt="Galerie Photo 4"/>
            </div>
          </div>
        </div>
        <div className="min-w-96 w-full lg:w-1/2">
          <section>
            <Headline>Über uns</Headline>
            <h2 className="text-xl mt-5 font-bold">Willkommen bei Streetfood a la Gourmet</h2>
            <div className="flex flex-col gap-4 mt-5">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium officiis cupiditate ipsum doloribus praesentium, provident quae aliquid incidunt nihil magni debitis labore odit esse aperiam.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo numquam aut dolorum dignissimos deserunt facere ut ex, nam, iusto quae tempora iste minus accusamus possimus distinctio dolor ad nihil cumque?</p>
            </div>
            <div className="flex mt-10">
              <div className="flex w-1/2 h-28">
                <div className="h-full w-3 bg-highlight"></div>
                <div className="flex items-center p-5 gap-6">
                  <h1 className="text-7xl font-semibold text-highlight">10</h1>
                  <p className="text-gray-400 font-semibold p-4">Motivierte Teammitglieder</p>
                </div>
              </div>
              <div className="flex w-1/2 h-28">
                <div className="h-full w-3 bg-highlight"></div>
                <div className="flex items-center p-5 gap-6">
                  <h1 className="text-7xl font-semibold text-highlight">6</h1>
                  <p className="text-gray-400 font-semibold p-4">Veranstaltungen kulinarisch betreut</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

const Qualities = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-32">
        <Headline>Unsere Qualitäten</Headline>
        <div className="flex container mt-14 gap-8 px-10">
        <QualityCards title={"Junges Team"} description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo numquam aut dolorum dignissimos deserunt facere"}>
          <KidIcon height={50} width={50}></KidIcon>
        </QualityCards>
        <QualityCards title={"Qualitätives Essen"} description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo numquam aut dolorum dignissimos deserunt facere"}>
          <VegetarianFoodIcon height={50} width={50}></VegetarianFoodIcon>
        </QualityCards>
        <QualityCards title={"Freie Wahl"} description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo numquam aut dolorum dignissimos deserunt facere"}>
          <Relieved01Icon height={50} width={50}></Relieved01Icon>
        </QualityCards>
        <QualityCards title={"Lokalität"} description={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo numquam aut dolorum dignissimos deserunt facere"}>
          <Location01Icon height={50} width={50}></Location01Icon>
        </QualityCards>
        </div>
    </div>
  )
}

interface QualityCardProps extends React.PropsWithChildren {
  title: String
  description: String
} 

const QualityCards: React.FC<QualityCardProps> = ({ description, title, children}) => {
  return (
    <div className="flex flex-col gap-2 p-8 rounded-lg hover:scale-105 transition-all cursor-pointer shadow-2xl">
      {children}
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p>{description}</p>
    </div>
  )
}

const TeamSection = () => {
  return (
    <div className="flex h-auto justify-center mt-32">
      <div className="flex h-max flex-col items-center container gap-3">
        <Headline>Unser Team</Headline>
        <div className="flex flex-col justify-center items-center shadow-2xl rounded-lg mt-10">
          <div className="flex justify-around mt-10 w-full flex-wrap gap-5 px-10 ">
            <TeamMemberCard fullname={"Kevin Frick"} role={"Meister Koch"} />
            <TeamMemberCard fullname={"Raphael Mayer"} role={"Enthusiast"}/>
            <TeamMemberCard fullname={"Lukas Mayer"} role={"Pizza Profi"}/>
            <TeamMemberCard fullname={"Dominik Danner"} role={"IT Admin"}/>
          </div>
          <div className="mb-5">
            <Button>Zur Team Übersicht</Button>
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
    <div className="flex flex-col min-w-80 items-center py-10 rounded-xl cursor-default">
      <div className="w-72 h-72 rounded-full bg-gray-300"></div>
      <h1 className="font-semibold text-lg mt-4">{props.fullname}</h1>
      <p className="text-sm text-gray-600">{props.role}</p>
    </div>
  )
 }


const Location01Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <path d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const VegetarianFoodIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <path d="M17 13.2308C17 13.2308 16.0909 12.7693 15.1818 12.7693C13.8182 12.7693 12 14.6154 12 17.3846C12 20.1537 14.4896 22 17 22C19.5104 22 22 20.1537 22 17.3846C22 14.6154 20.1818 12.7693 18.8182 12.7693C17.9091 12.7693 17 13.2308 17 13.2308ZM17 13.2308C17 11.8462 17.9091 10 19.7273 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.655 5C11.5512 5 12.2778 4.32843 12.2778 3.5C12.2778 2.67157 11.5512 2 10.655 2H5.24561C4.34936 2 3.6228 2.67157 3.6228 3.5C3.6228 4.32843 4.34936 5 5.24561 5M11.1693 4.92311C12.1247 6.68943 12.9095 8.28337 13.3888 10C13.4279 10.1401 13.465 10.281 13.5 10.4229M10.428 22H6.32748C2.74721 22 2 21.3093 2 18V13.7771C2 10.3773 3.09757 7.88562 4.70467 4.91465" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Relieved01Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 9C7.20949 9.5826 7.77476 10 8.43922 10C9.10367 10 9.66894 9.5826 9.87843 9M14.1216 9C14.3311 9.5826 14.8963 10 15.5608 10C16.2252 10 16.7905 9.5826 17 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const KidIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 5.73791C14 5.73791 12.8849 6.23808 12.1017 5.85651C11.1464 5.39118 10.1991 3.44619 12.0914 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.00897 9H8M16 9H15.991" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);