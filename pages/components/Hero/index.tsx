import PoolBlock from "./pool-block";
import StatsBlock from "./stats-block";
import { useContext, useEffect } from 'react';
import { Context } from '../../context/globalStore';

async function fetchData(dispatch,byteSize) {
  let price_net_space_json;
  let registers_json;
  try {
    price_net_space_json = await fetch('https://api.chiatk.com/prices',{
      headers: {
        "ChiatkApiKey": "fec9b6f84551-1466-4b91-888d-857d793e"
      },
    })
  } catch (error) {
    console.log(error)
  }

  const price_net_space = await price_net_space_json.json();

  try {
    registers_json = await fetch('https://us-central1-basic-zenith-312516.cloudfunctions.net/getNewPoolData')
  } catch (error) {
    console.log(error);
  }
  
  const registers = await registers_json.json();
  
  if (price_net_space && registers ){
    dispatch({type:"SET_PRICES_NETSPACE", 
      payload:{
        price: price_net_space.market.price.toFixed(2),
        net_space: byteSize(price_net_space.netspace, { units: 'iec', precision: 3 }).toString()
      }
    })
    dispatch({type:"SET_REGISTERS_POOLSIZE",
      payload:{
        registers:registers.data.data.farmers,
        poolSize:byteSize(registers.data.data.space, { units: 'iec', precision: 2 }).toString()
      }
    })
  }
}

export const Hero = () => {
  const {state, dispatch} = useContext(Context);
  const byteSize = require('byte-size');

  useEffect(() => {
    fetchData(dispatch, byteSize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  return (
    <div className="
      flex flex-col
      container 
      mx-auto
      mb-20
    ">
      <div className="
        mt-20 md:mt-32 lg:mt-20 mb-14 md:mb-20 lg:grid lg:grid-cols-12 lg:gap-4
      ">
        <div className="col-span-6 flex flex-col flex-none self-center">
          <div className="text-black text-4xl md:text-5xl font-gibson2">
            <span className="text-lime1 font-gibson-semiBold">
              ¡Hola!,&nbsp;
            </span>
            te damos la <br /> bienvenida a BioPool
          </div>
          <div className="mt-5">
            <span className="text-green3 font-gibson2 text-xll md:text-3xl lg:text-2xl">
              Gana dinero con el espacio en tu Disco Duro y <br />
              haz parte de nuestro equipo de Granjeros.
            </span>
            <div className="grid grid-cols-11 gap-4 flex items-center mt-16 md:mt-20">
              <a
                className={`
                text-center
                py-2
                border 
                text-white
                bg-lime1 
                w-full 
                h-full
                rounded-lg
                lg:text-xs
                text-base
                font-gibson2
                flex
                items-center
                justify-center
                md:col-span-3
                col-span-5
              `}
                href="https://app.chiatk.com/"
                target="_blank"
                rel="noreferrer"
              >
                INGRESAR 
              </a>
              <div className="flex md:col-span-3 col-span-5">
                <a href="https://play.google.com/store/apps/details?id=com.chiatk.apps.movil" target="_blank" rel="noreferrer">
                  <img alt="Play Store Logo" className="w-full" src="/images/playStore.webp" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <StatsBlock />
      </div>
      <PoolBlock />
    </div>
  );
};

export default Hero;
