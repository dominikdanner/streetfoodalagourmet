import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-highlight w-full mt-20 text-gray-800">
      <div className="container mx-auto px-5 lg:px-14 py-10">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between gap-10 sm:gap-0">
          {/* Documents & Links */}
          <div className="w-1/2 min-w-40">
            <h1 className="text-xl font-semibold mb-2">Dokumente & Links</h1>
            <ul className="space-y-1">
              <li className="underline hover:text-gray-600 transition">
                <Link href="/impressum">Impressum</Link>
              </li>
              <li className="underline hover:text-gray-600 transition">
                <Link
                  href="https://www.instagram.com/streetfood_a_la_gourmet/"
                  target="_blank"
                >
                  Instagram
                </Link>
              </li>
              <li className="underline hover:text-gray-600 transition">
                <Link href="/datenschutz">Datenschutz</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-1/2 min-w-40">
            <h1 className="text-xl font-semibold mb-2">Kontakt</h1>
            <ul className="space-y-1">
              <li><strong>Name:</strong> Dominik Danner</li>
              <li><strong>Tel:</strong> 0660 8740280</li>
              <li><strong>Email:</strong> <a href="mailto:info@streetfoodgourmet.at" className="underline hover:text-gray-600">streetfoodalagourmet@gmail.com</a></li>
              <li><strong>Adresse:</strong> Bockaudorf 18, 4240 Freistadt, Oberösterreich</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-black my-5" />

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-between items-center">
          <p className="text-sm">© {new Date().getFullYear()} Streetfood a la Gourmet, Alle Rechte vorbehalten.</p>
          <ul className="flex gap-5">
            <li className="hover:text-gray-600 cursor-pointer"><a href="/">Home</a></li>
            <li className="border-l border-black px-2 hover:text-gray-600 cursor-pointer"><a href="mailto:streetfoodalagourmet.at">Help</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}