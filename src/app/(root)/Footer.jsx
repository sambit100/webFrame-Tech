import React from 'react'
import { PiLeafFill } from "react-icons/pi";
const Footer = () => {
  return (
    <div className="w-full bg-teal-700 text-white py-10 rounded-tl-3xl rounded-tr-3xl mt-40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          <div className="flex flex-col mt-20 font-thin">
            <span className="text-lg  mb-2">AGB</span>
            <span className="mb-2">Impressum</span>
            <span>Datenschutz</span>
          </div>

          <div className="flex flex-col">
  <div className="flex flex-row mb-4 gap-x-10">
    <div className="flex items-center text-lg font-semibold mb-2">
      <PiLeafFill className="mr-2 text-cyan-400" />Rezept einlösen
    </div>
    <span className="flex items-center">
      <PiLeafFill className="mr-2 text-cyan-400" /> Live Bestand
    </span>
  </div>
  <div className="flex flex-row gap-x-5">
    <span className="flex items-center text-lg mb-2">
      <PiLeafFill className="mr-2 text-cyan-400" /> Videosprechstunde
    </span>
    <span className="flex items-center">
      <PiLeafFill className="mr-2 text-cyan-400" /> FAQs
    </span>
    <span className="flex items-center">
      <PiLeafFill className="mr-2 text-cyan-400" /> Kontakt
    </span>
  </div>
</div>


          <div className="flex flex-col ml-0">
            <span className="text-lg font-semibold mb-2">Standort</span>
            <span className="mb-2">Bergsrabe 49-57</span>
            <span className="mb-2">69468 Weinheim</span>
            <span>(3 Glocken Quartier)</span>
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-semibold mb-2">Telefon</span>
            <span className="font-bold mb-2">0223 545 5250</span>
            <span className="text-lg font-semibold mb-2">Öffnungszeiten</span>
            <span>Mo-Fr: 09:00-18:00 Uhr</span>
            <span>Sa: 09:00-14:00 Uhr</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
