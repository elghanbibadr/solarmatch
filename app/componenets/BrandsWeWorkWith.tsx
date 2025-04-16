import React from "react";
import Image from "next/image";

import brand1 from "@/public/images/logo-lg-modified.webp";
import brand2 from "@/public/images/logo-sunpower-modified.webp";
import brand3 from "@/public/images/logo-qcelis-modified.webp";
import brand4 from "@/public/images/logo-canadian-modified.webp";
import brand5 from "@/public/images/logo-Jinko-modified.webp";
import brand6 from "@/public/images/logo-trinasolar-modified.webp";
import brand7 from "@/public/images/logo-rec-modified.webp";
import brand8 from "@/public/images/logo-fronius-modified.webp";
import brand9 from "@/public/images/logo-solaredge-modified.webp";
import brand10 from "@/public/images/logo-sma-modified.webp";
import brand11 from "@/public/images/logo-delta-modified.webp";
import brand12 from "@/public/images/logo-abb-modified.webp";
import brand13 from "@/public/images/logo-enphase-modified.webp";
import brand14 from "@/public/images/logo-schneider-modified.webp";

const brandLogos = [
  { src: brand1, alt: "Brand logo 1" },
  { src: brand2, alt: "Brand logo 2" },
  { src: brand3, alt: "Brand logo 3" },
  { src: brand4, alt: "Brand logo 4" },
  { src: brand5, alt: "Brand logo 5" },
  { src: brand6, alt: "Brand logo 6" },
  { src: brand7, alt: "Brand logo 7" },
  { src: brand8, alt: "Brand logo 8" },
  { src: brand9, alt: "Brand logo 9" },
  { src: brand10, alt: "Brand logo 10" },
  { src: brand11, alt: "Brand logo 11" },
  { src: brand12, alt: "Brand logo 12" },
  { src: brand13, alt: "Brand logo 13" },
  { src: brand14, alt: "Brand logo 14" },
];

const BrandsWeWorkWith = () => {
  return (
    <div
      data-aos="fade-up"
      className="text-center bg-white pt-16 px-4 md:px-6"
    >
      <h2 >Brands we work with</h2>
      <div className="grid grid-cols-2 md:w-[80%] mx-auto py-10 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7 lg:grid-cols-6 gap-4 mt-6 justify-center items-center p-4">
        {brandLogos.map((brand, index) => (
          <Image
            key={index}
            className="mx-auto"
            height={90}
            width={90}
            src={brand.src}
            alt={brand.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default BrandsWeWorkWith;
