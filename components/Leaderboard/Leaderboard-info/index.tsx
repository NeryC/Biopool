import { useContext } from "react";
import { useTranslation } from 'next-i18next';
import { Context } from "../../../context/globalStore";
import BoxInfo from "../../utils/box-info";

const LeaderboardInfo = () => {
  const { t } = useTranslation('leaderboard');
  const {state} = useContext(Context);

  return (
    <div className="pt-10 md:pt-16 pb-5"
    >
      <div className="
        container 
        mx-auto 
        text-green3
        "
      >
        <div className="text-4xl md:text-4.5xl lg:text-3.5xl">
          <span className="font-gibson-semiBold">{t('title')}</span>
        </div>

        <div className="grid md:grid-cols-3 gap-4 pt-7">
          <BoxInfo
            description={t('global-space')}
            value={state.net_space}
          />

          <BoxInfo
            description={t('pool-space')}
            value={state.poolSize}
          />

          <BoxInfo
            description={t('global-points')}
            value={state.poolPoints}
          />
        </div>
      </div>
    </div>
  );
};

export default LeaderboardInfo;
