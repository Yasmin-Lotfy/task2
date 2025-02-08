import React from 'react'
import SideBar from '../SideBar/SideBar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <div className='w-[70%] mx-auto rounded-2xl '>
    <div className='flex sm:gap-8 md:gap-16'>
        
        <SideBar/>
        <div className='w-[100%] md:w-[70%] '><Outlet/></div>
    </div>
    </div>
    
    </>
  )
}
