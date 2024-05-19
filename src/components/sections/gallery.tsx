import Image from 'next/image';
import {GallerySection} from '@/data/types/business-data-types'
import { InView, useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Gallery = ({ content } : {content: GallerySection}) => (
  <div id="gallery" className="overflow-hidden max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
     {/* Title */}
     <h2 className="font-bold text-3xl">{content.title}</h2>
     
     <div className="flex flex-col lg:flex-row items-center justify-center">
        {/* First block */}
        <div className="flex flex-row">
            {/* First col of image */}
            <div className='flex flex-col'>
                <InView threshold={0.15} triggerOnce>
                    {({ ref, inView}) => (
                    <motion.div 
                        ref={ref}
                        whileHover={{ scale: 1.05 }}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={inView ? 'visible' : 'hidden'}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { scale: 1, opacity: 1 },
                            hidden: { scale: 0.5, opacity: 0 },
                        }}
                        className="m-1 row-start-2 sm:row-start-1">
                        <Image
                        className="shadow-lg rounded-lg" 
                        src="/gallery/gallery-1-sq.jpg"
                        width={250}
                        height={250}
                        alt="restaurant's food gallery"/>
                    </motion.div>
                    )}
                </InView>

                <InView threshold={0.15} triggerOnce>
                    {({ ref, inView}) => (
                    <motion.div 
                        ref={ref}
                        whileHover={{ scale: 1.05 }}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={inView ? 'visible' : 'hidden'}
                        transition={{ duration: 0.5 }}
                        variants={{
                        visible: { scale: 1, opacity: 1 },
                        hidden: { scale: 0.5, opacity: 0 },
                        }}
                        className="m-1 row-start-2 sm:row-start-1">
                        <Image
                        className="shadow-lg  rounded-lg" 
                        src="/gallery/gallery-2-sq.jpg"
                        width={250}
                        height={250}
                        alt="restaurant's food gallery"/>
                    </motion.div>
                    )}
                </InView>
            </div>
            
            {/* Second high image */}
            <div className='flex flex-col justify-center'>
                <InView threshold={0.15} triggerOnce>
                    {({ ref, inView}) => (
                    <motion.div 
                        ref={ref}
                        whileHover={{ scale: 1.05 }}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={inView ? 'visible' : 'hidden'}
                        transition={{ duration: 0.5 }}
                        variants={{
                        visible: { scale: 1, opacity: 1 },
                        hidden: { scale: 0.5, opacity: 0 },
                        }}
                        className="m-1 row-start-2 sm:row-start-1">
                        <Image
                        className="shadow-lg rounded-lg" 
                        src="/gallery/gallery-3-high.jpg"
                        width={250}
                        height={250}
                        alt="restaurant's food gallery"/>
                    </motion.div>
                    )}
                </InView>
            </div>

        </div>

        {/* Second block */}
        <div className="flex flex-row">
           {/* First col of image */}
           <div className='flex flex-col lg:order-1 order-2'>
                <InView threshold={0.15} triggerOnce>
                    {({ ref, inView}) => (
                    <motion.div 
                        ref={ref}
                        whileHover={{ scale: 1.05 }}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={inView ? 'visible' : 'hidden'}
                        transition={{ duration: 0.5 }}
                        variants={{
                        visible: { scale: 1, opacity: 1 },
                        hidden: { scale: 0.5, opacity: 0 },
                        }}
                        className="m-1 row-start-2 sm:row-start-1">
                        <Image
                        className="shadow-lg rounded-lg" 
                        src="/gallery/gallery-4-sq.jpg"
                        width={250}
                        height={250}
                        alt="restaurant's food gallery"/>
                    </motion.div>
                    )}
                </InView>

                <InView threshold={0.15} triggerOnce>
                    {({ ref, inView}) => (
                    <motion.div 
                        ref={ref}
                        whileHover={{ scale: 1.05 }}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={inView ? 'visible' : 'hidden'}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { scale: 1, opacity: 1 },
                            hidden: { scale: 0.5, opacity: 0 },
                        }}
                        className="m-1 row-start-2 sm:row-start-1">
                        <Image
                        className="shadow-lg rounded-lg" 
                        src="/gallery/gallery-5-sq.jpg"
                        width={250}
                        height={250}
                        alt="restaurant's food gallery"/>
                    </motion.div>
                    )}
                </InView>
            </div>
            
            {/* Second high image */}
            <div className='flex flex-col justify-center order-1 lg:order-2'>
                <InView threshold={0.15} triggerOnce>
                    {({ ref, inView}) => (
                    <motion.div 
                        ref={ref}
                        whileHover={{ scale: 1.05 }}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={inView ? 'visible' : 'hidden'}
                        transition={{ duration: 0.5 }}
                        variants={{
                        visible: { scale: 1, opacity: 1 },
                        hidden: { scale: 0.5, opacity: 0 },
                        }}
                        className="m-1 row-start-2 sm:row-start-1">
                        <Image
                        className="shadow-lg rounded-lg" 
                        src="/gallery/gallery-6-high.jpg"
                        width={250}
                        height={250}
                        alt="restaurant's food gallery"/>
                    </motion.div>
                    )}
                </InView>
            </div>

        </div>

     </div>
     
     
  </div>
);

export default Gallery;