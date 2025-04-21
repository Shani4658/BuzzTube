"use client"
import React from 'react'
import '../src/app/globals.css'
import NavItem from '../UIComponents/NavItem'

import { IoMdHome, IoMdMusicalNote } from 'react-icons/io'
import { SiYoutubeshorts } from 'react-icons/si'
import { BiSolidLike, BiSolidVideos } from 'react-icons/bi'
import { MdOutlineLocalMovies, MdOutlineSportsSoccer, MdSportsEsports, MdWatchLater } from 'react-icons/md'
import { PiFilmSlateFill } from 'react-icons/pi'
import { FaHistory } from 'react-icons/fa'
import { ImYoutube } from 'react-icons/im'
import { useSelector } from 'react-redux'
import type { RootState } from '../src/app/store/store'; 

const Sidebar = () => {
  const menuItems = [
    { label: "Home", icon: <IoMdHome size={25} /> },
    { label: "Shorts", icon: <SiYoutubeshorts size={25} /> },
    { label: "Videos", icon: <BiSolidVideos size={25} /> },
    { label: "Movies", icon: <MdOutlineLocalMovies size={25} /> },
    { label: "Music", icon: <IoMdMusicalNote size={25} /> },
  ];
  
  const subscription = [
    { label: "Music",icon: <IoMdMusicalNote size={25} /> },
    { label: "Gaming",icon: <MdSportsEsports size={25} /> },
    { label: "Sports", icon: <MdOutlineSportsSoccer size={25} /> },
    { label: "Movies", icon: <PiFilmSlateFill size={25} /> },
  ]

  const watchLater = [
    { label: "Watch Later", icon: <MdWatchLater  size={25} /> },
    { label: "Liked Videos", icon: <BiSolidLike size={25} /> },
    { label: "History", icon: <FaHistory size={25} /> },
    { label: "Your Videos", icon: <ImYoutube  size={25} /> },
  ]
  const isSidebarOpen = useSelector((store: RootState) => store.app.isMenuOpen);

  // if(!isSidebarOpen) return null; // Return null if the sidebar is closed
  return (

    <div
    className={`transition-all duration-300 ease-in-out
    ${isSidebarOpen ? 'translate-x-0 pointer-events-auto' : '-translate-x-80 pointer-events-none'}
    col-span-1 shadow-lg shadow-slate-600 p-5 text-lg m-2 text-start rounded-lg`}
    >
      <ul className=''>
        {
          menuItems.map((item,index)=>(
            <NavItem key={index} icon={item.icon}>{item.label}</NavItem>
          ))
        }

      </ul>
      <ul>
        <h1 className='font-bold pt-5'>Subscriptions</h1>
        { 
          subscription.map((item,index)=>(
            <NavItem key={index} icon={item.icon}>{item.label}</NavItem>
          ))
        }
      </ul>
      <ul>
        <h1 className='font-bold pt-5'>Watch Later</h1>
        {
          watchLater.map((item,index)=>(
            <NavItem key={index} icon={item.icon}>{item.label}</NavItem>
          ))
        }
      </ul>
    </div>
  )
}

export default Sidebar