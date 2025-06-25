import React from 'react'


const Learn = () => {
  return (
    <div className='flex py-10 justify-center'>
        <div className='w-[413px]  bg-[#F40404]'>
            <p className='text-[36px] font-bold text-white py-32 w-[250px ] pl-14'>Learn more about our company</p>
        </div>
        <div className="relative w-[500px] h-[400px] bg-[url(/public/road.png)] bg-no-repeat bg-center bg-cover after:absolute after:left-0 after:top-0 after:content-[''] after:h-[100%] after:w-full after:bg-[rgba(0,0,0,0.6)] ">
        <div className= "relative z-10  justify-center pt-[200px]">
   
    <a className='px-4 border-2 border-red-500 py-4 text-red-500 bg-white ml-[35%]' href="#">LEARN MORE</a>
    </div>
        </div>
    </div>
  )
}

export default Learn