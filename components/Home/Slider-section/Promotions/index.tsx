import { useContext } from "react";
import { useTranslation } from 'next-i18next';
import { Context } from "../../../../context/globalStore";
import ItemsBlock from "./items-block";

const Promotion = () => {
  const { t } = useTranslation('promotions');
  const { dispatch } = useContext(Context);

  function openModal() {
    dispatch({type:"SET_BUSINESS_MODAL_STATE", 
      payload:{
        BusinessModalIsOpen: true
      }
    })
  }

  return (
    <div className="bg-lime1 relative">
      <div className="mx-auto container py-10 md:py-24 lg:py-12">
        <div className="
          grid 
          grid-cols-8 
          lg:grid-cols-11
          gap-4 
          row-span-4
        ">
          <div className="col-span-8 md:col-span-7 lg:col-span-6 flex flex-col flex-none self-center">
            <div className="text-3xl md:text-5xl lg:text-3.5xl font-gibson-bold text-green4">
              {t('promotions')}
            </div>
            <span className="text-green3 font-gibson2 pt-3 text-xl lg:text-xl">
              {t('subtitle')}
            </span>
            <ItemsBlock />
            <div className="grid grid-cols-8 gap-4 text-center mt-6 text-2xl lg:text-base">
              <div className="col-span-9 lg:col-span-6 border-2 border-green3 rounded-lg py-5 px-8 text-green3">
                <span className="font-gibson-semiBold">{t('description1')}&nbsp;</span>{t('description2')}<a className="text-white font-gibson-semiBold cursor-pointer" onClick={openModal}> &nbsp;{t('description3')}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute h-promotion md:h-promotion-md lg:h-full lg:inset-y-0 lg:right-0 lg:w-promotion">
        <img alt="Promotion Background" className="h-full lg:h-full  md:h-auto md:w-full lg:object-right object-cover" src="/images/promotionBack.webp" />
      </div>
    </div>
  );
};

export default Promotion;
