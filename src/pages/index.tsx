import Image from "next/image";
import Page from "@/components/utility/page";
import Story from "@/components/sections/story";
import HeroVideo from "@/components/sections/hero_video";
import Presentation from "@/components/sections/presentation";
import ServiceSection from "@/components/sections/services_section";
import Menu from "@/components/sections/menu_pdf";
import MenuImg from "@/components/sections/menu_img";
import OpeningTimeAndLocationMap from "@/components/sections/opening_time_and_location_map";
import ContactAndInfo from "@/components/sections/contact_and_info";

// Data import
import {business_data} from "@/data/business-data"

export default function Home() {

  return (
    <Page currentPage="Accueil" business={business_data.business} navigation={business_data.website_content.navigation}>
      {/* SECTION TO BUILD & CONNECT */}
      <HeroVideo content={business_data.website_content.sections.hero_video} />
      <Presentation content={business_data.website_content.sections.presentation} />
      <ServiceSection content={business_data.website_content.sections.services} />
    </Page>
  );
}
