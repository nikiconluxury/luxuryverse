import Image from 'next/image';
import exploreLogo from '../assets/star-icon.svg';

const Marquee = () => {
  const totalWidth = 10 * 10 + 10 * 5 * 5; 

  return (
    <div className='bg-black '>
    <div className="overflow-hidden bg-black py-2 md:py-3 border-b border-[#252525]">
      <div
        style={{ width: `${totalWidth}px` }}
        className="flex animate-marquee hover:animation-paused"
      >
        {[...Array(10)].map((_, index) => (
          <div key={index} className="flex items-center ms-4">
            <Image className="w-4 h-4 mx-4" src={exploreLogo} alt="Explore logo" />
            <p className="text-white capitalize text-xs md:text-sm whitespace-nowrap">
            Private access to the most exclusive luxury brands
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Marquee;
