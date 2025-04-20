import React from 'react'
const Sidebar = () => {
  const menuItems = [
    'MenuItem1',
    'MenuItem2',
    'MenuItem3',  
    'MenuItem4',
    'MenuItem5']
  return (
    <div className='col-span-1'>
      <ul>
        {menuItems.map((item,index) => (
          <li key={index}>{item}</li>
        ))}
      
      
      
      
      
      
      
        

      </ul>
    </div>
  )
}

export default Sidebar