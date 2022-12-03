import React from 'react'
import NavBtn from './NavBtn'
import { FiMenu } from "react-icons/fi"
import { CiUser } from "react-icons/ci"
import logo from "../assets/house.png"

const Navbar = () => {
    const buttons = [
        { title: 'Buy', underline: "-bottom-[1.1rem]" },
        { title: "Sell", underline: "-bottom-[1.1rem]" },
        { title: "Rent", underline: "-bottom-[1.1rem]" },
        { title: "Mortgage", underline: "-bottom-[1.1rem]" },
        { title: "Find Realtors", underline: "-bottom-[1.1rem]" },
        { title: "My Home", underline: "-bottom-[1.1rem]" },
        { title: "News & Insights", underline: "-bottom-[1.1rem]" },
        {
            title: "Advertise", border: "border p-1 rounded-[0.3rem] border-gray-400"
        },
    ];
    return (
        <div className=''>
            <div className='bg-white flex items-center max-h-12
         justify-between px-[2rem] sm:px-[6rem]
         max-w-[100vw] sm-max-w-[90vw] lg-max-w-[85vw] mx-auto whitespace-nowrap'>

                <div className=" lg:hidden flex items-center hover:cursor-pointer">
                    <FiMenu className="w-6 h-6 hover:text-gray-500"/>
                </div>

                <div className='shrink-0 pr-2'>
                    <div className='-my-[0.7rem]'>
                        <a href="">                        
                        <img src={logo} className='w-32 shrink-0' />
                        </a>
                    </div>
                </div>

                <div className='hidden lg:flex'>
                    <ul className='flex space-x-1 py-4 items-center'>
                        {buttons.map((button) => (
                            <NavBtn title={button.title} border={button.border} underline={button.underline} />
                        ))}
                    </ul>
                </div>

                <div className='flex h-full items-center lg:hidden'>
                    <div className='h-9 w-9 bg-[#e20112]
                    rounded-full text-white flex items-center 
                    justify-center hover:cursor-pointer hover:bg-[#990f1b] duration-300'>
                        <CiUser className='text-[28px] ' />
                    </div>
                </div>

                <div className='hidden lg:flex items-center pl-6 text-[15px]'>
                    <button>Log In</button>
                    <div className='bg-[#e20112] py-[6px]
                 text-white rounded-full
                 px-4 ml-6'>
                        <button>Sign Up</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar