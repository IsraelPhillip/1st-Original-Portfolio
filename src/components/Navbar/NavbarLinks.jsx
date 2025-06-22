import React from 'react';
import {Link} from 'react-scroll'
const links = [
  { link: 'About Me', section: 'about' },
  { link: 'Skills', section: 'skills' },
  { link: 'Experience', section: 'experience' },
  { link: 'Projects', section: 'projects' },
  { link: 'Contact', section: 'contact' },
];

const NavbarLinks = ({ isMobile = false }) => {
  return (
    <ul
      className={`flex ${
        isMobile
          ? 'flex-col items-center bg-cyan/30 backdrop-blur-lg py-4 rounded-xl'
          : 'flex-row'
      } gap-6 text-white font-bold text-md text-center`}
    >
      {links.map((link, index) => (
        <li className="group" key={index}>
          <Link
            className="cursor-pointer hover:text-cyan transition-all duration-500"
           to={link.section}
           smooth={true}
           spy={true}
           duration={500}
           offset={-130}
          >
            {link.link}
          </Link>
          <div className="bg-cyan w-0 mx-auto group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
