import React from 'react'

const HeroBtn = ({ title, underline, visible }) => {
  return (
    <div className={`relative group ${visible}`}>
      <div className='text-white font-semibold text-[14px] px-1.5 mb-1'>
        <button>{title}</button>
      </div>
      <div className={`absolute ${underline ? `${underline}` : ''} h-[3px] w-full duration-200 ease-out group-hover:bg-[#e20112]`}>
      </div>
    </div>
  )
}

export default HeroBtn