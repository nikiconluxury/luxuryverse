"use client"
import Banner from '@/components/Banner'
import Essentials from '@/components/Essentials'
import Footer from '@/components/Footer'
import Invest from '@/components/Invest'
import Marquee from '@/components/Marquee'
import Method from '@/components/Method'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

const RegisterPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const searchParams = useSearchParams()
 
  const twitterParam = searchParams.get('twitter')
  const telegramParam = searchParams.get('telegram')
  const walletParam = searchParams.get('wallet')
  const handleTwitterAuth = async () => {
    const requestTokenUrl = 'https://twitter-auth-icon-workstation-3.popovtech.com/request-token';
    try {
        const response = await fetch(requestTokenUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Received data:', data);

        if (data.authorization_url) {
            window.location.href = data.authorization_url;  // Redirect to the authorization URL
        } else {
            console.error('Failed to get authorization URL', data.error);
        }

        
    } catch (error) {
        console.error('Error fetching auth URL:', error);
    }
};
          
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
        <Marquee />
      <div className="gradient relative">
      <span className="essential-bg"></span>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className=" overflow-hidden">
      
      <div className="wrapper flex flex-col justify-center text-center py-24">
        <div className='px-4'>
        <p className="text-sm md:text-xl text-purpleAsh mb-8">Private access to the most exclusive luxury brands</p>
        <h1 className="text-5xl md:text-7xl dm-font">
          <span className="font-extrabold text-purpleAsh">Lor</span>{" "}
          <span className="text-stroke">Lorem, Ipsum</span>
        </h1>
        <h1 className="text-5xl md:text-7xl dm-font">
          <span className="text-purpleAsh font-extrabold">Ipsum</span>{" "}
          <span className="text-stroke">&</span>{" "}
          <span className="text-purpleAsh font-extrabold"> Lorem</span>{" "}
          <span className="text-stroke">Ipsum</span>
        </h1>
        <p className="text-sm md:text-xl text-purpleAsh my-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus leo.
        </p>
        </div>
        <div className="grid grid-cols-1 px-4 md:px-20 mb-5 gap-5">
        <div className=" text-start flex items-center justify-between flex-col md:flex-row gap-4 card-wrapper ">
                    <div>
                        <h3 className="text-2xl text-center md:text-left md:text-3xl text-purpleAsh font-extrabold uppercase">
                        Follow @LuxuryVerse on x
                        </h3>
                    </div>
                    <div className="z-50">
                        <button onClick={handleTwitterAuth} className="bg-purple px-4 md:px-6 py-2 md:py-2 rounded-full text-white">
                            {twitterParam === "1" ? "Connected" : "Connect"}
                        </button>
                    </div>
                    {/* <span className="register-inner-bg"></span> */}
                    <span className="card-bg !left-0"></span>
                </div>
                <div className=" text-start flex items-center justify-between flex-col md:flex-row gap-4 card-wrapper ">
                    <div>
                    <h3 className="text-2xl text-center md:text-left md:text-3xl text-purpleAsh font-extrabold uppercase ">
                        Join LuxuryVerse telegram
                        </h3>
                    </div>
                    <div className="z-50">
                        <Link href="/register" className="bg-purple px-4 md:px-6 py-2 md:py-2 rounded-full text-white">
                        {telegramParam === "1" ? "Joined" : "Join"}
                        </Link>
                    </div>
                    {/* <span className="register-inner-bg"></span> */}
                    <span className="card-bg !left-0"></span>
                </div>
                <div className=" text-start flex items-center justify-between flex-col md:flex-row gap-4 card-wrapper ">
                    <div>
                    <h3 className="text-2xl text-center md:text-left md:text-3xl text-purpleAsh font-extrabold uppercase ">
                        Connect Wallet
                        </h3>
                    </div>
                    <div className="z-50">
                        <Link href="/register" className="bg-purple px-4 md:px-6 py-2 md:py-2 rounded-full text-white">
                        {walletParam === "1" ? "Connected" : "Connect"}
                        </Link>
                    </div>
                    {/* <span className="register-inner-bg"></span> */}
                    <span className="card-bg !left-0"></span>
                </div>
        </div>
      </div>
    </div>
        <Footer />
      </div>
    </div>
    
  )
}

export default RegisterPage