import Image from 'next/image';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { InView, useInView } from 'react-intersection-observer';
import {PresentationSection} from '@/data/types/business-data-types'
import Link from 'next/link';

const Presentation = ({ content }: {content: PresentationSection}) => {
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
    <div id="accueil" className="bg-bg px-8  overflow-hidden">
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
                className="w-[50%]">
                <h2 className="font-bold text-3xl lg:text-4xl text-header-presentation leading-normal mb-8 lg:mb-0">
                  {content.title}
                </h2>
              </motion.div>
            )}
            </InView>

          {/* Right image */}
          <div className="grow-0">
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
                  src={content.image_src}
                  alt="Presentation picture"
                  quality={100}
                  width={300}
                  height={500}
                />
              </motion.div>
              )}
            </InView>
          </div>
        </div>
      </div>

      
    
    </div>
  );
};

export default Presentation;
