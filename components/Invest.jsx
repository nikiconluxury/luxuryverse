import React, { useEffect, useState } from 'react';

const Invest = () => {
  const [opacity, setOpacity] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const startFade = 1660;
      const fadeInEnd = startFade + 200;
      const fadeOutStart = 4260;
      const fadeOutEnd = fadeOutStart + 200;

      let newOpacity = 0;

      if (scrollTop >= startFade && scrollTop <= fadeInEnd) {
        newOpacity = (scrollTop - startFade) / 200;
      } else if (scrollTop > fadeInEnd && scrollTop < fadeOutStart) {
        newOpacity = 1;
      } else if (scrollTop >= fadeOutStart && scrollTop <= fadeOutEnd) {
        newOpacity = 1 - (scrollTop - fadeOutStart) / 200;
      }

      setOpacity(newOpacity);

      // Show button when within the Invest component
      if (scrollTop >= startFade && scrollTop <= fadeOutEnd) {
        
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="invest-bg bg-black relative">
      <div className="invest-wrapper" style={{ opacity }}>
        <p className="text-white text-xl md:text-3xl text-justify w-[800px] leading-[1.6] md:leading-[1.8] font-extrabold px-4">
        Each week, LuxuryVerse curates a collection of the best luxury products for a scheduled drop time. Each product, limited in quantity, will be available for a finite duration, giving you the option to either ship or secure your items in the vault.
        </p>
      </div>
      {showButton && (
        <div className="invest-btn">
          <span>
            <p className="invest-text text-sm md:text-base p-2">Join Waitlist</p>
          </span>
        </div>
      )}
    </div>
  );
};

export default Invest;
