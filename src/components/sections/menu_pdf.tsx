import Image from 'next/image';
import Link from 'next/link';
import {MenuSection} from '@/data/types/business-data-types'
import { InView, useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Menu = ({ content } : {content: MenuSection}) => (
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
            }}>
            <Link href={content.call_to_action.target_link} target="_blank">
              <div className='text-mainCTA-text bg-mainCTA-normal hover:bg-mainCTA-hover py-4 px-16 lg:py-6 lg:px-[5em] rounded-xl transition text-md font-semibold'>{content.call_to_action.text}</div>
            </Link>
        </motion.div>
      )}
      </InView>

    </div>
    
     
  </div>
);

export default Menu;

// GMaps API key: AIzaSyDxx4k4pwMYdNR4Q8AnGkKv1YbD1dTSCng