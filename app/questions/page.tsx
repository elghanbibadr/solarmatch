import Image from 'next/image'
import React from 'react'
import logo from "@/public/solar-match-logo.svg";
import Quide2 from "@/public/images/Adobe Express - file.png";

import Quiz from '../componenets/Quiz';
import Link from 'next/link';

  
const QuestionsPage = () => {
  return (
    <div >
        <div className="flex justify-between p-1 bg-white md:p-1  items-center">
          <span className="inline-flex w-fit items-center">         
            <Link href='/'>
            <Image
            className='relative left-6'
        src={logo}
        alt="solar logo"
        width={90}
        height={90}
      />
            </Link>
          </span>
          <div className='flex  items-center '>
            <span className=' w-[330px] gradient6 hidden md:inline-flex  rounded-md px-2  gap-x-3'>
              <Image className='hidden w-[76px] relative top-2  transform [rotate:-4deg] [translate-y:-7px]" md:block' src={Quide2} alt='hero image' height={30} width={100} />
              <h4 className='text-darkshadegray self-center text-[14px] text-wrap font-bold'>Save 85% on your power bills by installing solar</h4>
            </span>
            {/* <button className=" bg-gradient-to-b from-[#08B7F8] to-[#036ca8] md:hidden p-2 px-3 text-xs font-medium tracking--tight text-nowrap capitalize text-white md:text-[1.1rem] md:font-semibold md:p-4 rounded-[4px]">
              Compare Solar Now <ArrowRight className="h-[13px] w-5"/>
            </button> */}
          </div>
        </div>
        <Quiz />
    </div>
  )
}

export default QuestionsPage