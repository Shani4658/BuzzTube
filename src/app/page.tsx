
import React from 'react'
import Header from '../../components/Header'
import Body from '../../components/Body'

const home = () => {
  return (
    <div className='border m-2 p-2'>
      <Header />
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