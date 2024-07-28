import Header from "./components/Header"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div>
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
        <div className="flex flex-col justify-center items-start w-full h-1/2 gap-3 bg-red-50 xl:px-36 lg:px-26 md:px-10 px-10 min-w-96 lg:w-1/2 lg:h-full">
          <h1 className="font-bold lg:text-6xl md:text-3xl text-3xl min-w-60">Explore the taste of Streetfood</h1>
          <p>Wir kochen mit liebe und nur den hochwerigesten Zutaten die uns local zur verfügung stehen</p>
        </div>
        <div className="lg:w-1/2 w-full min-w-96 h-1/2 lg:h-full bg-blue-50">
          Image
          sdfgsdg
        </div>
      </div>
    </div>
  )
}


const Description = () => {
  return (
    <div className="flex justify-center">
      <div className="flex container flex-wrap">
        <div className="min-w-96 bg-green-50 w-full md:w-1/2">Preview Galerie</div>
        <div className="min-w-96 bg-amber-50 w-full md:w-1/2 py-20">
          <section className="">
            <h1 className="text-lg">
              Über uns
            </h1>
            <h2 className="m-2 text-xl">Wir begaben uns auf eine Reiße voller kulinarik</h2>
            <div className="flex flex-col gap-4 m-6">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium officiis cupiditate ipsum doloribus praesentium, provident quae aliquid incidunt nihil magni debitis labore odit esse aperiam.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo numquam aut dolorum dignissimos deserunt facere ut ex, nam, iusto quae tempora iste minus accusamus possimus distinctio dolor ad nihil cumque?</p>
            </div>
            <div>
              Stats
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
      <div className="flex h-max flex-col items-center container bg-emerald-50 gap-3 p-10">
        <h1 className="text-xl">Unser Team</h1>
        <h1 className="text-2xl">Meister Köche</h1>
        <div className="flex justify-around mt-10 w-full flex-wrap gap-5">
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
        </div>
      </div>
    </div>
  )

}

 const TeamMemberCard = () => {
  return (
    <div className="flex flex-col min-w-80 items-center">
      <div className="w-72 h-72 rounded-full bg-gray-300"></div>
      <h1 className="font-semibold text-lg">Voller Name</h1>
      <p className="text-sm">Meister</p>
    </div>
  )
 }