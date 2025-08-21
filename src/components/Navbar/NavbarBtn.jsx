import React from 'react';
import { FiArrowDownRight } from "react-icons/fi";

const NavbarBtn = () => {
  return (
    
    <a href="https://drive.google.com/file/d/1OLEWG67VC098GQv9s19suOt6mE8x1ot6/view?usp=drive_link">
    <button className="px-4 py-2 rounded-full text-xl font-bold text-white cursor-pointer border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:shadow-cyanShadow hover:scale-110 transition-all duration-500">
      MY CV
      <div className="hidden sm:block">
        <FiArrowDownRight />
      </div>
    </button>
    </a>
      
  
    
  );
};

export default NavbarBtn;
