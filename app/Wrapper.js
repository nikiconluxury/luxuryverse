"use client"
import React, { useEffect, useState } from 'react'
import LoadingPage from './loading';

const Wrapper = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000); // 2 seconds delay
  
      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, []);
  
    if (isLoading) {
      return <LoadingPage />;
    }
  return (
    <div>
        {children}
    </div>
  )
}

export default Wrapper