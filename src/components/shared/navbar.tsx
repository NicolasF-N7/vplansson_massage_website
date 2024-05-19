import Link from "next/link";
import React from "react";
import {Business, Navigation} from '@/data/types/business-data-types'
import {transformToSafeUrl} from "@/components/utility/functions"
import { Link as ScrollLink } from 'react-scroll';

function Navbar({ currentPage, businessInfo, navigationInfo } : {currentPage: string, businessInfo: Business, navigationInfo: Navigation}) {
  return (
    <nav className="flex items-center justify-between">
      <li className="list-none font-bold text-lg">
          <span className="text-textNavbar text-xl flex items-center">
            <img
              className="mr-2 scale-90 transform hover:scale-100 transition-transform duration-500"
              src="/logo.png"
              width="80"/>

              <h2 className="hover:text-black transition-all duration-500 hover:duration-100">
                {businessInfo.name}
              </h2>
          </span>
      </li>
      <ul className="flex items-center space-x-10">
        {navigationInfo.menus.map((menu, index) => {
          const menuRoute = transformToSafeUrl(menu);
          
          return (
            <li
              key={index}
              className={`list-none text-textNavbar ${
                currentPage === menu
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-100 transition-opacity"
              }`}>
              <ScrollLink 
                to={menuRoute}
                smooth={true}
                offset={-10} 
                duration={200}
                className="cursor-pointer">
                  {menu}
              </ScrollLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
