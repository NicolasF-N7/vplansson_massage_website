import Image from 'next/image';
import Link from 'next/link';
import {Business} from '@/data/types/business-data-types'
import {LocationSection} from '@/data/types/business-data-types'
import {OpeningTimeList} from '@/data/types/business-data-types'
import { InView, useInView } from 'react-intersection-observer';
import { ReactElement, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from '@/components/utility/maps';

const gmaps_api_key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const render = (status: Status): ReactElement => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return <h3>Erreur lors du chargement de la carte google maps</h3>;
};

const OpeningTimeAndLocationMap = ({ businessInfo, locationContent, openingTimeContent } : {businessInfo: Business, locationContent: LocationSection, openingTimeContent: OpeningTimeList}) => (
  <div  className="overflow-hidden max-w-screen-xl px-4 mx-auto">
    
    <div className='flex flex-col xl:flex-row'>
      {/* Opening time */}
      <div id="horaires" className="flex flex-col xl:grow-0 mx-8">
        {/* Title */}
        <h2 className="mb-4 text-3xl font-bold">
          {openingTimeContent.title}
        </h2>
          <div className="flex items-center justify-center px-4">
            <InView threshold={0.15} triggerOnce>
              {/* ref refers to the root element which triggers the inview event */}
              {({ ref, inView}) => (
              <table ref={ref} className="mt-4">
                <tbody>
                  {openingTimeContent.opening_days.map((openingTime, index) => (
                    <motion.tr
                    initial={{ x: -100, opacity: 0 }}
                    animate={inView ? 'visible' : 'hidden'}
                    transition={{ duration: 0.5, delay: 0.05*index }}
                    variants={{
                      visible: { x: 0, opacity: 1 },
                      hidden: { x: -100, opacity: 0 },
                    }}
                    className='leading-10 border-b border-b-2 border-color-[#950d0d]'>
                      <td className="pr-8 py-1 font-medium text-left">{openingTime.day}</td>
                      <td className="pr-8 py-1 whitespace-nowrap">{openingTime.morning}</td>
                      <td className="py-1 whitespace-nowrap">{openingTime.evening}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
              )}
            </InView>
          </div>
      </div>
      
      {/* Gmaps */}
      <div id="acces" className='mt-8 xl:mt-0 xl:grow'>
        {/* Title */}
        <h2 className="mb-4 font-bold text-3xl text-center">{locationContent.title}</h2>
        <div className="flex items-center justify-center" >
          <Wrapper apiKey={gmaps_api_key as string} render={render}>
            <Map businessPosition={locationContent.position} 
            businessName={businessInfo.name} />
          </Wrapper>
        </div> 
      </div>
    </div>
    
     
  </div>
);

export default OpeningTimeAndLocationMap;

// GMaps API key: 