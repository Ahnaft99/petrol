import React from 'react'
import Container from './Container'
import car from '../assets/car.png'
import petrol from '../assets/petrol.png'
import gas from '../assets/gas.png'
import ship from '../assets/ship.png'

const Supplier = () => {
  return (
   <div className=''>
    <Container className='flex py-20'>
        <div className='pl-[200px]'>
            <h1 className='text-[48px] w-[289px] font-bold '>The biggest
supplier on
the country</h1>
        </div>
        <div className='py-15  pl-[100px] '>
            <p className='text-[16px] w-[500px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p></div>
    </Container>
    <div className='flex gap-2 pl-2'>
    <img className='w-[303px] h-[300px]' src={car} alt="" />
    <img className='w-[303px] h-[300px]' src={petrol} alt="" />
    <img className='w-[303px] h-[300px]' src={gas} alt="" />
    <img className='w-[303px] h-[300px]' src={ship} alt="" />
    </div>
    
    
   </div>
  )
}

export default Supplier