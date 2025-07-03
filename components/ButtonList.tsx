"use client"
import React from 'react'
import NavButton from '../UIComponents/NavButton'
import {useRef} from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'


const ButtonList = () => {
  const List = ['All', 'Music', 'Gaming', 'Sports', 'Movies', 'Live', 'Shorts', 'Learning', 'Spotlight', 'Entertainment' , 'News', 'Fashion', 'Comedy', 'Travel', 'Food', 'Science', 'Technology', 'Health', 'Animals', 'Kids']
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRight = () => scrollRef.current?.scrollBy({left: 200, behavior: 'smooth'});
  const scrollLeft = () => scrollRef.current?.scrollBy({left: -200, behavior: 'smooth'});
  return (
    <div className='fixed w-full flex justify-center z-30'>
      <button onClick = {scrollLeft}><FaAngleLeft /></button>
      <div ref={scrollRef} className='relative flex overflow-x-scroll scroll-smooth scrollbar-hide gap-2 w-9/12'>
      {
      List.map((item,index)=>(
        <NavButton key={index}>{item}</NavButton>
      ))
      }
      
      </div>
      <button onClick = {scrollRight}><FaAngleRight /></button>
      
    </div>
  )
}

export default ButtonList