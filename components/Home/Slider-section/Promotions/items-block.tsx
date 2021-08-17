import { useTranslation } from 'next-i18next';
import PromotionItem from "./promotion_item";

export const ItemsBlock = () => {
  const { t } = useTranslation('promotions');
  return (
    <div className="grid md:grid-cols-6 lg:grid-cols-8 gap-4 text-center mt-12 lg:mt-8 w-2/3 md:w-full">
      <div className="md:col-span-2">
        <PromotionItem title={`${t('fee')} 0%`} description={t('first-month')}/>
      </div>
      <div className="md:col-span-2">
        <PromotionItem title={`${t('fee')} 0.5%`} description={t('second-month')}/>
      </div>
      <div className="md:col-span-2">
        <PromotionItem title={`${t('fee')} 1%`} description={t('third-month')}/>
      </div>
    </div>
  );
};

export default ItemsBlock;