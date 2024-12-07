import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-center bg-highlight mt-20 w-full">
      <div className="flex flex-col justify-center container w-full px-5 lg:px-14">
        <div className="flex justify-between my-10 flex-wrap gap-10 sm:gap-0">
          <div className="w-1/3 min-w-40">
            <h1 className="text-xl font-semibold">Dokumente</h1>
            <ul className="">
              <li>
                <Link href={"/impressum"}>Impressum</Link>
              </li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="w-1/3 min-w-40">
            <h1 className="text-xl font-semibold">Kontakt</h1>
            <ul>
              <li>Name: Dominik Danner</li>
              <li>Tel: 0660 8740280</li>
              <li>Email: dominik.rene.danner@gmail.com</li>
              <li>Addresse: Bockaudorf 18, 4240 Freistadt</li>
            </ul>
          </div>
        </div>
        <hr className="border-black" />
        <div className="flex justify-between items-center my-4 flex-wrap">
          <p className="min-w-72">
            Streetfood a la Gourmet, All Right Reserved.
          </p>
          <ul className="flex gap-5 min-w-44">
            <li>Home</li>
            <li className="border-black border-l px-2">Help</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
