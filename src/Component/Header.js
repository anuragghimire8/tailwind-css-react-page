import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu,} from "react-icons/ai"

const Header = () => {
  const [toogle,setToogle]=useState(true);

  return (
    <div className='bg-blue-800 p-4'>
    <div className='max-w-[1240px] py-[12px] items-center flex justify-between  mx-auto '>
<div className='text-3xl font-bold '>
Hello Baby</div>
{
  toogle ? 
  
<AiOutlineMenu onClick={()=>setToogle(!toogle)} className='text-white text-2xl md:hidden block'/>
:
<AiOutlineClose   onClick={()=>setToogle(!toogle)} className='text-white text-2xl md:hidden block'/> 
} 
<ul className=' hidden md:flex gap-5 text-2xl text-white'>
<li>Home</li>
<li>About</li>
<li>Conatct Us</li>
<li>Company</li>
<li>Resources</li>
</ul>
{/*Responsive Meny */}
<ul className= {` md:hidden  duration-500   text-2xl text-white  fixed bg-black  ${toogle ? 'left-[-100%]' : 'left-0'} top-[92px] w-full h-full`}>
<li className='p-3'>Home</li>
<li className='p-3'>About</li>
<li className='p-3'>Conatct Us</li>
<li className='p-3'>Company</li>
<li className='p-3'>Resources</li>
</ul>
    </div>
    </div>
  )
}

export default Header
