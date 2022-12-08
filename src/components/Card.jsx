import React from 'react'
import { AiOutlineHeart, AiTwotoneHeart} from "react-icons/ai"


const Card = ({ photo, price }) => {
  return (
    <div className="min-w-[20rem] shadow-lg rounded-[0.3rem]">
      <div className='relative'>
        <img src={photo} alt="" className='rounded-t-[0.3rem]' />
        <div className="absolute right-2 bottom-1 text-white text-[50px] cursor-pointer">
        <AiOutlineHeart className=''/>
        <AiTwotoneHeart className='text-red-300 absolute opacity-0 top-0 hover:opacity-100'/>
        </div>
        <div className="absolute bg-[#1a52b8] text-white px-2 py-1 rounded-[0.5rem] text-[12px] top-3 left-3 shadow-lg"> 
          <p>NEW</p>
        </div>
      </div>
      
      <div className="mt-2 ml-4 text-[15px] pb-2">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-green-600 rounded-[0.1rem] mr-1.5"></div>
          <p>Single-Family Home</p>
        </div>

        <p className='text-[22px] font-bold'>{price}</p>
        <div className="gap-x-2">
          <div className="flex">
            <span className='font-bold pr-1'>5</span>bed
            <span className='font-bold pr-1 pl-1'>3</span>bath
            <span className='font-bold pl-1 pr-1'>3,747</span>sqft
            <span className='font-bold pr-1 pl-1'>8,655</span>sqft lot
          </div>
          <p>500W 18th St # 11A</p>
          <p>New York, NY 1011</p>
        </div>


      </div>
    </div>
  )
}

export default Card