import Image from 'next/image';
import Link from 'next/link';
import {UsefulInfoSection} from '@/data/types/business-data-types'
import {ContactSection} from '@/data/types/business-data-types'
import { InView, useInView } from 'react-intersection-observer';
import { JSX, SVGProps, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Map from '@/components/utility/maps';

const ContactAndInfo = ({ contactContent, usefulInformationContent } : {contactContent: ContactSection, usefulInformationContent: UsefulInfoSection}) => (
  <div id="contact" className="overflow-hidden">
    {/* Title */}
    
    
    {/* Opening time */}

    <div className="flex justify-center py-8">
      <div className="flex flex-col w-full max-w-4xl px-4">
        <div className="flex flex-col lg:flex-row justify-between">

          {/* Contact column */}
          <div className='flex flex-col items-center mb-16'>
            <h2 className="font-bold text-3xl mb-8">{contactContent.title}</h2>
            
            <InView threshold={0.25} triggerOnce>
          {({ ref, inView}) => (
          
            <div className="flex flex-col justify-center space-y-8 w-full lg:flex-row lg:space-x-8 lg:space-y-0">
              {/* Phone */}
              {contactContent.phone &&
              <motion.div
                ref={ref}
                initial={{ x: -100, opacity: 0 }}
                animate={inView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { x: 0, opacity: 1 },
                  hidden: { x: -100, opacity: 0 },
                }}>
                  {/* Rounded-xl used twice: once for the bounding box of the inner <a>, and the second time for the design: rounded background / border */}
                  <div className='mx-[20%] lg:mx-0 rounded-xl overflow-hidden'>
                    <a href={`tel:${contactContent.phone}`}>
                      <div className='py-4 px-12 rounded-xl border-4 bg-secondaryCTA-normal border-secondaryCTA-normal hover:bg-secondaryCTA-hover hover:border-secondaryCTA-hover transition'>
                        <span className='text-center text-secondaryCTA-text text-md font-semibold'>Téléphone</span>
                      </div>
                    </a>
                  </div>
              </motion.div>
              }

              {/* Mail */}
              {contactContent.email &&
              <motion.div
                ref={ref}
                initial={{ x: 100, opacity: 0 }}
                animate={inView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, delay: 0.2 }}
                variants={{
                  visible: { x: 0, opacity: 1 },
                  hidden: { x: 100, opacity: 0 },
                }}>
                  {/* Rounded-xl used twice: once for the bounding box of the inner <a>, and the second time for the design: rounded background / border */}
                  <div className='mx-[20%] lg:mx-0 rounded-xl overflow-hidden'>
                    <a href={`mailto:${contactContent.email}`}>
                      <div className='py-4 px-12 rounded-xl border-secondaryCTA-normal hover:bg-secondaryCTA-normal border-4 transition'>
                        <span className='text-center text-secondaryCTA-text text-md font-semibold'>Mail</span>
                      </div>
                    </a>
                  </div>
              </motion.div>
              }
            </div>
            )}
            </InView>

            
          </div>
          
          
          {/* Useful information column */}
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-3xl">{usefulInformationContent.title}</h2>
            <div className="mt-4 space-y-2">
              <div className="flex items-center">
                <SnowflakeIcon className="text-blue-500 mr-2" />
                <span>Produits frais</span>
              </div>
              <div className="flex items-center">
                <ChurchIcon className="text-red-600 mr-2" />
                <span>Produits Hallal</span>
              </div>
              <div className="flex items-center">
                <LeafIcon className="text-green-500 mr-2" />
                <span>Plats Végétarien</span>
              </div>
              <div className="flex items-center">
                <StoreIcon className="text-yellow-500 mr-2" />
                <span>Produits Locaux</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
     
  </div>
);


function ChurchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2" />
      <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
      <path d="M18 22V5l-6-3-6 3v17" />
      <path d="M12 7v5" />
      <path d="M10 9h4" />
    </svg>
  )
}


function LeafIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}


function SnowflakeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="m20 16-4-4 4-4" />
      <path d="m4 8 4 4-4 4" />
      <path d="m16 4-4 4-4-4" />
      <path d="m8 20 4-4 4 4" />
    </svg>
  )
}


function StoreIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>
  )
}

export default ContactAndInfo;