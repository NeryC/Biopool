import { useContext } from "react";
import { Context } from "../../context/globalStore";
import PoolStats from "./pool-stats";

export const StatsBlock = () => {
  const {state} = useContext(Context);

  return (
    <div className="mt-16 lg:mt-0 lg:ml-11 lg:col-span-5 flex flex-col self-center bg-green4 p-4 rounded">
      <div className="bg-lime1 mb-3 flex justify-between p-5 lg:p-4">
        <div className="flex flex-col justify-between text-base md:text-3xl lg:text-base">
          <div className="flex flex-col">
            <span className="text-green5 font-gibson-semiBold">Resumen de la red</span>
            <span className="text-lime2 font-gibson2">(MainNet)</span>
          </div>
          <span className="text-white font-gibson-semiBold mt-6 lg:mt-3">Chia Network</span>
        </div>
        <div className="w-16 md:w-24 lg:w-16">
          <img alt="Chia Logo" src="images/chiaLogo.webp"/>
        </div>
      </div>
      <div className="bg-green3 flex flex-col justify-between px-5 lg:px-7">
        <PoolStats title="Altura de bloque" value="0.0%"/>
        <PoolStats title="Precio Chia coin" value={`${state.price} $`}/>
        <PoolStats title="Espacio total" value={state.net_space}/>
      </div>
    </div>
  );
};

export default StatsBlock;