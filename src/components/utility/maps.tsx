import { useEffect, useRef, useState, useMemo } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import {Coordinate} from '@/data/types/business-data-types'

const gmaps_api_key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

function Map({ businessPosition, businessName }: 
  {businessPosition: Coordinate, businessName: string}) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = new (window as any).google.maps.Map(mapRef.current, {
        center: businessPosition,
        zoom: 16
      });

      new (window as any).google.maps.Marker({
        position: businessPosition,
        // label: businessName,
        map,
      });
    }


  }, [mapRef, businessPosition]);

  return (
    <div  ref={mapRef} style={{ height: "400px", width: "800px" }}/>
  )
}
export default Map;

