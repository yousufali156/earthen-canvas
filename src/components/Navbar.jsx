// File: src/components/Navbar.jsx

"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import ThemeToggle from "./ThemeToggle";

// Hamburger Icon Component
const HamburgerIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

// Close Icon Component
const CloseIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export default function Navbar() {
    const { data: session } = useSession();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = (
        <>
            <Link href="/" className="hover:text-terracotta transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/products" className="hover:text-terracotta transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
            <Link href="/about" className="hover:text-terracotta transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link href="/contact" className="hover:text-terracotta transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </>
    );

    return (
        <header className="w-full border-b border-sand/40 bg-cream/80 backdrop-blur sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section (Group 1) */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Image
                                src="/EC.png"
                                alt="Earthen Canvas Logo"
                                width={140}
                                height={40}
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation Links (Group 2) */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks}
                    </div>

                    {/* Desktop Action Buttons (Group 3) */}
                    <div className="hidden md:flex items-center space-x-4">
                        {session ? (
                            <>
                                <Link href="/dashboard/add-product" className="hover:text-terracotta transition-colors text-sm">Add Product</Link>
                                <button onClick={() => signOut({ callbackUrl: "/" })} className="px-4 py-2 rounded-lg bg-charcoal text-cream hover:bg-opacity-90 transition-colors text-sm">Logout</button>
                            </>
                        ) : (
                            <button onClick={() => signIn("google", { callbackUrl: "/products" })} className="px-4 py-2 rounded-lg bg-terracotta text-white hover:bg-opacity-90 transition-colors text-sm">Login</button>
                        )}
                        <ThemeToggle />
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-charcoal hover:text-terracotta focus:outline-none">
                            {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-cream/95 backdrop-blur-lg shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                        {navLinks}
                        <div className="pt-4 mt-4 border-t border-sand/40 w-full flex flex-col items-center space-y-4">
                         {session ? (
                            <>
                                <Link href="/dashboard/add-product" className="hover:text-terracotta transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Add Product</Link>
                                <button onClick={() => {signOut({ callbackUrl: "/" }); setIsMobileMenuOpen(false);}} className="w-3/4 px-4 py-2 rounded-lg bg-charcoal text-cream hover:bg-opacity-90 transition-colors">Logout</button>
                            </>
                        ) : (
                            <button onClick={() => {signIn("google", { callbackUrl: "/products" }); setIsMobileMenuOpen(false);}} className="w-3/4 px-4 py-2 rounded-lg bg-terracotta text-white hover:bg-opacity-90 transition-colors">Login</button>
                        )}
                        <div className="pt-2">
                           <ThemeToggle />
                        </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
