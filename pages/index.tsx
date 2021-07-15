import React from "react";
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { AppBar } from "./components/App-bar";
import Faq from "./components/Media";
import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import PoolInfo from "./components/Block-table";
import Subscribe from "./components/Promotions";
import BusinessModal from "./utils/business-modal";

export default function Home(props: any) {
  return (
    <div id="root" className="mx-auto relative">
      <AppBar />
      <Hero />
      <Subscribe />
      <PoolInfo />
      <Faq />
      <Footer />
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
