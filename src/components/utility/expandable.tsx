import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from "next/image";
import {motion, useAnimation} from "framer-motion"

const ExpandableSection = ({title, children}: {title: string, children: JSX.Element | JSX.Element[]}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const controls = useAnimation();

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
    controls.start({ height: isExpanded ? 0 : "auto" });
  };

  {/* Hidden by default */}
  useEffect(() => {
    controls.start({ height: 0});
  }, []);

  return (
      <>
        <div className="">
          
           <motion.div className={`flex-col rounded-xl p-2 w-full
              transition-colors duration-200 ease-in-out ${isExpanded ? 'bg-expanded' : 'hover:bg-expanded bg-expandable'}`}
              whileHover={`bg-olivine`}>
            
            <button onClick={toggleExpand} className="w-full p-2">
              <div className="flex">
              <h2 className="flex-1 items-center text-xl font-bold">{title}</h2>

                <motion.div
                  initial={false}
                  animate={{ rotate: isExpanded ? [0, 180] : [180,360] }} 
                  whileHover={isExpanded ? {} : { rotate: 20 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="text-charcoal text-xl font-bold">
                    
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                  </svg>
                </motion.div>
              </div>
            </button>

            <motion.div animate={controls}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{overflow: "hidden"}}>
              <div className="m-6">
                {children}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </>
  );
};

export default ExpandableSection;