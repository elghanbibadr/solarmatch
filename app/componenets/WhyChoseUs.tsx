import React from "react";
import step1 from "@/public/images/icons/Savings.svg";
import step2 from "@/public/images/icons/Group.svg";
import step3 from "@/public/images/icons/Group-19.svg";
import step4 from "@/public/images/icons/locationWhite.svg";
import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    icon: step1,
    title: "Our trusted experts calculate your savings.",
    description: "Discover how much you could save by switching to solar.",
  },
  {
    icon: step2,
    title: "Personalised estimates for your energy bill.",
    description:
      "Get a tailored projection based on your home and energy usage.",
  },
  {
    icon: step3,
    title: " Clear insights into your payback period.",
    description:
      "Understand the real value and long-term benefits of going solar.",
  },
  {
    icon: step4,
    title: "Access the best installation options.",
    description: "Choose the installer that fits your needs perfectly.",
  },
];

const WhyChoseUs = () => {
  return (
    <div id="whyUs" className="pt-24 px-4 md:px-6 bg-white mb-10 p-4 max-w-[1300px] mx-auto">
      <h2 className=" text-darkshadegray text-center">
        Why people use  SolarMatch
      </h2>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 my-10 gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className=" border rounded-xl hover:bg-[#FEF7E4] duration-200 p-4 py-5 cursor-pointer border-[#ececec] md:text-left"
            >
              {/* <div className="text-3xl mb-4">{step.icon}</div> */}
              <Image
                className=" h-11 w-11 mb-6"
                src={step.icon}
                height={20}
                width={20}
                alt="step icon"
              />
              <h3 className="text-darkshadegray leading-tight  text-base md:text-[1.1rem] font-medium">
                {step.title}
              </h3>
              <p className="text-sm md:text-base mt-3 text-textColor">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <Link href="/questions">
          <button className="compareNowButtonGradient px-10 py-4">
            Compare Solar Now{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WhyChoseUs;
