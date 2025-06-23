import React from 'react';
import { PiHexagonThin } from "react-icons/pi";
import { motion } from "motion/react"
import {fadeIn} from '/src/FramerMotion/variants';

const HeroPic = () => {
  return (
    <motion.div
    variants={fadeIn('left', 0.2)}
    initial='hidden'
    whileInView='show'
    viewport={{once: false, amount: 0}}
    className="h-full flex items-center justify-center relative">
      <img src="/mycyanphoto.png" alt="Phillip Israel" className="max-h-[450px] w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] object-contain" />

      <div className="absolute -z-10 flex items-center justify-center animate-pulse">
        <PiHexagonThin className="min-h-[600px] md:h-[90%] sm:h-[120%] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;
