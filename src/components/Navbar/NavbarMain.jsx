import React, { useState } from "react";
import NavbarBtn from "./NavbarBtn";
import NavbarLinks from "./NavbarLinks";
import NavbarLogo from "./NavbarLogo";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed z-20 w-full px-4 top-0 left-1/2 -translate-x-1/2 pt-10">
      <div className="flex justify-between items-center w-full max-w-[1200px] mx-auto bg-black p-6 rounded-full border border-brown">
        {/* Left: Logo */}
        <NavbarLogo />

        {/* Center: Links (desktop), hidden in mobile */}
        <div className={`hidden lg:block`}>
          <NavbarLinks />
        </div>

        {/* Right: Button and Toggle */}
        <div className="flex items-center gap-4">
          {/* Always show the button */}
          <NavbarBtn />

          {/* Only show toggle on small screens */}
          <div className="lg:hidden flex items-center justify-center w-12 h-12 bg-black border border-orange rounded-full">
            <button onClick={toggleMenu} className="text-2xl text-white">
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden sm:block mt-2">
          <NavbarLinks isMobile />
        </div>
      )}
    </nav>
  );
};

export default NavbarMain;
