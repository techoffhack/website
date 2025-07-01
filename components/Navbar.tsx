"use client"
import React, { useState } from 'react';
import Link from "next/link";
import { Logo } from "@/app/constants/icons"
import { Menu, X } from 'lucide-react';
import  gsap  from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: document.body,
            start: "650px top",
            onEnter: () => setIsScrolled(true),
            onLeaveBack: () => setIsScrolled(false),
            });
    }, []);


    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleLinkClick = () => {
        setOpen(false);
    };

    const navLinks = [
        { title: "the vision", href: "/vision" },
        { title: "speakers", href: "/speakers" },
        { title: "about", href: "/about" },
        { title: "highlights", href: "/highlights" },
        { title: "media", href: "/media" },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-white shadow-lg backdrop-blur-sm' 
                : 'bg-transparent'
        }`}>
            <div className="mx-auto border-b border-[#F9F9F933]">
                <div className="hidden md:flex flex-row items-center justify-between uppercase w-10/12 mx-auto h-24">
                    <div className="flex flex-row justify-between w-[62%]">
                        <div className="flex items-center">
                            <Link href="/">
                            <Logo 
                                    className="transition-colors duration-300"
                                    fillColor={isScrolled ? '#000000' : '#F9F9F9'}
                                />
                            </Link>
                        </div>
                        <div className={`flex flex-row justify-between uppercase items-center text-lg gap-x-6 transition-colors duration-300 ${
                            isScrolled ? 'text-black' : 'text-[#F9F9F9]'
                        }`}>
                            {navLinks.slice(0, 5).map((link, index) => {
                                return (
                                    <div key={index} className="relative hover:opacity-70 transition-opacity">
                                        <Link href={link.href}>
                                            {link.title}
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center gap-x-6">
                        <button className={` px-6 py-3 border uppercase text-lg rounded-sm transition-all duration-300 ${
                            isScrolled 
                                ? 'border-gray-300 text-black hover:bg-gray-50' 
                                : 'border-[#F9F9F980] text-[#F9F9F9] hover:bg-[#F9F9F910]'
                        }`}>
                            <Link href="/">
                                Join Sponsors
                            </Link>
                        </button>

                        <button className={` px-6 py-3 border uppercase text-lg rounded-sm transition-all duration-300 ${
                            isScrolled 
                                ? 'border-black bg-black text-white hover:bg-gray-800' 
                                : 'border-[#F9F9F9] bg-[#F9F9F9] text-black hover:bg-gray-100'
                        }`}>
                            <Link href="/">
                                Apply Now
                            </Link>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="flex md:hidden flex-row justify-between items-center py-6 px-6">
                    <div className="">
                        <Link href="/">
                        <Logo 
                                className="transition-colors duration-300"
                                fillColor={isScrolled ? '#000000' : '#F9F9F9'}
                            />
                        </Link>
                    </div>
                    <div className="flex items-center justify-center">
                        <button onClick={toggleMenu}>
                            {open ? (
                                <X className={`h-5 w-5 transition-colors duration-300 ${
                                    isScrolled ? 'text-black' : 'text-white'
                                }`} />
                            ) : (
                                <Menu className={`transition-colors duration-300 ${
                                    isScrolled ? 'text-black' : 'text-[#F9F9F9]'
                                }`}/>
                            )}
                        </button>
                    </div>
                </div>
            </div>

           {open && (
                <div 
                    className="fixed inset-0 top-0 left-0 w-screen h-screen z-[60] text-[#F9F9F9] p-10 bg-[#0e0f21]"
                >
                    <div className="relative flex h-full flex-col z-10">
                        <div className="flex justify-between items-center">
                            <Logo className=''/>
                            <div className="cursor-pointer" onClick={toggleMenu}>
                                <X className="w-6 h-6 text-[#F9F9F9]" />
                            </div>
                        </div>
                        <div className="flex flex-col h-full justify-center items-center gap-4">
                            {navLinks.map((link, index) => {
                                return (
                                    <div key={index} className="overflow-hidden">
                                        <Link 
                                            href={link.href} 
                                            onClick={handleLinkClick} 
                                            className="uppercase text-2xl hover:opacity-70 transition-opacity"
                                        >
                                            {link.title}
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;