"use client"
import React, { useEffect, useState } from 'react'
import { API_URL } from '../Utils/Constants';
import VideoCard from './VideoCard';

interface VideoType {
  id: string;
  snippet: {
    title: string;
    channelTitle: string;
    thumbnails: {
      default: {
        url: string;
      };
      high: {
        url: string;
      };
    };
  };
  statistics: {
    viewCount: string;
    likeCount: string;
  };
}

const Videocontainer = () => {
  useEffect(()=>{
    getVideos();
  },[]);

  const [videos,setVideos] = useState<VideoType[]>([]);

  const getVideos = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  }
  // console.log(videos);
  return (
    <div className='mt-24 col-span-10 '>
      {
        videos.length > 0 ? (
          <div className='grid grid-cols-1 mx-auto items-center justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
            {
              videos.map((video) => (
                <VideoCard key={video.id} info={video} />
              ))
            }
          </div>
        ):(
          <div className='flex justify-center items-center h-screen'>
            <h1 className='text-3xl font-bold'>Loading...</h1>
          </div>
        )
      }
    </div>
  )
}

export default Videocontainer