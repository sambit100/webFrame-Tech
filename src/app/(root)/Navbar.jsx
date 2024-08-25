'use client'
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { RiLeafLine } from "react-icons/ri";
import { PiLeafFill } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Create a ref for the menu

  const nav = [
    { name: "Rezept einlösen", id: 2, link: "/" },
    { name: "Live Bestand", id: 3, link: "/" },
    { name: "Videosprechstunde", id: 4, link: "/" },
    { name: "FAQs", id: 5, link: "/" },
    { name: "Kontakt", id: 6, link: "/" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div>
      <div className="container py-3 items-center mt-2">
        {/* Desktop Navbar */}
        <div className="hidden sm:flex justify-evenly items-center">
          <div className="relative flex justify-between items-center p-2 bg-cyan-50 rounded-2xl">
            <input
              type="text"
              placeholder="Suchen"
              className="bg-cyan-50 rounded-2xl pl-10 pr-4 w-full"
            />
            <div className="mr-4">
              <FaSearch className="text-cyan-400" />
            </div>
          </div>

          <div className="items-center">
            <ul className="flex justify-evenly gap-x-2 mt-2">
              {nav.map((item) => (
                <li key={item.id}>
                  <Link href={item.link}>
                    <div className="flex items-center gap-x-1 text-teal-600">
                      <PiLeafFill className="text-cyan-600" />
                      <span>{item.name}</span>
                    </div>
                  </Link>
                </li>
              ))}
              <li className="flex justify-center text-cyan-400">
                <div className="items-center text-2xl">
                  <CiShoppingCart className="font-bold text-teal-600 items-center" />
                </div>
              </li>
              <li>
                <button className="bg-lime-100 text-teal-600 rounded-tl-3xl items-center rounded-br-3xl px-4 py-2 shadow-sm">
                  Anmelden
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="sm:hidden flex justify-between items-center p-4">
          <div className="relative flex justify-between items-center p-2 bg-cyan-50 rounded-2xl flex-1">
            <input
              type="text"
              placeholder="Suchen"
              className="bg-cyan-50 rounded-2xl pl-10 pr-4 w-full"
            />
            <div className="mr-4">
              <FaSearch className="text-cyan-400" />
            </div>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="ml-4">
            {menuOpen ? (
              <MdClose className="text-3xl text-teal-600" />
            ) : (
              <MdMenu className="text-3xl text-teal-600" />
            )}
          </button>
        </div>

        {/* Sliding Menu */}
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 h-full bg-white shadow-lg transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out sm:hidden`}
          style={{ width: "250px" }}
        >
          <div className="flex flex-col p-4">
            <ul className="flex flex-col gap-y-4">
              {nav.map((item) => (
                <li key={item.id}>
                  <Link href={item.link}>
                    <div className="flex items-center gap-x-2 text-teal-600">
                      <PiLeafFill className="text-cyan-600" />
                      <span>{item.name}</span>
                    </div>
                  </Link>
                </li>
              ))}
              <li className="flex justify-center text-cyan-400 mt-4">
                <div className="items-center text-2xl">
                  <CiShoppingCart className="font-bold text-teal-600 items-center  w-full h-11" />
                </div>
              </li>
              <li className="mt-4">
                <button className="bg-lime-100 text-teal-600 rounded-tl-3xl items-center rounded-br-3xl px-4 py-2 shadow-sm w-full">
                  Anmelden
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex justify-between p-5">
          <div>
            <p className="text-cyan-700">
              <span>Home</span>
              <span className="mx-2">→</span>
              <span>Livebestand</span>
              <span className="mx-2">→</span>
              <span className="font-bold">Cannabis Blüten</span>
            </p>
          </div>
          <div>
            <p>GKV mit Kostenübernahme?</p>
            <div className="border-cyan-700 border-2 rounded-tl-3xl rounded-br-3xl items-center">
              <p className="ml-10">Preisoptionen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
