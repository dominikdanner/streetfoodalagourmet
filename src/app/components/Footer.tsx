export default function Footer() {
    return (
        <div className="flex justify-center bg-yellow-50 mt-20">
            <div className="flex flex-col justify-center container w-full">
                <div className="flex justify-center my-20 flex-wrap gap-10 sm:gap-0">
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
                            <li>Tel</li>
                            <li>Email</li>
                            <li>Addr</li>
                            <li>Social Media</li>
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