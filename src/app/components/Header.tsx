import Image from "next/image"
import Logo from "../../../public/Streetfood.png"
import { useRouter } from "next/navigation"
import { useScrollOffset } from "@/hooks/hooks"

export default function Header() {
  const router = useRouter()
  const scrollOffset = useScrollOffset();

  console.log(scrollOffset)
    
    return (
        <div className="fixed w-full z-50">
            <header className={scrollOffset.y! < 300 ? "flex justify-around items-center h-36" : "flex justify-around items-center h-36 shadow-2xl  bg-white transition-all duration-500 ease-in-out"}>
                <div className="cursor-pointer" onClick={() => router.push("/")}>
                    <Image src={Logo} width={200} height={200} alt="20" />
                </div>
                <div className="flex gap-10">
                    <HeaderMenuItem name="Home" />
                    <HeaderMenuItem name="Kontakt" />
                    <HeaderMenuItem name="Team" />
                    <HeaderMenuItem name="Galerie" />

                </div>
                <div>
                    <button className="flex bg-highlight text-white font-semibold drop-shadow-lg px-6 py-3 rounded-lg hover:scale-110 transition-all duration-200"><CookBookIcon className="text-white mr-2" />Buchen</button> 
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
        <div className="cursor-pointer font-semibold text-black">
            {props.name}
        </div>
    )

}

const CookBookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <path d="M21 16.9286V10C21 6.22876 21 4.34315 19.8284 3.17157C18.6569 2 16.7712 2 13 2H12C8.22876 2 6.34315 2 5.17157 3.17157C4 4.34315 4 6.22876 4 10V19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M21 17H6.5C5.11929 17 4 18.1193 4 19.5C4 20.8807 5.11929 22 6.5 22H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M21 22C19.6193 22 18.5 20.8807 18.5 19.5C18.5 18.1193 19.6193 17 21 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14.3877 6.84933C14.7057 6.63424 15.0883 6.50878 15.5 6.50878C16.6046 6.50878 17.5 7.41206 17.5 8.52633C17.5 9.62271 16.5957 10.54 15.5 10.54V11.5C15.5 12.4428 15.5 12.9142 15.2071 13.2071C14.9142 13.5 14.4428 13.5 13.5 13.5H11.5C10.5572 13.5 10.0858 13.5 9.79289 13.2071C9.5 12.9142 9.5 12.4428 9.5 11.5V10.665C8.33217 10.665 7.5 9.79515 7.5 8.52633C7.5 7.41206 8.39543 6.50878 9.5 6.50878C9.91166 6.50878 10.2943 6.63424 10.6123 6.84933C10.8857 6.06347 11.6276 5.5 12.5 5.5C13.3724 5.5 14.1143 6.06347 14.3877 6.84933ZM14.3877 6.84933C14.4604 7.05846 14.5 7.28335 14.5 7.51755" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
