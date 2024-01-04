import React from 'react'

const NewsLetter = () => {
  return (
    <div className='bg-blue-800 p-4'>
    <div className='max-w-[1240px] md:flex justify-between'>
    <div className='m-2 '>
    <h1 className='text-[20px] md:text-[40px] font-bold text-white'>Hie please hire me!</h1>
    <span>
    Hello please hire me please 
    </span></div>
    <div className='m-2 '>
   
      <input className='p-3 mr-2 rounded mb-2 text-slate-300 ' placeholder="Enter if you hire me hehe " type="text"/>
      <buton className="bg-black text-white md:p-2   ">Get Started</buton>
      <br/>
      <p className='text-white
      '>I said hire me please <br/><a href='' className='text-black'>Privacy Policy </a>

      </p>
   </div>
   </div>   
    </div>
  )
}

export default NewsLetter
