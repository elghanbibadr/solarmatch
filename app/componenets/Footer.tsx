"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/public/solar-match-logo.svg";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const heroSection = document.getElementById("hero");
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // Adjust this threshold as needed
    );

    observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);
  return (
    <footer className="bg-gray-100 text-textColor py-20">
      <div className="max-w-[1300px] mx-auto px-4 flex flex-col md:flex-row md:justify-around items-center text-center md:text-left">
        {/* Heading and Description */}
        <div className="mb-6">
          <h2 className="text-xl md:text-3xl font-bold mb-2">
          Find your Solar Match!
          </h2>
          <p>
            We make going solar easy with our 5-star service. See how much you
            can save!
          </p>
          <ul className="flex relative bottom-4 text-sm justify-center md:justify-start items-center mt-10 gap-x-3">
            <li className="hover:text-[#FBB724] text-textColor">
              <Link target="_blank" href={"/privacy"}>Privacy Policy</Link>
            </li>
            <span>|</span>
            <li className="hover:text-[#FBB724] text-textColor">
              <Link target="_blank" href={"/terms"}>Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <span className="inline-flex w-fit items-center">
            <Image src={logo} alt="solar logo" width={200} height={100} />
          </span>

          {/* Links Section */}

          <p className="text-gray-400 text-sm mt-2">© 2025 SolarMatch</p>
        </div>
      </div>
      <div
       className={`w-full mt-10 bg-gradient-to-b from-[#08B7F8] to-[#036ca8] text-white transition-all duration-300 ${
        isHeroVisible ? "static " : "fixed bottom-0"
      }`}
      
      >
        <div className=" p-6 py-3  text-center gap-3  grid grid-cols-1 justify-center items-center md:grid-cols-2">
          <h3 className="text-darkshadegray text-center  justify-end justify-self-end md:text-nowrap md:text-lg font-semibold">
            Get 3 Free Solar Quotes from Local Installers{" "}
          </h3>
          <div className=" ">
            <Link href="/questions">
              <button className="inline-flex  items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-1  bg-white text-darkshadegray    text-base  gap-x-2 shrink-0    px-10 py-2 rounded-md font-medium">
              Compare Now <ArrowRight className="h-[13px] w-5"/>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
