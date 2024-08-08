import Image from "next/image"
import Logo from "../../../public/Streetfood.png"
import { useRouter } from "next/navigation"
import { useScrollOffset } from "@/hooks/hooks"
import { Button } from "./Buttons"
import Link from "next/link"
import { Url } from "next/dist/shared/lib/router/router"

export default function Header() {
  const router = useRouter()
  const scrollOffset = useScrollOffset();
    
    return (
        <div className="fixed w-full z-50">
            <header className={scrollOffset.y! < 1 ? "flex justify-between mx-40 items-center h-36 transition-all" : "flex justify-between px-40 items-center h-36 shadow-2xl  bg-white transition-all duration-500 ease-in-out"}>
                <div className="cursor-pointer" onClick={() => router.push("/")}>
                    <Image src={Logo} width={200} height={200} alt="20" />
                </div>
                <div className="flex gap-10">
                    <HeaderMenuItem href={"/"} name="Home" />
                    <HeaderMenuItem href={"/contact"} name="Kontakt" />
                    <HeaderMenuItem href={"/team"} name="Team" />
                    <HeaderMenuItem href={"/galerie"} name="Galerie" />
                </div>
                <Button>Jetzt Buchen</Button>
            </header>
        </div>
    )
}

interface HeaderMenuItemProps {
    name: String
    href: Url 
}

const HeaderMenuItem = (props: HeaderMenuItemProps) => {
    return (
        <div className="cursor-pointer font-semibold text-black">
            <Link href={props.href}>
                {props.name}
            </Link>
            {typeof window !== "undefined" && document.location.pathname == props.href ? <div className="w-1/2 h-1 rounded-lg opacity-75 bg-black"></div> : null}
        </div>
    )

}
