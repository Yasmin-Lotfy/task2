import React from 'react'
import pic from "./../../../public/assets/notfound.webp"
import { Button } from "@heroui/react";
import { useNavigate } from 'react-router-dom';
export default function NotFound() {
                let navigate = useNavigate()
    
  return (
    <div className='flex h-screen flex-col justify-center items-center '>
        <img src={pic} className='w-full' alt="" />
        <Button  className="bg-main-blue my-5 text-white font-main-font text-[16px] "
           onPress={()=>{navigate('/');
           }}>
            Home
          </Button>
    </div>
  )
}
