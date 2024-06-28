import Image from 'next/image';
import logoBailmain from "@/assets/partners/bailmain.png"
import logoCanali from "@/assets/partners/canali.png"
import logoCavalli from "@/assets/partners/cavalli.png"
import logoEtro from "@/assets/partners/etro.png"
import { useEffect, useRef } from 'react';

const MarqueePartners = () => {
  const totalWidth = 50 * 10 + 20 * 5 * 5; 
  const images = [logoBailmain, logoCanali, logoCavalli, logoEtro]

  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let start = 0;

    const move = () => {
      start -= 1;
      carousel.style.transform = `translateX(${start}px)`;

      // Reset the position when the first image is completely out of view
      if (Math.abs(start) >= carousel.children[0].offsetWidth) {
        carousel.appendChild(carousel.children[0]);
        start = 0;
        carousel.style.transform = `translateX(${start}px)`;
      }

      requestAnimationFrame(move);
    };

    move();

    return () => cancelAnimationFrame(move);
  }, []);

  return (
    <div className='bg-transparent '>
    <div className=" overflow-hidden bg-transparent py-2 md:py-3 border-b border-[#252525]">
      <div
        // style={{ width: `${totalWidth}px` }}
        // style={{ width: `100%` }}
        className="flex justify-between items-center gap-4  hover:animation-paused"
        ref={carouselRef} 
      >
        {[...images,...images].concat(images).map((_, index) => (
          <div key={index} className="flex items-center justify-center ms-4 bg-white rounded-2xl">
            <Image className=" mx-4 min-w-40" src={_} alt="Explore logo" />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default MarqueePartners;
