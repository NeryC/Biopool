import byteSize from 'byte-size';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Hero from "../components/Home/Hero";
import PoolBanner from "../components/Home/Pool-banner";
import BlockTable from "../components/Home/Block-table";
import SliderSection from "../components/Home/Slider-section";
import BusinessModal from "../components/utils/business-modal";
import { Context } from '../context/globalStore';
import { useContext, useEffect, useState } from 'react';
import VideoModal from '../components/utils/video-modal';

function Home({POOL_INFO}) {
  const {state, dispatch} = useContext(Context);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setShowModal(true);

    dispatch({type:"SET_POOL_INFO", 
      payload: {
        price: POOL_INFO.price,
        net_space: POOL_INFO.net_space,
        activeUsers: POOL_INFO.activeUsers,
        poolSize: POOL_INFO.poolSize,
        poolBlocks: POOL_INFO.poolBlocks
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
      {showModal && state.BusinessModalIsOpen && <BusinessModal />}
      {showModal && state.VideoModalIsOpen && <VideoModal />}
    </div>
  );
}

export async function getServerSideProps({ locale }) {
  let chiaInfo;
  let biopoolInfo;
  try {

    [chiaInfo, biopoolInfo] = await 
      Promise.all([
        fetch('https://api.chiatk.com/prices',{
          headers: {
            "ChiatkApiKey": "fec9b6f84551-1466-4b91-888d-857d793e"
          },
        }), 
        fetch('https://us-central1-basic-zenith-312516.cloudfunctions.net/getNewPoolDataSimple')
    ]);
    
    chiaInfo = await chiaInfo.json();
    biopoolInfo = await biopoolInfo.json();
  } catch (error) {
    console.log(error)
  }

  return {
    props: { 
      POOL_INFO:{
        price: chiaInfo.market.price.toFixed(2),
        net_space: byteSize(chiaInfo.netspace, { units: 'iec', precision: 3 }).toString(),
        activeUsers: biopoolInfo.data.data.farmers,
        poolSize: byteSize(biopoolInfo.data.data.space, { units: 'iec', precision: 2 }).toString(),
        poolPoints:biopoolInfo.data.data.points,
        poolBlocks: biopoolInfo.data.data.blocks.map(block => {
          const date1 = new Date(block.timestamp*1000);
          const date2 = new Date();
          const diffTime = Math.abs(date2.getTime() - date1.getTime());
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
          return{
            ...block,
            timestamp: `${diffDays} ${diffDays <= 1 ? `day` : `days`} ago`,
            amount: `${block.amount/1000000000000} XCH`
          }
        })
      }, 
      ...(await serverSideTranslations(locale, ['common', 'app-bar','card_member_list','tools','subscribe','stats','pool-info','hero','footer','faq','business-modal'])),
    }, // will be passed to the page component as props
  }
}

export default Home;
