import React from 'react';

const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="relative group transition-all duration-500">
      <div className="flex flex-col gap-2 items-center relative z-10">
        {/* Icon Circle */}
        <div className="bg-white text-cyan h-[100px] w-[100px] rounded-full hover:text-darkGrey flex items-center justify-center hover:scale-105 transition-all duration-500 text-6xl border-4 border-orange">
          {imgSvg}
        </div>
        <p className="text-white font-bold">{text}</p>
      </div>

      {/* Animated Background on Hover */}
      <div className="w-[105px] h-[100px] top-[50px] absolute left-1/2 -translate-x-1/2 z-0 bg-orange transition-all duration-500 group-hover:h-[140px] group-hover:-translate-y-6 rounded-full" />
    </div>
  );
};

export default SingleSkill;
