"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/logo.png";
import { CiUser } from "react-icons/ci";
import { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbarItems = [
    { label: "BOOK", href: "/book" },
    { label: "SITE", href: "/site" },
    { label: "AREA ATTRACTION", href: "/area-attraction" },
    { label: "HELP", href: "/help" },
    { label: "PHOTO + REVIEWS", href: "/photo-reviews" },
  ];

  return (
    <header className="bg-[#2E332A] text-white fixed top-0 w-full z-50 shadow-md h-[76px]">
      <div className="flex items-center justify-between px-6 py-5">
        {/* Logo Section */}
        <div className="relative">
          <div className="z-50 absolute -top-10 bg-[#1E1E1E] rounded-[0%_0%_0%_44%/25%_25%_25%_25%] h-[156px] w-[138px] flex items-center justify-center">
            <Image src={Logo} alt="Logo" width={79} height={79} />
          </div>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            className="text-white"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-[#2E332A] md:relative md:flex md:space-x-4 md:bg-transparent md:justify-center`}
        >
          {navbarItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="relative group block text-center text-white text-sm hover:text-green-400 py-2 md:py-0 md:pb-1"
            >
              {item.label}
              <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-green-400 transition-all duration-500 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#login" className="hover:text-green-400">
            Login
          </a>
          <Link href="">
            <div className="rounded-full bg-gray-700 p-2 border border-gray-600">
              <CiUser size={22} />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
