export default function Footer() {
    return (
        <div className="flex justify-center bg-yellow-50 mt-20">
            <div className="flex flex-col justify-center container w-full">
                <div className="flex justify-center my-10 flex-wrap gap-10 sm:gap-0">
                    <div className="w-1/3 min-w-40">
                        <h1 className="text-xl font-semibold">Dokumente</h1>
                        <ul className="">
                            <li>Privacy Policies</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                    <div className="w-1/3 min-w-40">
                        <h1 className="text-xl font-semibold">Kontakt</h1>
                        <ul>
                            <li>Name: Kevin Frick</li>
                            <li>Tel: 0660 8740280</li>
                            <li>Email: dominik.rene.danner@gmail.com</li>
                            <li>Addresse: Pregarten</li>
                            <li><InstagramIcon></InstagramIcon></li>
                        </ul>
                    </div>
                    <div className="w-1/3 min-w-40">
                        <h1>Made by Dominik Danner with ♥</h1>
                    </div>
                </div>
                <hr />
                <div className="flex justify-between items-center my-4 flex-wrap">
                    <p className="min-w-72">Streetfood a la Gourmet, All Right Reserved.</p>
                    <ul className="flex gap-5 min-w-44">
                        <li>Home</li>
                        <li className="border-l-2 border-r-2 px-2">Cookies</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>
        </div>
    )

}


const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
