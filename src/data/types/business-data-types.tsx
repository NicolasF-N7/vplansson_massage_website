// Define type for the entire business data
export type BusinessData = {
  business: Business;
  website_content: WebsiteContent;
  
};

// Define type for the business object
export type Business = {
  name: string;
  headline: string;
  website_url: string;
  website_thumbnail_url: string;
  social_media: SocialMedia[];
};

type SocialMedia = {
  name: string;
  link: string;
}

// Define type for the website_content object
type WebsiteContent = {
  navigation: Navigation;
  sections: Sections;
};

// Define type for the sections object containing all sections
type Sections = {
  hero: HeroSection;
  story: StorySection;
  gallery: GallerySection;
  menu: MenuSection;
  menu_img: MenuImgSection;
  location: LocationSection;
  opening_time: OpeningTimeList;
  useful_info: UsefulInfoSection;
  contact: ContactSection;
  footer: FooterSection;
};

export type Navigation = {
  menus: string[];
}

// Define type for the hero section
export type HeroSection = {
  title: string;
  subtitle: string;
  call_to_action: CallToAction;
  info: InfoHero[];
};

type InfoHero = {
  icon: string,
  title: string,
  subtitle: string,
}


// Define type for the call_to_action object
type CallToAction = {
  text: string;
  target_link: string;
};

// Define type for the story section
export type StorySection = {
  title: string;
  subtitle: string;
  milestones: string[];
  lastParagraph: string;
};

export type LocationSection = {
  title: string;
  position: Coordinate;
};

export type Coordinate = {
  lat: number;
  lng: number;
}

export type OpeningTimeList = {
  title: string;
  opening_days: OpeningTime[];
};

type OpeningTime =  {
  day: string;
  morning: string;
  evening: string;
};

export type UsefulInfoSection = {
  title: string;
};

export type ContactSection = {
  title: string;
  phone: string;
  email: string;
};

// Define type for the footer section
export type FooterSection = Record<string, never>;

export type GallerySection = {
  title: string;
};

export type MenuSection = {
  title: string;
  call_to_action: CallToAction;
};

export type MenuImgSection = {
  title: string;
  expandable_menu_items: ExpandableItem[];
};

export type ExpandableItem = {
  title: string;
  dishes: Dish[];
}

type Dish = {
  name: string;
  price?: number;
  description?: string;
  image?: string;
}