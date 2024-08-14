"use client"
import Link from "next/link";
// components/Navbar.js
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black p-4 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
        <div className="flex justify-center items-center h-16">
          
          <div className="flex justify-center items-center md:hidden">
            <button onClick={toggleMobileMenu} className="text-white">
              {/* Menu icon */}
              <GiHamburgerMenu />
             
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-white px-3 py-2 rounded-md text-2xl font-medium">
                OVERVIEW
              </Link>
              <Link href="/authpage" className="text-white px-3 py-2 rounded-md text-2xl font-medium">
                AUTHENTICATION
              </Link>
              <Link href="/endpoints" className="text-white px-3 py-2 rounded-md text-2xl font-medium">
                ENDPOINTS
              </Link>
              <Link href="/tutorial" className="text-white px-3 py-2 rounded-md text-2xl font-medium">
                TUTORIAL
              </Link>
              <Link href="/code-example" className="text-white px-3 py-2 rounded-md text-2xl font-medium">
                CODE EXAMPLES
              </Link>
              <Link href="/pricing" className="text-white px-3 py-2 rounded-md text-2xl font-medium">
                PRICING
              </Link>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-white px-3 py-2 rounded-md text-2xl font-medium">
                OVERVIEW
              </Link>
              <Link href="/authpage" className="text-white px-3 py-2 rounded-md text-2xl font-medium">
                AUTHENTICATION
              </Link>
              <Link href="/endpoints" className="text-white px-3 py-2 rounded-md text-2xl font-medium">
                ENDPOINTS
              </Link>
              <Link href="/tutorial" className="text-white px-3 py-2 rounded-md text-2xl font-medium">
                TUTORIAL
              </Link>
              <Link href="/code-example" className="text-white px-3 py-2 rounded-md text-2xl font-medium">
                CODE EXAMPLES
              </Link>
              <Link href="/pricing" className="text-white px-3 py-2 rounded-md text-2xl font-medium">
                PRICING
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
