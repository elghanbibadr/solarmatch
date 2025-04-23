"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/solar-match-logo.svg";
import { ArrowRight } from "lucide-react";

const Navbar = () => {

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#whyUs", label: "Why us" },
    { href: "#energySavings", label: "Energy Savings" },
    { href: "#solar101", label: "Solar 101" },
  ];



  return (
    <div className="flex justify-between max-w-[1300px]  md:px-6 mx-auto items-center p-2 md:p-4">
      {/* Logo */}
      <Image
        src={logo}
        alt="solar logo"
        width={120}
        height={100}
      />
      {/* Desktop Navigation */}
      <ul className="hidden md:flex cursor-pointer text-darkshadegray w-full text-nowrap items-center justify-center gap-x-6 lg:gap-x-10 text-sm lg:text-base">
        {navLinks.map((link) => (
          <li key={link.href} className="hover:text-backgroundPaleYellow">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {/* Desktop Button */}
      <div className="">
        <Link href="/questions">
        <button className=" bg-gradient-to-b flex items-center from-[#08B7F8] to-[#036ca8] font-medium  rounded-lg px-2 py-2 sm:px-6 text-xs md:text-sm tracking--tight text-nowrap capitalize text-white md:text-[1.1rem] md:font-semibold md:py-3  ">
        <span>Get Quotes{" "}</span> <ArrowRight className="h-[13px] inline-flex w-5"/>
            </button>
        </Link>
      </div>

    </div>
  );
};

export default Navbar;
