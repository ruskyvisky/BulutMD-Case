import React from 'react'
import MobileMenuItem from '../MobileMenuItem/mobileMenuItem'
import { useNavigate } from "react-router-dom";
export default function MobileMenu({visible}) {
  const navigate = useNavigate();
  if(!visible){
    return null;
}
  return (
    <div className='bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex'>
        <div className='flex flex-col gap-4'>
        <MobileMenuItem label='Home' onClick={()=>{
            navigate("/")
          
        }}/>
        <MobileMenuItem label='Series'  onClick={()=>{
            navigate("/series")
          
        }}/>
        <MobileMenuItem label='Films'  onClick={()=>{
            navigate("/films")
          
        }}/>
        </div>

    </div>
  )
}
