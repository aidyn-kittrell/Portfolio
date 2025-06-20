"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavBarLink from "./NavBarLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const NavBarLinks = [
    {
        href: "#about",
        title: "About"
    },
    {
        href: "#projects",
        title: "Projects"
    },
    {
        href: "#contact",
        title: "Contact"
    }
]

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212]">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link 
                    href={"/"} 
                    className="text-2xl md:text-5xl text-white font-semibold"
                >
                    LOGO
                </Link>
                <div className="mobile-menu block md:hidden">
                    {
                        !isOpen ? (
                            <button
                                onClick={() => setIsOpen(true)}
                                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                            >
                                <Bars3Icon className="h-5 w-5" />
                            </button>
                        ) : (
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                            >
                                <XMarkIcon className="h-5 w-5" />
                            </button>
                        )
                    }
                </div>
                <div 
                    className="menu hidden md:block md:w-auto" 
                    id="navbar"
                >
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {NavBarLinks.map((link, index) => (
                            <li key={index}>
                                <NavBarLink href={link.href} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {isOpen ? <MenuOverlay links={NavBarLinks} /> : null}
        </nav>
    );
};

export default NavBar;