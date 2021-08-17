import React from "react";
import { useTranslation } from 'next-i18next';
import MediaBlock from "./media_block";

const Media = () => {
  const { t } = useTranslation('media');
  return (
    <div className="
      bg-green5       
      text-lg 
      font-gibson-light 
      font-bold 
    ">
      <div className="
        pt-56
        pb-8
        md:pt-48
        md:pb-24
        lg:pt-20
        lg:pb-20
        bg-ecosistema-back
        bg-media-md
        lg:bg-media-lg
        bg-no-repeat 
        bg-left 
        bg-promotion-size
      ">
        <div className="container mx-auto">
          <div className="
            flex flex-col lg:flex-row
          ">
            <div className="col-start-3 col-span-5 flex flex-col self-center text-right text-white">
              <div className="text-2xl md:text-3xl lg:text-2xl font-gibson-light leading-none">
                {t('title1')}
              </div>
              <div className="text-5xl md:text-6xl lg:text-5xl font-gibson-semiBold leading-tight mt-4 lg:mt-0">
                {t('title2')}
              </div>
              <div className="text-lg md:text-2xl lg:text-xl font-gibson-light leading-none mt-3 lg:mt-0">
                {t('title3')}
              </div>
              <div className="grid grid-cols-12 md:grid-cols-8 gap-4 flex items-center mt-8 mb-8 md:mb-10 md:mt-32 lg:mt-8 lg:mb-3">
                {/* <a
                  className={`
                  md:col-start-5
                  flex
                  items-center
                  justify-center
                  md:col-span-2 
                  col-span-6
                  text-center
                  text-white
                  bg-lime1 
                  w-full 
                  h-full
                  rounded
                  text-xs
                  font-gibson2
                `}
                  href="https://app.chiatk.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  INGRESAR 
                </a> */}
                <div className="flex md:col-start-5 md:col-span-2 col-span-6">
                  <a href="https://apps.apple.com/us/app/chiatk/id1570577139" target="_blank" rel="noreferrer">
                    <img alt="App Store Logo" className="w-full" src="/images/appStore.svg" />
                  </a>
                </div>
                <div className="flex md:col-span-2 col-span-6">
                  <a href="https://play.google.com/store/apps/details?id=com.chiatk.apps.movil" target="_blank" rel="noreferrer">
                    <img alt="Play Store Logo" className="w-full" src="/images/playStore.svg" />
                  </a>
                </div>
              </div>
              <div className="text-xl md:text-2xl lg:text-lg font-gibson-light leading-none">
                {t('title4')}
              </div>
            </div>
            <div className="hidden lg:block">
              <MediaBlock />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto lg:hidden block">
        <MediaBlock />
      </div>
    </div>
  );
};

export default Media;
