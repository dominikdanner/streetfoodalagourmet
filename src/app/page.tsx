'use client'
import Image from "next/image"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Pizza from "../../public/Pizza.png"
import GaleriePhoto1 from "../../public/Galerie_1.jpg"
import GaleriePhoto2 from "../../public/Galerie_2.jpg"
import Background from "../../public/Background.jpg"

export default function Home() {

  return (
    <div>
      <div className="bg-fixed" >
        <Image src={Background} width={0} height={0} alt="bg" className="bg-auto opacity-70 blur-sm object-cover absolute -z-50 w-auto h-screen"  />
      </div>
      <Header />
      <Catcher />
      <Description />
      <Team />
      <Footer />
    </div>
  );
}

const Catcher = () => {
  return (
    <div className="flex justify-center h-screen pt-16">
      <div className="flex xl:m-24 lg:m-20 md:m-16 sm:m-10 m-8 container flex-wrap-reverse">
        <div className="flex flex-col justify-center items-start w-full h-1/2 gap-3  xl:px-36 lg:px-26 md:px-10 px-10 min-w-96 lg:w-1/2 lg:h-full">
          <h1 className="font-bold lg:text-6xl md:text-3xl text-3xl min-w-60">Entdecken Sie den Geschmack von Streetfood</h1>
          <p>Unsere Philosophie: Kochen mit Liebe und den besten lokalen Zutaten</p>
        </div>
        <div className="flex justify-center items-center lg:w-1/2 w-full min-w-96 h-1/2 lg:h-full">
          <Image src={Pizza} width={800} height={800} alt="Pizza" className="animate-spin-pizza opacity-95" />
        </div>
      </div>
    </div>
  )
}


const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center z-50 mt-20">
      <div className="flex container flex-wrap">
        <div className="grid grid-cols-2 min-w-96 w-full lg:w-1/2 px-5 py-5">
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
        <div className="min-w-96 w-full lg:w-1/2 py-10 px-10 shadow-2xl rounded-xl">
          <section className="">
            <p className="text-sm text-highlight font-semibold">Über uns</p>
            <h2 className="text-xl mb-5">Unsere kulinarische Reise: Entdecken Sie die Vielfalt der Aromen aus aller Welt</h2>
            <div className="flex flex-col gap-4">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium officiis cupiditate ipsum doloribus praesentium, provident quae aliquid incidunt nihil magni debitis labore odit esse aperiam.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo numquam aut dolorum dignissimos deserunt facere ut ex, nam, iusto quae tempora iste minus accusamus possimus distinctio dolor ad nihil cumque?</p>
            </div>
            <div className="mt-10">
              <button className="flex bg-highlight text-white rounded-xl px-10 py-4 shadow-lg hover:scale-105 transition-all"><Book04Icon className="text-white mr-2" />Mehr unserer Projekte</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

const Team = () => {
  return (
    <div className="flex h-auto justify-center mt-20">
      <div className="flex h-max flex-col items-center container gap-3 p-0 lg:p-10">
        <h1 className="text-sm font-semibold text-highlight">Unser Team</h1>
        <h1 className="text-4xl -mt-4">Meister Köche</h1>
        <div className="flex justify-around mt-10 w-full flex-wrap gap-5">
          <TeamMemberCard fullname={"Kevin Frick"} role={"Meister Koch"} />
          <TeamMemberCard fullname={"Raphael Mayer"} role={"Intusiast"}/>
          <TeamMemberCard fullname={"Lukas Mayer"} role={"Pizza Profi"}/>
          <TeamMemberCard fullname={"Dominik Danner"} role={"IT Admin"}/>
        </div>
        <button className="mt-5 text-white bg-highlight px-10 py-3 rounded-xl hover:scale-110 transition-all">Zum gesamten Team</button>
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
    <div className="flex flex-col min-w-80 items-center py-10 rounded-xl shadow-2xl hover:scale-105 transition-all cursor-default">
      <div className="w-72 h-72 rounded-full bg-gray-300"></div>
      <h1 className="font-semibold text-lg mt-4">{props.fullname}</h1>
      <p className="text-sm text-gray-600">{props.role}</p>
    </div>
  )
 }


const Book04Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <path d="M7.5 4.94531H16C16.8284 4.94531 17.5 5.61688 17.5 6.44531V7.94531" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 12.9453H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 16.9453H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.497 2L6.30767 2.00002C5.81071 2.00002 5.30241 2.07294 4.9007 2.36782C3.62698 3.30279 2.64539 5.38801 4.62764 7.2706C5.18421 7.7992 5.96217 7.99082 6.72692 7.99082H18.2835C19.077 7.99082 20.5 8.10439 20.5 10.5273V17.9812C20.5 20.2007 18.7103 22 16.5026 22H7.47246C5.26886 22 3.66619 20.4426 3.53959 18.0713L3.5061 5.16638" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
