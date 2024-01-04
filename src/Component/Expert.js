import React from 'react';
import laptop from '../assets/laptop.jpg';

const Expert = () => {
  return (
    <div className='max-w-[1240px] p-2 mx-auto my-10  md:grid grid-cols-2'>
      <div className='  col-span-1 md:w-[80%] text-center'>
        <img src={laptop} alt="" className='inline'/>
      </div>
      <div className=' col-span-1 flex flex-col  justify-center '>
        <h1 className='text-green-600 font-bold my-2 '>Learn from Experts</h1>
        <p className='my-2 text-justify'>
          adadahgdhagdasdghagdhagdahd ashdgsahdgahdgad adgahdgahgdagdasjd adhgahdgahdgahsd
          adhgahdgahdgahsddahdgahgdad adadgahdgagdad asdsadsa asdasdasdasdasdasdasdasdadsadasdasdasdasdadasdad
          adasdasd
        </p>
        <button className=" w-[30%] bg-black text-white p-3 rounded">Get Started</button>
      </div>
    </div>
  );
}

export default Expert;
