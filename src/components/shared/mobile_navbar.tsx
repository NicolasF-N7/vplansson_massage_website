import { useEffect, useState } from "react";
import Link from "next/link";
import {Business, Navigation} from '@/data/types/business-data-types'
import {transformToSafeUrl} from "@/components/utility/functions"
import { Link as ScrollLink } from 'react-scroll';

export default function MobileNavbar({ businessInfo, navigationInfo } : {businessInfo: Business, navigationInfo: Navigation}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <nav>
      <div
        className={`w-full justify-between flex items-center ${isMenuOpen && 'bg-mobile-menu-bg'} p-5`}
        style={{ zIndex: 101 }}>

        <li className="list-none font-bold text-lg">
            <span className={`${isMenuOpen? 'text-textMobileNavBarOpened' : 'text-textNavbar' } text-xl flex items-center`}>
              <img
                className="mr-3"
                src="/logo.png"
                width="96"/>

                <h2>
                  {businessInfo.name}
                </h2>
            </span>
        </li>
        <button
          className="burger visible md:hidden"
          aria-label="Toggle menu"
          type="button"
          onClick={toggleMenu}>

          <MenuIcon data-hide={isMenuOpen} />
          <CrossIcon data-hide={!isMenuOpen} />
        </button>
      </div>
      {isMenuOpen && (
        <ul className={`menu flex flex-col absolute bg-mobile-menu-bg
            ${isMenuOpen && "menuRendered"}`}>

          {navigationInfo.menus.map((menu, index) => {
            const menuRoute = transformToSafeUrl(menu);
            
            return (
              <li
                className="w-full border-b border-white text-textMobileNavBarOpened text-sm font-semibold"
                style={{ transitionDelay: `${150 + index * 25}ms` }}
                key={index}>

                <div className="flex w-auto pb-4">
                <ScrollLink 
                  to={menuRoute}
                  smooth={true}
                  offset={-10} 
                  duration={200}
                  onClick={toggleMenu}
                  className="cursor-pointer">
                    {menu}
                </ScrollLink>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}

type menuProps = {
  "data-hide": boolean;
}

function MenuIcon(props : menuProps) {
  return (
    <svg
      className="h-6 w-6 absolute text-textNavbar"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 17.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props : menuProps) {
  return (
    <svg
      className="h-6 w-6 absolute text-textMobileNavBarOpened"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
