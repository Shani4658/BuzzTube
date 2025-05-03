"use client"
import React from 'react'
import Header from '../../components/Header'
import Body from '../../components/Body'
import { create } from 'domain'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// const appRouter = createBrowserRouter([
//   {
//     path: '/body',
//     element: <Body />,
//     errorElement: <div>Page Not Found</div>,
//   }
// ])

const home = () => {
  return (
    <div className='border m-2 p-2 absolute w-screen h-screen overflow-y-auto overflow-x-hidden scrollbar-hide'>
      <Header />
      {/* <RouterProvider router={appRouter} /> */}
      <Body />

      {/* 
      ->Header
      ->Body
        Side Bar
           ->MenuItems
        Main Container
            ->Button List
            ->Video Container
              ->Video Card
      */}
    </div>
  )
}

export default home