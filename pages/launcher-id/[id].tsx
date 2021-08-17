import byteSize from 'byte-size';
import { Context } from '../../context/globalStore';
import { useContext, useEffect } from 'react';
import UserInfo from '../../components/Launcher-id/User-info';
import LauncherTables from '../../components/Launcher-id/Launcher-tables';
import Layout from "../../components/Layout";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const LauncherId = ({launcherInfo}) =>{
  const {dispatch} = useContext(Context);
  useEffect(() => {
    dispatch({type:"SET_LAUNCHER_INFO", 
      payload: {
        ...launcherInfo
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  return (
    <Layout>
      <UserInfo />
      <LauncherTables />
    </Layout>
  )
}

export async function getServerSideProps({params, locale}) {
  let farmerInfo;
  try {
    farmerInfo = await fetch(`https://us-central1-basic-zenith-312516.cloudfunctions.net/getFarmerData?louncher_id=${params.id}`)
    farmerInfo = await farmerInfo.json();
  } catch (error) {
    return {
      notFound: true
    }
  }
  if(!farmerInfo || !farmerInfo.data || !farmerInfo.data.space){
    return {
      notFound: true
    }
  }

  return {
    props: { 
      ...(await serverSideTranslations(locale, ['app-bar','footer','launcher-id'])),
      launcherInfo: {
        ...farmerInfo.data,
        space: byteSize(farmerInfo.data.space, { units: 'iec', precision: 3 }).toString(),
        chias_pagadas: farmerInfo.data.chias_pagadas.toString(),
        payments: farmerInfo.data.payments.map(payment => {
          return {
            ...payment,
            time: new  Date(payment.time*1000).toLocaleString(),
            amount: payment.amount/ 1000000000000
          }
        }),
        partials: farmerInfo.data.partials.map(partial => {
          return {
            ...partial,
            time: new  Date(partial.timestamp*1000).toLocaleString()
          } 
        }),
        blocks: farmerInfo.data.blocks.map( block => {
          return {
            ...block,
            time: new  Date(block.timestamp*1000).toLocaleString()
          }
        })
      },
    },
  }
}

export default LauncherId;