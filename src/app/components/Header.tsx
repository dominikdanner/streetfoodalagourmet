import Image from "next/image"
import Logo from "../../../public/Streetfood.png"

export default function Header() {
    
    return (
        <div className="fixed w-full">
            <header className="flex justify-around items-center h-36">
                <div className="">
                    <Image src={Logo} width={200} height={200} alt="20" />
                </div>
                <div className="flex gap-10">
                    <HeaderMenuItem name="Home" />
                    <HeaderMenuItem name="Team" />
                    <HeaderMenuItem name="Galerie" />

                </div>
                <div>
                <button className="bg-highlight text-white font-semibold drop-shadow-lg px-7 py-3 rounded-lg">Buchen</button> 
                </div>
            </header>
        </div>
    )
}

interface HeaderMenuItemProps {
    name: String
}

const HeaderMenuItem = (props: HeaderMenuItemProps) => {
    return (
        <div className="font-">
            {props.name}
        </div>
    )

}