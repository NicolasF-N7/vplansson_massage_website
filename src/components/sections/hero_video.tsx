  import Image from 'next/image';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { InView, useInView } from 'react-intersection-observer';
import {HeroVideoSection} from '@/data/types/business-data-types'
import Link from 'next/link';

const HeroVideo = ({ content }: {content: HeroVideoSection}) => {
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
    <div id="hero_video" className="relative mx-auto overflow-hidden">
      <InView threshold={0.25} triggerOnce>
        {({ ref, inView}) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.2 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            className="flex flex-col justify-start items-start">
              {/* Video frame */}
              <video src={require("/public/hero_video.mp4")}
              loop muted autoPlay
              className="top-0 right-0 z-[-1] object-cover"
              poster="/public/hero_pict.jpg"></video>

              <h1 className='mt-24 ml-12 absolute'>
                {content.titles.map((title, index) => (
                  <InView threshold={0.25} triggerOnce>
                  {({ ref, inView}) => (
                    <motion.span
                      ref={ref}
                      initial={{ x: -200, opacity: 0 }}
                      animate={inView ? 'visible' : 'hidden'}
                      transition={{ duration: 0.5, delay: (0.3*index+0.5) }}
                      variants={{
                        visible: { x: 0, opacity: 1 },
                        hidden: { x: -200, opacity: 0 },
                      }}
                      className={`block mt-4 sm:text-5xl lg:text-7xl text-header-hero uppercase font-light tracking-widest`}>
                        {title}
                    </motion.span>
                    )}
                </InView>
                ))}
              </h1>

          </motion.div>
        )}
      </InView>
      
    </div>
  );
};

export default HeroVideo;
