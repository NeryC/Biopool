import { useTranslation } from 'next-i18next';

const Benefits = () => {
  const { t } = useTranslation('benefits');
  return (
    <div className="
      py-20 
      md:py-28
      bg-green4
      "
    >
      <div className="
        container 
        mx-auto 
        "
      >
        <div className="flex flex-col text-white">
          <div className="text-3xl md:text-4xl lg:text-3xl text-lime1">
            <span className="font-gibson-semiBold">{t('benefit-title')}</span>
          </div>
          <ul className="list-disc list-inside px-5 md:px-10 pt-10 text-benefits md:text-benefits-md">
            <li>{t('benefit-item-1')}</li>
            <li>{t('benefit-item-2')}</li>
            <li>{t('benefit-item-3')}</li>
            <li>{t('benefit-item-4')}</li>
            <li>{t('benefit-item-5')}</li>
            <li>{t('benefit-item-6')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
