import React from 'react';
import HeroGradient from './HeroGradient';
import HeroPic from './HeroPic';
import HeroText from './HeroText';


const HeroMain = () => {
  return (
    <div className="pt-40 pb-16 relative">
      <HeroGradient />
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center px-4">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
