"use client"
import React from 'react'
import { RootState } from '../src/app/store/store';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import LOGO from "../public/Assets/logo.png"
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../src/app/store/appSlice';





const Header = () => {
  const dispatch = useDispatch();
  const isToggle = useSelector((state: RootState) => state.app.isMenuOpen);
    return (
    <div className='m-2 p-2'>
      <div className='grid grid-flow-col items-center text-gray-200'>
      {/* Section 1. Hamburger + Logo */}
      <div className='flex col-span-1 justify-start'>
           <GiHamburgerMenu className='text-gray-600 w-6 h-auto hover:cursor-pointer' onClick={()=>dispatch(toggle())}/>
           <Image src={LOGO} alt="logo" className='pb-2 object-cover object-center w-44 h-10' />

      </div>

      {/* Section 2. Input + search icon */}
      <div className='flex col-span-10 flex-row items-center gap-4'>
        <input type='text' className='border border-gray-400 w-8/12 h-8 rounded-lg'/>
        <button><IoSearch className='h-6 w-auto text-gray-400'/></button>
      </div>
      {/* Section 3. Profile icon */}
      <div className='col-span-1 flex items-center justify-end'>
        <FaUser className='h-8 w-auto' />
      </div>
    </div>
    </div>
    
  )
}

export default Header