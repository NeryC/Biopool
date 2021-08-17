import { useTranslation } from 'next-i18next';
import PoolBlock from "./pool-block";
import StatsBlock from "./stats-block";

const Hero = () => {
  const { t } = useTranslation('hero');
  return (
    <div id="MainNet" className="
      flex flex-col
      container 
      mx-auto
      mb-20
    ">
      <div className="
        mt-10 md:mt-20 lg:mt-20 mb-14 md:mb-20 lg:grid lg:grid-cols-12 lg:gap-4
      ">
        <div className="col-span-6 flex flex-col flex-none self-center">
          <div className="text-black text-4xl md:text-5xl lg:text-4xl font-gibson2">
            <span className="text-lime1 font-gibson-semiBold">
              {t('hello')}&nbsp;
            </span>
            {t('subtitle1')}<br />{t('subtitle2')}
          </div>
          <div className="mt-5">
            <span className="text-green3 font-gibson2 text-xll md:text-3xl lg:text-xl">
              {t('description1')}<br/>
              {t('description2')}<br/>
            </span>
            <div className="text-green3 font-gibson2 text-base md:text-xl lg:text-base mt-3">
              {t('list-item1')}<br/>
              {t('list-item2')}<br/>
              {t('list-item3')}<br/>
            </div>
            <div className="text-green3 font-gibson2 text-base md:text-xl lg:text-base mt-3">
              {t('what-are-you-waiting')}
            </div>
            <div className="grid grid-cols-11 gap-4 flex items-center mt-16 md:mt-10">
              <div className="flex md:col-span-3 col-span-5">
                <a href="https://apps.apple.com/us/app/chiatk/id1570577139" target="_blank" rel="noreferrer">
                  <img alt="App Store Logo" className="w-full" src="/images/appStore.svg" />
                </a>
              </div>
              <div className="flex md:col-span-3 col-span-5">
                <a href="https://play.google.com/store/apps/details?id=com.chiatk.apps.movil" target="_blank" rel="noreferrer">
                  <img alt="Play Store Logo" className="w-full" src="/images/playStore.svg" />
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
