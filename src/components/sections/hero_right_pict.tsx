import Image from 'next/image';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { InView, useInView } from 'react-intersection-observer';
import {HeroSection} from '@/data/types/business-data-types'
import Link from 'next/link';

const HeroPictSide = ({ content }: {content: HeroSection}) => {
  // const { infoRef, inView, entry } = useInView({
  //   /* Optional options */
  //   threshold: 0.5, // Percentage of the target element visible in the viewport
  // });

  const infoControls = useAnimation();
  const [infoSectionRef, inView] = useInView();


  useEffect(() => {
    if (inView) {
      infoControls.start('visible');
    }
  }, [infoControls, inView]);


  return (
    <div id="accueil" className="max-w-screen-xl px-8  mx-auto overflow-hidden">
      <div>
        
        {/* <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6"> */}
        <div className="flex flex-col items-center pt-8 lg:flex-row justify-between">
          {/* Left text */}
          <InView threshold={0.25} triggerOnce>
            {({ ref, inView}) => (
              <motion.div 
                ref={ref}
                initial={{ x: -100, opacity: 0 }}
                animate={inView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { x: 0, opacity: 1 },
                  hidden: { x: -100, opacity: 0 },
                }}
                className="pb-8 lg:pb-0 flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                <h1 className="font-bold text-3xl lg:text-4xl xl:text-5xl text-black leading-normal">
                  {content.title}
                </h1>
                <h3 className="text-black text-xl mt-4 mb-6">
                  {content.subtitle}
                </h3>
                <Link href={content.call_to_action.target_link} className='self-center lg:self-start'>
                  <div className='text-mainCTA-text bg-mainCTA-normal p-4 rounded-xl hover:bg-mainCTA-hover transition text-md font-semibold'>{content.call_to_action.text}</div>
                </Link>
              </motion.div>
            )}
            </InView>

          {/* Right image */}
          <div className="flex">
          <InView threshold={0.25} triggerOnce>
              {({ ref, inView}) => (
              <motion.div
                ref={ref}
                initial={{ x: 100, opacity: 0 }}
                animate={inView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { x: 0, opacity: 1 },
                  hidden: { x: 100, opacity: 0 },
                }}
                className="h-full w-full">
                <Image
                  src="/burgeeer.webp"
                  alt="Gros burger"
                  quality={100}
                  width={612}
                  height={383}
                />
              </motion.div>
              )}
            </InView>
          </div>
        </div>
      </div>

      
      <div className="relative w-full flex">
        <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {/* Info list */}
          {content.info.map((info, index) => (
            <InView threshold={0.25} triggerOnce>
              {({ ref, inView}) => (
                <motion.div
                  ref={ref}
                  initial={{ y: 100, opacity: 0 }}
                  animate={inView ? 'visible' : 'hidden'}
                  transition={{ duration: 0.5, delay: 0.1*index }}
                  variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: 100, opacity: 0 },
                  }}
                  className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0" key={index} custom={{duration: 2 + index}}>
                  <div className="flex mx-auto w-40 sm:w-auto">
                    <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                      <img src={info.icon} alt={`${info.title} ${info.subtitle}`} className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-xl text-black-600 font-bold">
                        {info.title}
                      </p>
                      <p className="text-lg text-black-500">{info.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </InView>
            
          ))}
        </div>
        <div className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0" style={{ filter: "blur(114px)" }}></div>
      </div>
    </div>
  );
};

export default HeroPictSide;
