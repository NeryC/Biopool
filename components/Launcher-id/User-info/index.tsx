import { useContext } from "react";
import { useTranslation } from 'next-i18next';
import { Context } from "../../../context/globalStore";
import BoxInfo from "../../utils/box-info";

const UserInfo = () => {
  const { t } = useTranslation('launcher-id');
  const {state} = useContext(Context);
  const {launcher_info} = state;

  return (
    <div className="pt-10 md:pt-20 pb-5"
    >
      <div className="
        container 
        mx-auto 
        text-green3
        "
      >
        <div className="text-4xl md:text-4.5xl lg:text-3.5xl">
          <span className="font-gibson-semiBold">{t('launcher-info-title')}</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 pt-7">
          <BoxInfo
            description={t('estimated-space')}
            value={launcher_info.space}
          />

          <BoxInfo
            description={t('chias-paid')}
            value={launcher_info.chias_pagadas}
          />

          <BoxInfo
            description={t('difficulty')}
            value={launcher_info.difficulty}
          />

          <BoxInfo
            description={t('current-points')}
            value={launcher_info.points}
          />

          <BoxInfo
            description={t('found-blocks')}
            value={launcher_info.blocks.length}
          />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
