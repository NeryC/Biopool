import byteSize from 'byte-size';
import { Context } from '../context/globalStore';
import { useContext, useEffect } from 'react';
import LeaderboardInfo from '../components/Leaderboard/Leaderboard-info';

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
    <>
      <LeaderboardInfo />
      {/* <LauncherTables /> */}
    </>
  )
}

export async function getServerSideProps(context) {
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
    }, // will be passed to the page component as props
  }
}

export default LauncherId;