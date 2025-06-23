import React from 'react'
import Container from './Container'


const Banner = () => {
  return (
    <div className="relative py-[200px] bg-[url(../../public/banner.png)] bg-no-repeat bg-center bg-cover after:absolute after:left-0 after:top-0 after:content-[''] after:h-[100%] after:w-full after:bg-[rgba(0,0,0,0.6)] ">
        <Container>
    <div className= "relative z-10 ">
    <h1 className='text-white  text-[64px] font-bold text-center py-5 '>We exist since 1975 on the oil and gas industry.</h1>
    <a className='px-4 border-2 border-red-500 py-4 text-white bg-red-500 ' href="#">LEARN MORE</a>
    </div>
        </Container>
    </div>
  )
}

export default Banner