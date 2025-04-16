"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/SolarLocal Iconlogo.webp";

const Navbar = () => {

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#whyUs", label: "Why us" },
    { href: "#energySavings", label: "Energy Savings" },
    { href: "#solarEssentials", label: "Solar Essentials" },
  ];



  return (
    <div className="flex justify-between max-w-[1300px]  md:px-6 mx-auto items-center p-2 md:p-4">
      {/* Logo */}
      <Image
        className=" relative right-6   "
        src={logo}
        alt="solar logo"
        width={200}
        height={100}
      />
      {/* Desktop Navigation */}
      <ul className="hidden md:flex cursor-pointer text-darkshadegray w-full text-nowrap items-center justify-center gap-x-6 lg:gap-x-10 text-sm lg:text-base">
        {navLinks.map((link) => (
          <li key={link.href} className="hover:text-[#FBB724]">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {/* Desktop Button */}
      <div className="">
        <Link href="/questions">
        <button className=" bg-gradient-to-b from-yellow-400 font-medium to-orange-400  rounded-lg px-2 py-2 sm:px-6 text-xs md:text-sm tracking--tight text-nowrap capitalize text-white md:text-[1.1rem] md:font-semibold md:py-3  ">
              Compare Solar Now
            </button>
        </Link>
      </div>

    </div>
  );
};

export default Navbar;
