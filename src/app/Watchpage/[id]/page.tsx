"use client"
import React, { use, useEffect } from 'react'
import Header from '../../../../components/Header'
import Sidebar from '../../../../components/Sidebar'
import { useDispatch } from 'react-redux';
import { closeMenu } from '@/app/store/appSlice';
import { useParams } from 'next/navigation';
import CommentContainer from '../../../../components/CommentContainer';

const page = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  const params = useParams();
  console.log(params.id);
  const videoId = params.id;

  return (
    <div>
      <Header />
      <Sidebar />
      <div className='flex flex-col items-start m-20 mt-16 '>
        {/* <h1 className='text-2xl font-bold'>Watch Page</h1> */}
        <iframe width="1000" height="500" src={`https://www.youtube.com/embed/${videoId}?si=6WKSPFhLmaSjpXZK`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <CommentContainer />
      </div>
      
    </div>
  )
}

export default page