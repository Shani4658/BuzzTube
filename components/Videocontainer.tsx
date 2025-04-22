"use client"
import React, { useEffect } from 'react'
import { API_URL } from '../Utils/Constants';

const Videocontainer = () => {
  // console.log(API_URL);
  // console.log(process.env.NEXT_PUBLIC_API_KEY);
  useEffect(()=>{
    getVideos();
  },[]);

  const getVideos = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    console.log(json);
  }
  return (
    <div className='mt-20'>Videocontainer</div>
  )
}

export default Videocontainer