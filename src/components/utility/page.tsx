import Footer from "@/components/shared/footer";
import Head from "next/head";
import MobileNavbar from "@/components/shared/mobile_navbar";
import Navbar from "@/components/shared/navbar";
import {Business, Navigation} from '@/data/types/business-data-types'

function Page({ currentPage, business, navigation, children } : {currentPage: string, business: Business, navigation: Navigation, children: JSX.Element | JSX.Element[]}) {
  const pageTitle = business.name;
  const desc = business.headline;
  const siteUrl = business.website_url;
  const thumbnailImage = business.website_thumbnail_url;
  
  return (
    <div
      className="w-full m-auto flex flex-col items-center justify-center min-h-screen text-black overflow-hidden md:overflow-visible">
      <Head>
        <title>{pageTitle}</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/logo-180.png"/>

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logo-180.png"/>

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/logo-180.png"/>

        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="title" content={pageTitle} />
        <meta name="description" content={desc} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={desc} />
        <meta
          property="og:image"
          content={thumbnailImage}/>

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteUrl} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={desc} />
        <meta
          property="twitter:image"
          content={thumbnailImage}>
        </meta>
        
      </Head>
      <main className="w-full flex-1 text-center">

        {/* Desktop nav bar */}
        <div className="p-5 hidden sm:block z-100 bg-navbar">
          <Navbar currentPage={currentPage} businessInfo={business} navigationInfo={navigation}/>
        </div>

        {/* Mobile nav bar */}
        <div className="block sm:hidden z-100 bg-navbar">
          <MobileNavbar businessInfo={business} navigationInfo={navigation}/>
        </div>

        {/* Sections content */}
        {/* Space y sets margin top and bottom of each child (except outmost children) */}
        <div className="space-y-8">
          {children}
        </div>

      </main>
      <Footer businessInfo={business} navigationInfo={navigation} />
    </div>
  );
}

export default Page;
