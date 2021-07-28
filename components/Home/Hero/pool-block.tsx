import { useContext } from "react";
import { Context } from "../../../context/globalStore";
import PoolInfo from "./pool-info";

export const PoolBlock = () => {
  const {state} = useContext(Context);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <PoolInfo
        title="Farmers"
        imageUrl="/images/items/Farmers.webp"
        description="Número de farmers activos"
        type="data"
        info={state.activeUsers}
      />

      <PoolInfo
        title="Pool"
        imageUrl="/images/items/Pool.webp"
        description="Espacio total del Pool"
        type="data"
        info={state.poolSize}
      />

      <PoolInfo
        title="Bloques"
        imageUrl="/images/items/Bloques.webp"
        description="Cantidad de bloques ganados"
        type="data"
        info={state.poolBlocks.length}
      />

      {/* <PoolInfo
        title="MainNet"
        imageUrl="/images/items/MainNet.webp"
        description="Resumen de la red (MainNet) Chia"
        type="ViewMore"
        info="Ver más"
        linkRef="#MainNet"
      /> */}
    </div>
  );
};

export default PoolBlock;
