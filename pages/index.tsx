import React from "react";
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { AppBar } from "./sections/app-bar";
import Copyright from "./sections/copyright";
import Faq from "./sections/faq";
import Footer from "./sections/footer";
import { Hero } from "./sections/hero";
import PoolInfo from "./sections/pool-info";
import Subscribe from "./sections/subscribe";
import BusinessModal from "./components/business-modal";

export default function Home(props: any) {
  return (
    <div id="root" className="mx-auto shadow text-white bg-white text-xl font-gibson  relative">
      <AppBar />
      <Hero />
      <Subscribe />
      <PoolInfo />
      <Faq />
      <Footer />
      <Copyright />
      {/* <BusinessModal /> */}
    </div>
  );
}

// export async function getStaticProps({ locale }) {
//   return { 
//     props: { 
//       isStatic: true,
//       ...(await serverSideTranslations(locale, ['common', 'app-bar','card_member_list','tools','subscribe','stats','pool-info','hero','footer','faq','business-modal'])),
//     } 
//   };
// }
