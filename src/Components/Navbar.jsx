import React from 'react'
import Container from './Container'
import logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <div className='bg-navColor items-center '>
        <Container className= 'py-5 flex'>
            <div className='w-1/3'> 
                <img src={logo} alt="" />
            </div>
            <div className='w-2/3  justify-items-end'>
                <ul className='flex text-white gap-3'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About </a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Blog</a></li>
                    <li ><a className='px-4 border-2 border-white py-2 ' href="#">Contact</a></li>
                </ul>
            </div>
        </Container>
    </div>
  )
}

export default Navbar