import React from 'react'

const NavBtn = ({ title, border, underline }) => {
  return (
    <div>
      <li className='relative group text-[14px] whitespace-nowrap'>
        <button className={`px-2 ${border}`}>{title}</button>
        <div className={`absolute group-hover:flex hidden
             h-[0.22rem] w-full ${underline ? `bg-[#e20112] ${underline}` : ''}`}></div>
      </li>
    </div>
  )
}

export default NavBtn