import Image from "next/image";
import Link from "next/link";
import heroBg from "@/public/solarmatch-hero.png";
import solarPower from "@/public/images/icons/solarPowerSystem.svg";
import solarandbattery from "@/public/images/icons/solarandBatteryColored.svg";

export default function Hero() {
  return (
    <div
      id="hero"
      className="md:grid md:grid-cols-2  gap-10 px-4 md:px-6 max-w-[1300px] mx-auto justify-center justify-items-center place-items-center "
    >
      <div data-aos="fade-right" className="md:my-12   max-w-[1200px] mx-auto ">
        <div className="  ">
          <h1 className="text-[1.38rem]  leading-8 text-darkshadegray text-center md:text-left font-bold md:text-[2.6rem] md:leading-[1.3] md:tracking-[-0.02em]">
            Save Up to $5,000 on Solar <br className="hidden md:block" /> &
            Battery Quotes
          </h1>
      {/* Then in your component */}
<p className="mt-3 p-3 md:p-0 my-4 text-center w-[110%] md:text-left text-textColor">
  You could be eligible for up to $5,000 off with an official government rebate. We’ll check your eligibility and search trusted Aussie installers to find the best solar and battery deals for your home—fast and free. Compare quotes and choose the one that suits you best. No pressure. No hassle.

</p>
        </div>
        {/* "Start Here" Button */}
        <div className="bg-darkshadegray  relative  rounded-lg mx-auto md:mx-0 sm:w-[450px] max-w-[450px]  p-6  mt-10 mb-6 md:p-8 md:rounded-md">
          <Link href="/questions">
            <div className="absolute -top-6 left-0 right-0 mx-auto   flex items-center justify-center animate-bounce-custom">
              <div className="relative bg-gradient-to-b from-yellow-400 to-orange-400 text-white text-sm md:text-lg font-bold px-6 py-3 rounded-md shadow-md">
                Start Here
                <div className="absolute w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-[#FBB724] -bottom-2 left-1/2 transform -translate-x-1/2"></div>
              </div>
            </div>
          </Link>

          {/* Options */}
          <h5 className="text-[1.13rem] md:text-[1.5rem] font-bold mb-3 text-center">
            What are you interested in?
          </h5>
          <div className="flex flex-col sm:flex-row gap-2  justify-center   ">
            {/* Option 1 */}
            <Link href="/questions">
              <div className="bg-paleGray  w-[180px] mx-auto   max-w-[200px]  text-darkshadegray p-2 rounded-md">
                <Image
                  className="mx-auto"
                  src={solarPower}
                  alt="solar power icon"
                />
                <h6 className="text-center text-darkshadegray  text-xs md:text-sm   font-medium  mt-2">
                  Solar Power <br className="hidden md:block" />
                  System
                </h6>
              </div>
            </Link>
            {/* Option 2 */}
            <Link href="/questions">
              <div className="bg-paleGray w-[180px] mx-auto max-w-[200px] text-darkshadegray p-2 rounded-md">
                <Image
                  className="mx-auto"
                  src={solarandbattery}
                  alt="solar power icon"
                />
                <h6 className="text-center text-darkshadegray  font-medium  text-xs md:text-sm mt-2">
                  Solar and <br className="hidden md:block" /> Battery Storage
                </h6>
              </div>
            </Link>
          </div>

          <span className="text-white text-center font-normal leading-[1.2] tracking-[-0.01em] block text-xs md:text-sm mt-6">
            100% obligation free
          </span>
        </div>
      </div>
      <div
        className="mt-10"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <Image src={heroBg} alt="hero alt" width={460} height={460} />
      </div>
    </div>
  );
}
