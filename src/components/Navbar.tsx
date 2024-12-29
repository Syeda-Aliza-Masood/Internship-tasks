"use client";
import Link from "next/link";
import Image from "next/image";
import { User, MessageSquare, ShoppingCart, Heart, Menu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Retrieve the cart count from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItemCount(JSON.parse(savedCart).length); // Set the number of items in the cart
    }
  }, []);

  return (
    <nav className="bg-white text-black">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <a href="#" className="hover:text-gray-300">
            <Image
              src="/logo.png"
              alt="Logo"
              width={200} // Ensure this matches the image's actual width
              height={100} // Ensure this matches the image's actual height
              priority // Optionally load the image eagerly
            />
          </a>
        </div>

           {/* Search Bar with Dropdown and Search Button */}
           <div className="flex-1 hidden md:flex justify-center">
          <div className="flex w-[90%] md:w-[70%]">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search"
              className="w-full py-1 px-4 bg-white text-black rounded-l-lg border border-gray-300 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Dropdown */}
            <select className="py-1 px-2 bg-white text-black text-sm border border-gray-300 rounded-none focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All category</option>
              <option>Automobiles</option>
              <option>Clothes and wear</option>
              <option>Home interiors</option>
              <option>Computer and tech</option>
              <option>Tools, equipments</option>
              <option>Sports and outdoor</option>
              <option>Animal and pets</option>
              <option>Machinery tools</option>
              <option>More category</option>
            </select>

            {/* Search Button */}
            <button
              className="py-1 px-4 bg-blue-600 text-white text-sm rounded-r-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="button"
            >
              Search
            </button>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center justify-end space-x-6 flex-shrink-0">
          <ul className="flex space-x-6">
            {/* Profile */}
            <li className="flex flex-col items-center">
              <User className="w-6 h-6 mb-1" />
              <Link href="/">Profile</Link>
            </li>

            {/* Message */}
            <li className="flex flex-col items-center">
              <MessageSquare className="w-6 h-6 mb-1" />
              <Link href="/Message">Message</Link>
            </li>

            {/* Order */}
            <li className="flex flex-col items-center">
              <Heart className="w-6 h-6 mb-1" />
              <Link href="/Order">Order</Link>
            </li>

            {/* My Cart */}
            <li className="flex flex-col items-center relative">
              <ShoppingCart className="w-6 h-6 mb-1" />
              {/* Cart Item Count Badge */}
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
              <Link href="/Mycart">My Cart</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link href="/" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>
                Profile
              </Link>
            </li>
            <li>
              <Link href="/Message" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>
                Message
              </Link>
            </li>
            <li>
              <Link href="/Order" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>
                Order
              </Link>
            </li>
            <li>
              <Link href="/Mycart" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>
                My Cart
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
