import React from 'react'
import Typed from "react-typed"

const Banner = () => {
  return (
    <div className="bg-blue-800 p-4 w-full  py-[200px] md:py-[100px]">
    <div className="max-[1240px] my-[100px] mx-auto text-center">
    <div className=' text-xl md:text-4xl font-bold md:p-[24px]'>This is just a Tailwincss Practice</div>
    <h1 className='text-white font-bold   text-3xl  md:text-[80px] md:p-[24px]'>React Js</h1>
    <div className='md:text-4xl text-1xl font-bold text-white md:p-[24px]'>Learn Hard !
        <Typed  className="pl-3" strings={["Anurag Ghimire","Welcome Here","React Developer"]}
        typeSpeed={100}
        loop={true}
        backSpeed={120}
        
        />
    </div>
    <button className=" w-[10%] bg-black text-white p-3 rounded">Get Started</button>
    </div>

      
    </div>
  )
}

export default Banner
