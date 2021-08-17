import byteSize from 'byte-size';
import { Context } from '../context/globalStore';
import { useContext, useEffect } from 'react';
import LeaderboardInfo from '../components/Leaderboard/Leaderboard-info';
import RankTable from '../components/Leaderboard/Rank-table';
import Layout from "../components/Layout";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const LauncherId = ({LAUNCHER_INFO}) =>{
  const {dispatch} = useContext(Context);
  useEffect(() => {
    dispatch({type:"SET_LEADERBOARD_INFO", 
      payload: {
        net_space: LAUNCHER_INFO.net_space,
        poolSize: LAUNCHER_INFO.poolSize,
        poolPoints: LAUNCHER_INFO.poolPoints,
        farmers: LAUNCHER_INFO.farmers
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <Layout>
      <LeaderboardInfo />
      <RankTable />
    </Layout>
  )
}

export async function getServerSideProps({locale}) {
  let chiaNetSpace;
  let biopoolInfo;
  try {

    [chiaNetSpace, biopoolInfo] = await 
      Promise.all([
        fetch('https://xchscan.com/api/netspace'), 
        fetch('https://us-central1-basic-zenith-312516.cloudfunctions.net/getNewPoolData')
    ]);
    chiaNetSpace = await chiaNetSpace.json();
    biopoolInfo = await biopoolInfo.json();
  } catch (error) {
    console.log(error)
  }

  return {
    props: { 
      ...(await serverSideTranslations(locale, ['app-bar','footer','leaderboard'])),
      LAUNCHER_INFO:{
        net_space: byteSize(chiaNetSpace.netspace, { units: 'iec', precision: 3 }).toString(),
        poolSize: byteSize(biopoolInfo.data.data.space, { units: 'iec', precision: 2 }).toString(),
        poolPoints: biopoolInfo.data.data.points,
        farmers: biopoolInfo.data.farmers.map(farmer => {
          return{
            launcher_id: farmer.louncher_id,
            plotSize: byteSize(farmer.space, { units: 'iec', precision: 2 }).toString(),
            difficulty: farmer.difficulty,
            points: farmer.points
          }
        })
      }, 
    }, // will be passed to the page component as props
  }
}

export default LauncherId;