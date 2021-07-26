import byteSize from 'byte-size';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Hero from "../components/Home/Hero";
import PoolBanner from "../components/Home/Pool-banner";
import BlockTable from "../components/Home/Block-table";
import SliderSection from "../components/Home/Slider-section";
import BusinessModal from "../components/utils/business-modal";
import { Context } from '../context/globalStore';
import { useContext, useEffect } from 'react';

function Home({POOL_INFO}) {
  const {dispatch} = useContext(Context);
  useEffect(() => {
    dispatch({type:"SET_POOL_INFO", 
      payload: {
        price: POOL_INFO.price,
        net_space: POOL_INFO.net_space,
        registers: POOL_INFO.registers,
        poolSize: POOL_INFO.poolSize
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  return (
    <div id="root" className="bg-white text-white font-gibson2 text-xl">
      <Hero />
      <PoolBanner/>
      <BlockTable />
      <SliderSection />
      {(typeof window !== 'undefined') ? <BusinessModal /> : null}
    </div>
  );
}

export async function getServerSideProps(context) {
  let price_net_space;
  let registers;
  try {
    price_net_space = await fetch('https://api.chiatk.com/prices',{
      headers: {
        "ChiatkApiKey": "fec9b6f84551-1466-4b91-888d-857d793e"
      },
    })
    registers = await fetch('https://us-central1-basic-zenith-312516.cloudfunctions.net/getNewPoolData')
    price_net_space = await price_net_space.json();
    registers = await registers.json();
  } catch (error) {
    console.log(error)
  }

  return {
    props: { 
      POOL_INFO:{
        price: price_net_space.market.price.toFixed(2),
        net_space: byteSize(price_net_space.netspace, { units: 'iec', precision: 3 }).toString(),
        registers: registers.data.data.farmers,
        poolSize: byteSize(registers.data.data.space, { units: 'iec', precision: 2 }).toString()
      }, 
    }, // will be passed to the page component as props
  }
}

export default Home;

// export async function getStaticProps({ locale }) {
//   return { 
//     props: { 
//       isStatic: true,
//       ...(await serverSideTranslations(locale, ['common', 'app-bar','card_member_list','tools','subscribe','stats','pool-info','hero','footer','faq','business-modal'])),
//     } 
//   };
// }
