import React from 'react'
import houses from '../assets/city.jpg'
import HeroBtn from '../components/HeroBtn'
import { RiSearchLine } from "react-icons/ri"


const Hero = () => {
  const buttons = [
    { title: 'BUY', underline: "bg-[#e20112]" },
    { title: 'RENT'},
    { title: 'SELL'},
    { title: 'PRE-APPROVAL'},
    { title: 'JUST SOLD', visible: 'hidden sm:block' },
    { title: 'HOMEVALUE', visible: 'hidden sm:block' },
  ]
  return (
    <div className='h-[28.3rem] flex'>
      <div className="absolute w-full z-20">
        <div className="bg-black/40 absolute z-10 w-full h-[28.3rem]"></div>
        <img src={houses} className="object-cover w-full h-[28.3rem]" />
      </div>
      <div className="relative z-30 flex flex-col items-center w-full pt-14">
        <h2 className='text-white text-[32px] sm:text-[57px] font-bold '>To each their home.</h2>
        <p className='text-white pt-2 sm:pt-0 text-[16px] sm:text-[20px]'>Let's find a home that's perfect for you</p>
        <ul className=''>
          <div className="pt-10 flex space-x-5 sm:space-x-3">
            {buttons.map((button) => (
              <HeroBtn title={button.title} underline={button.underline} visible={button.visible} />
            ))}
          </div>
        </ul>
        <div className="mt-7 relative">
          <input type="search" className='bg-white py-4 w-[27rem] sm:w-[36rem] outline-none rounded-full pl-5 placeholder:text-gray-500 placeholder:text-[20px]'
            placeholder='Address, School, City, Zip or Neighborhood' />
          <div className="absolute w-12 h-12 rounded-full bg-[#e20112] top-[0.3rem] right-1 flex justify-center items-center hover:cursor-pointer hover:bg-[#990f1b] duration-300">
              <RiSearchLine className='text-white text-[22px]'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero