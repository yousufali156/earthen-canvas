// File: src/components/Navbar.jsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-green-100 to-orange-100 dark:from-gray-800 dark:to-gray-900 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
          
            <span className="text-lg font-semibold text-gray-800 dark:text-white">Earthen Canvas</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-900 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition font-medium"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Conditional Auth Links */}
            {status === 'loading' ? (
              <div className="text-sm text-gray-500">...</div>
            ) : session ? (
              <>
                <Link href="/dashboard/add-product" className="text-gray-900 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition font-medium">
                  Add Product
                </Link>
                <button onClick={() => signOut()} className="text-gray-900 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition font-medium">
                  Logout
                </button>
              </>
            ) : (
              <button onClick={() => signIn()} className="text-gray-900 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition font-medium">
                Login
              </button>
            )}
            <ThemeToggle />
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-orange-600 focus:outline-none text-2xl"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg px-4 py-3 space-y-3">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block text-gray-800 dark:text-gray-200 hover:text-orange-600">
              {link.label}
            </Link>
          ))}
          <hr className="border-gray-200 dark:border-gray-700"/>
          {/* Conditional Auth Links for Mobile */}
          {session ? (
              <>
                <Link href="/dashboard/add-product" className="block text-gray-800 dark:text-gray-200 hover:text-orange-600">
                  Add Product
                </Link>
                <button onClick={() => signOut()} className="w-full text-left text-gray-800 dark:text-gray-200 hover:text-orange-600">
                  Logout
                </button>
              </>
            ) : (
              <button onClick={() => signIn()} className="w-full text-left text-gray-800 dark:text-gray-200 hover:text-orange-600">
                Login
              </button>
            )}
          <div className="pt-2">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
