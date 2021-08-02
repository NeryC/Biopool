import { useContext } from "react";
import { useTranslation } from 'next-i18next';
import { Context } from "../../../context/globalStore";
import PoolInfo from "./pool-info";

export const PoolBlock = () => {
  const { t } = useTranslation('hero');
  const {state} = useContext(Context);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <PoolInfo
        title={t('farmers-title')}
        imageUrl="/images/items/Farmers.webp"
        description={t('farmers-description')}
        type="data"
        info={state.activeUsers}
      />

      <PoolInfo
        title={t('pool-title')}
        imageUrl="/images/items/Pool.webp"
        description={t('pool-description')}
        type="data"
        info={state.poolSize}
      />

      <PoolInfo
        title={t('blocks-title')}
        imageUrl="/images/items/Bloques.webp"
        description={t('blocks-description')}
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
