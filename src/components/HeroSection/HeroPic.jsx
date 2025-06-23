import React from 'react';
import { PiHexagonThin } from "react-icons/pi";


const HeroPic = () => {
  return (
    <div
    
    className="h-full flex items-center justify-center relative">
      <img src="/mycyanphoto.png" alt="Phillip Israel" className="max-h-[450px] w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] object-contain" />

      <div className="absolute -z-10 flex items-center justify-center animate-pulse">
        <PiHexagonThin className="min-h-[600px] md:h-[90%] sm:h-[120%] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </div>
  );
};

export default HeroPic;
