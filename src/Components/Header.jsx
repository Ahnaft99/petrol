import React from 'react'
import Container from './Container'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume, FaInstagram } from "react-icons/fa";
import { CiFacebook, CiTwitter, CiLinkedin } from "react-icons/ci";


const Header = () => {
  return (
    <div className='bg-headerColor py-4'>
            <Container className='flex ' >
         <div className='w-1/4 '>
         <div className='flex items-center gap-3 border-r-2 border-white'>
         <MdOutlineEmail className='text-white'/>
         <p className='text-white'>mail@yourcompany.com</p>
         </div>
         </div>
         <div className='w-1/4'>
         <div className='flex items-center gap-3 justify-center'>
            <FaPhoneVolume className='text-white' />
            <p className='text-white'>+896 120 5889 (Toll free)</p>
         </div>
         </div>
         <div className='w-2/4'>
         <div className='text-white flex justify-end gap-3'>
            <CiFacebook/>
            <CiTwitter/>
            <CiLinkedin/>
            <FaInstagram/>
         </div>
         </div>
    </Container>
    </div>

   
  )
}

export default Header