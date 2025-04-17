import Link from "next/link";
import React from "react";

const Callout = () => {
  return (
    <div className="rounded-2xl max-w-[1300px] mx-4 my-8 md:mx-auto bg-yellowCustom shadow-xl  py-10  sm:px-12 sm:py-16 lg:flex lg:items-center lg:px-16 lg:py-16">
      <div className=" max-w-[1300px] mx-auto p-6 text-center gap-3 grid grid-cols-1 justify-center items-center  md:grid-cols-2">
        <h2 className="text-darkshadegray text-center  justify-end justify-self-end md:text-nowrap md:text-2xl font-semibold">
        Compare the Best Solar Deals for Your Home
        </h2>
        <div className=" ">
            <Link href='/questions'>
              <button className="inline-flex text-darkshadegray items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-1  bg-white    text-base  gap-x-2 shrink-0    px-10 py-4 rounded-md font-medium">
                Find deals now
              </button>
            </Link>
      </div>
      </div>
    </div>
  );
};

export default Callout;
