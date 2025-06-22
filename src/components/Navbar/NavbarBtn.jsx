import React from 'react';
import { FiArrowDownRight } from "react-icons/fi";

const NavbarBtn = () => {
  return (
    <button className="px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:shadow-cyanShadow hover:scale-110 transition-all duration-500">
      Hire Me
      <div className="hidden sm:block">
        <FiArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
