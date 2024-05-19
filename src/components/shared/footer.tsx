import Link from "next/link";
import React from "react";
import {Business, Navigation} from '@/data/types/business-data-types'
import {transformToSafeUrl} from "@/components/utility/functions"
import Image from "next/image";

function Footer({ businessInfo, navigationInfo } : {businessInfo: Business, navigationInfo: Navigation}) {
  return (
    <footer className="text-white flex flex-col w-full px-5 py-10 mt-16 border-t-2 border-navbar in z-5 bg-footer-bg">
      <div className="w-full max-w-4xl m-auto flex flex-row justify-around items-start">
        
        {/* Navigation menu links */}
        <div className="flex flex-col">
          {navigationInfo.menus.map((menuTitle, index) => {
            const menuRoute = "#" + transformToSafeUrl(menuTitle);
            return (
              <div key={index} className="text-left mb-5">
                <Link href={menuRoute}>
                  <h4 className="uppercase text-sm">
                    {menuTitle}
                  </h4>  
                </Link>
              </div>
            );
          })}
        </div>

        {/* Social media links */}
        <div className="flex flex-col">
          {businessInfo.social_media.map((socialMedia, index) => {
            return (
              <div key={index} className="uppercase text-left font-bold mb-5">
                <Link
                  href={socialMedia.link}
                  target="_blank"
                  className="items-center flex">

                  {socialMedia.name}
                </Link>
              </div>
            );
          })}
        </div>
        

      </div>

      <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center border-t-2 border-navbar">
        <div className="flex flex-col items-center justify-center ">
          
          <div className="mt-2 text-xs ">
            Fait par Zébulon. Tout droits réservés
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
