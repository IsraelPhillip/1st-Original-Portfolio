import React from 'react';

const HeroGradient = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="shadow-cyanMediumShadow absolute animate-pulse w-72 h-72 sm:w-60 sm:h-60 right-[400px] md:right-[200px] sm:right-10 top-0 rounded-full blur-3xl"></div>
      <div className="shadow-orangeMediumShadow absolute animate-pulse w-72 h-72 sm:w-60 sm:h-60 right-0 top-0 rounded-full blur-3xl"></div>
      <div className="shadow-cyanMediumShadow absolute opacity-50 w-72 h-72 sm:w-60 sm:h-60 top-[300px] left-0 rounded-full blur-3xl"></div>
      <div className="shadow-orangeMediumShadow absolute opacity-50 w-72 h-72 sm:w-60 sm:h-60 top-[500px] left-0 rounded-full blur-3xl"></div>
    </div>
  );
};

export default HeroGradient;
