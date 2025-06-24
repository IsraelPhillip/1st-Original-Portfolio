import React from 'react';

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center text-center md:text-left px-4">
      <h2 className="text-xl md:text-2xl uppercase text-cyan break-words">
        Frontend Web Developer
      </h2>
      <h1 className="text-4xl md:text-[2.8rem] lg:text-6xl font-bold font-special text-orange break-words">
        Israel Phillip
      </h1>
      <p className="text-base md:text-lg mt-4 text-white break-words whitespace-normal">
        A Passionate Web Developer With Years of Experience
      </p>
    </div>
  );
};

export default HeroText;
