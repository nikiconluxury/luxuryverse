"use client"
import Image from 'next/image';
import React from 'react'

const LoadingPage = () => {
    
  
    return(
        <div className='w-screen h-screen loading-gradient relative flex justify-center items-center text-white'>
            <span className="gradient-banner w-[22%] md:w-[30%]"></span>
            {/* <Image src={imgDiamond} alt='diamond'/> */}
        </div>
    ) 
  };

export default LoadingPage
