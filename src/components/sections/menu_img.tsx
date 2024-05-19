// Represents a section to display a restaurant menu with description text and images for dishes

import Image from 'next/image';
import Link from 'next/link';
import {MenuImgSection} from '@/data/types/business-data-types'
import Accordion from '@/components/utility/accordion';
import ExpandableSection from '@/components/utility/expandable';
import { InView, useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const MenuImg = ({ content } : {content: MenuImgSection}) => (
  <div id="menu" className="overflow-hidden max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
    {/* Title */} 
    <h2 className="font-bold text-3xl">{content.title}</h2>
     
    <div className='flex flex-row justify-center'>
      

      <InView threshold={0.15} triggerOnce>
      {({ ref, inView}) => (
        <motion.div 
            ref={ref}
            initial={{ scale: 5, opacity: 0 }}
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.5 }}
            variants={{
                visible: { scale: 1, opacity: 1 },
                hidden: { scale: 0, opacity: 0 },
            }}
            className='w-full mx-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
            
            {/* Menu categories */}
            {content.expandable_menu_items.map((menuItem, index) => (
              <ExpandableSection title={menuItem.title}>
                {/* Dishes list */}
                {menuItem.dishes.map((dish, index) =>(
                  <div className='flex flex-row bg-white p-4 my-4 rounded-xl'>

                      {/* First col */}
                      <div className='w-1/2 text-left mx-2'>

                        {dish.name && <p className='text-l font-bold mb-2'>{dish.name}</p>}
                        {dish.description && <p className='text-md'>{dish.description}</p>}
                        {dish.price && <p className='text-md font-bold text-deepPumpkin'>{dish.price} €</p>}
                      </div>
                      

                      {/* Second col with picture */}
                      <div className='w-1/2 flex flex-row justify-end mx-2'>
                        <div className='rounded-xl overflow-hidden my-auto'>
                          {dish.image && 
                          <Image 
                          width={128}
                          height={128}
                          src={dish.image}
                          alt={`Image du plat ${dish.name}`}
                          className='object-contain'></Image>}
                        </div>
                        
                      </div>
                  </div>
                ))}
              </ExpandableSection>
            ))}
            
        </motion.div>
      )}
      </InView>

    </div>
    
     
  </div>
);

export default MenuImg;