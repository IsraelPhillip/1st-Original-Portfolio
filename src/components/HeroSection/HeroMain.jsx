import React from 'react';
import HeroGradient from './HeroGradient';
import HeroPic from './HeroPic';
import HeroText from './HeroText';

const HeroMain = () => {
  return (
    <div className="pt-40 pb-16 relative overflow-hidden">
      <HeroGradient />
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-[1200px] mx-auto px-4">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
