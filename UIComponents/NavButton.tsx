import React, { ReactNode } from 'react'

const NavButton = ({children}:{children:ReactNode}) => {
  return (
    <button className='bg-slate-700 px-5 py-2 m-2 rounded-lg hover:cursor-pointer hover:bg-slate-900 hover:border hover:border-slate-600'>
        {children}
    </button>
  )
}

export default NavButton