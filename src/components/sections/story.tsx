import Image from 'next/image';
import {StorySection} from '@/data/types/business-data-types'
import { InView, useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Story = ({ content } : {content: StorySection}) => (
  <div id="story" className="overflow-hidden max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
      {/* Row */}
      <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          
            {/* Image for desktop */}
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
                className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                <Image
                  className="shadow-lg hidden lg:flex w-full mb-4 rounded-lg lg:mb-0" 
                  src="/salad-beef-plate.png"
                  width={500}
                  height={500}
                  alt="Business story image"/>
              </motion.div>
            )}
            </InView>

          <div className="text-gray-900 sm:text-lg">
            {/* Story Headline */}
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
                }}>
                  <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">{content.title}</h2>
                </motion.div>
            )}
            </InView>
            
            {/* Story paragraph */}
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
                  }}>
                    <p className="mb-8 text-justify lg:mx-4 mx-8 font-light lg:text-xl">{content.subtitle}</p>
                </motion.div>
              )}
            </InView>

            {/* Image mobile */}
            <InView threshold={0.05} triggerOnce>
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
                className="flex flex-col items-center">
                <Image
                  className="shadow-lg lg:hidden flex w-[90%] mb-4 lg:mb-0 rounded-lg" 
                  src="/salad-beef-plate.png"
                  width={500}
                  height={500}
                  alt=""/>
              </motion.div>
            )}
            </InView>
            
            {/* Bullet points - Milestones */}
            <div>
              <InView threshold={0.5} triggerOnce>
                {({ ref, inView}) => (
                  <ul ref={ref} role="list" className="pt-8 space-y-5 border-t border-gray-300 my-7">
                    {content.milestones.map((milestoneText, index) => (
                      <motion.li
                      className="flex space-x-3 lg:mx-0 mx-8"
                      
                      initial={{ x: 100, opacity: 0 }}
                      animate={inView ? 'visible' : 'hidden'}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      variants={{
                        visible: { x: 0, opacity: 1 },
                        hidden: { x: 100, opacity: 0 },
                      }}>
                        {/*  Icon  */}
                        <svg className="flex-shrink-0 w-5 h-5 text-purple-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span className="text-base text-left font-medium leading-tight text-gray-900 ">{milestoneText}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </InView>
            </div>
              
              <p className="font-light lg:text-xl">{content.lastParagraph}</p>
              
              
          </div>
      </div>
  </div>
);

export default Story;