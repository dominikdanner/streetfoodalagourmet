"use client"
import Header from "../components/Header";
import { Headline } from "../components/Headline";
import Footer from "../components/Footer";

export default function Team() {
    return (
        <div className="flex flex-col items-center w-full">

            {/** Background Placement */}
            <div className="absolute w-[1100px] h-[1100px] rounded-full border border-gray-300 -left-[600px] -top-[900px] lg:-left-[470px] lg:-top-[670px] -z-50"></div>
            <div className="absolute w-[1100px] h-[1100px] rounded-full border border-gray-300 -left-[560px] -top-[870px] lg:-left-[600px] lg:-top-[560px] -z-50"></div>
            <div className="absolute w-[1100px] h-[1100px] rounded-full border border-gray-300 -left-[640px] -top-[830px] lg:-left-[490px] lg:-top-[730px] -z-50"></div>

            <Header></Header>
            <TeamPictureSection />
            <Footer />
        </div>
    )
}

const TeamPictureSection = () => {
    return (
        <div className="flex flex-col justify-center items-center container pt-40">
            <div className="flex flex-col items-center w-full">
                <Headline>Unser Team</Headline>
                <div className="flex justify-center items-center w-full mt-10 bg-gray-200 h-[600px] rounded-lg text-xl">Team Foto</div>
            </div>

            <div className="flex flex-col items-center w-full mt-20">
                <Headline>Alle Teammitglieder</Headline>

                <div className="flex mt-10 flex-wrap justify-center items-center gap-5">
                    <TeamMemberCard name={"Mayer Raphael"} role={"Gründer"}></TeamMemberCard>
                    <TeamMemberCard name={"Kevin Frick"} role={"Gründer & Koch"}></TeamMemberCard>
                    <TeamMemberCard name={"Dominik Danner"} role={"IT Administrator"}></TeamMemberCard>
                    <TeamMemberCard name={"Lukas Mayer"} role={"Pizza Experte"}></TeamMemberCard>
                    <TeamMemberCard name={"Mayer Raphael"} role={"NEgga"}></TeamMemberCard>
                    <TeamMemberCard name={"Mayer Raphael"} role={"NEgga"}></TeamMemberCard>
                    <TeamMemberCard name={"Mayer Raphael"} role={"NEgga"}></TeamMemberCard>
                    <TeamMemberCard name={"Mayer Raphael"} role={"NEgga"}></TeamMemberCard>
                </div>
            </div>
        </div>
    )

}

interface TeamMemberCardProps extends React.PropsWithChildren {
    name: String
    role: String
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = (props) => {
    return (
        <div className="flex flex-col relative justify-center items-center w-80 h-fit lg:py-10">
            <div className="absolute bg-highlight rounded-full h-16 w-16 bottom-[120px] left-[30px]"></div>
            <div className="bg-gray-200 rounded-full w-64 h-64"></div>
            <h1 className="font-semibold text-xl mt-2">{props.name}</h1>
            <p className="text-gray-400">{props.role}</p>
        </div>
    )
}