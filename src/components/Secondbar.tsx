"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

function Secondbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="bg-white py-2 border border-gray-300 sm:border-2 md:border-2 lg:border-2 xl:border-2 rounded hidden md:block">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Left Content */}
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 w-full md:w-auto">
          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="block md:hidden text-black focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute top-12 left-4 bg-white border border-gray-300 rounded shadow-lg md:static md:flex md:space-x-4 md:items-center md:border-none md:shadow-none`}
          >
            <Link
              href="/All Category"
              className="block text-sm text-black hover:text-blue-600 px-4 py-2 md:px-0"
            >
              All Category
            </Link>
            <Link
              href="/Hot Offers"
              className="block text-sm text-black hover:text-blue-600 px-4 py-2 md:px-0"
            >
              Hot Offers
            </Link>
            <Link
              href="/Gift Boxes"
              className="block text-sm text-black hover:text-blue-600 px-4 py-2 md:px-0"
            >
              Gift Boxes
            </Link>
            <Link
              href="/Projects"
              className="block text-sm text-black hover:text-blue-600 px-4 py-2 md:px-0"
            >
              Projects
            </Link>
            <Link
              href="/Menu Item"
              className="block text-sm text-black hover:text-blue-600 px-4 py-2 md:px-0"
            >
              Menu Item
            </Link>

            {/* Dropdown for Help, FAQ, Contact */}
            <select className="block px-4 py-2 bg-white text-black rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 md:px-0 md:py-0">
              <option>Help</option>
              <option>FAQ</option>
              <option>Contact</option>
            </select>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 w-full md:w-auto mt-4 md:mt-0">
          {/* Language Dropdown */}
          <select className="px-4 py-2 bg-white text-black rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>English, USD</option>
            <option>Spanish, EUR</option>
            <option>French, GBP</option>
          </select>

          {/* Ship To Dropdown */}
          <select className="px-4 py-2 bg-white text-black rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Ship To</option>
            <option>China</option>
            <option>UAE</option>
            <option>US</option>
            <option>Germany</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default Secondbar;
