"use client";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import ThemeToggle from "./ThemeToggle";


export default function Navbar() {
    const { data: session } = useSession();
    return (
        <header className="w-full border-b border-sand/40 bg-cream/70 backdrop-blur">
            <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link href="/" className="font-playfair text-2xl text-charcoal">
                    pottery<span className="text-terracotta">.craft</span>
                </Link>
                <div className="flex items-center gap-4">
                    <Link href="/products" className="hover:underline">Products</Link>
                    {session ? (
                        <>
                            <Link href="/dashboard/add-product" className="hover:underline">Add Product</Link>
                            <button onClick={() => signOut({ callbackUrl: "/" })} className="px-3 py-1 rounded-lg bg-charcoal text-cream">Logout</button>
                        </>
                    ) : (
                        <button onClick={() => signIn("google", { callbackUrl: "/products" })} className="px-3 py-1 rounded-lg bg-terracotta text-white">Login</button>
                    )}
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    );
}