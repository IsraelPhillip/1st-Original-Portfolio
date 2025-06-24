import React from 'react';
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <div className="relative w-full flex justify-center items-center">
      <img
        src="/mycyanphoto.png"
        alt="Phillip Israel"
        className="w-[80%] max-w-[320px] md:max-w-[450px] object-contain"
      />
      <div className="absolute -z-10 animate-pulse">
        <PiHexagonThin className="h-[450px] md:h-[450px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </div>
  );
};

export default HeroPic;
