import byteSize from 'byte-size';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Hero from "../components/Home/Hero";
import PoolBanner from "../components/Home/Pool-banner";
import BlockTable from "../components/Home/Block-table";
import SliderSection from "../components/Home/Slider-section";
import BusinessModal from "../components/utils/business-modal";
import Layout from "../components/Layout";
import { Context } from '../context/globalStore';
import { useContext, useEffect, useState } from 'react';
import VideoModal from '../components/utils/video-modal';
import Benefits from '../components/Home/Benefits';

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
    <Layout>
      <div id="root" className="bg-white text-white font-gibson2 text-xl">
        <Hero />
        <PoolBanner/>
        <BlockTable />
        <Benefits />
        <SliderSection />
        {showModal && state.BusinessModalIsOpen && <BusinessModal />}
        {showModal && state.VideoModalIsOpen && <VideoModal />}
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ locale }) {
  let chiaPrice;
  let chiaNetSpace;
  let biopoolInfo;
  try {

    [chiaPrice, chiaNetSpace, biopoolInfo] = await 
      Promise.all([
        fetch('https://xchscan.com/api/chia-price'), 
        fetch('https://xchscan.com/api/netspace'), 
        fetch('https://us-central1-basic-zenith-312516.cloudfunctions.net/getNewPoolDataSimple')
    ]);
    chiaPrice = await chiaPrice.json();
    chiaNetSpace = await chiaNetSpace.json();
    biopoolInfo = await biopoolInfo.json();
  } catch (error) {
    console.log(error)
  }

  return {
    props: { 
      ...(await serverSideTranslations(locale, ['app-bar','footer','block-table','hero','media','pool-banner','promotions','business-modal','benefits'])),
      POOL_INFO:{
        price: chiaPrice.usd,
        net_space: await byteSize(chiaNetSpace.netspace, { units: 'iec', precision: 3 }).toString(),
        activeUsers: biopoolInfo.data.data.farmers,
        poolSize: await byteSize(biopoolInfo.data.data.space, { units: 'iec', precision: 2 }).toString(),
        poolBlocks: await biopoolInfo.data.data.blocks.map(block => {
          const date1 = new Date(block.timestamp*1000);
          const date2 = new Date();
          const diffTime = Math.abs(date2.getTime() - date1.getTime());
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
          return{
            ...block,
            time: diffDays,
            amount: `${block.amount/1000000000000} XCH`
          }
        })
      }, 
    }, // will be passed to the page component as props
  }
}

export default Home;
