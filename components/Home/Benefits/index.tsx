import { useTranslation } from 'next-i18next';
import BenefitBox from "./benefit-box";

export const Benefits = () => {
  const { t } = useTranslation('benefits');

  return (
    <div className="bg-gray" >
    <div className="
      flex flex-col
      container 
      mx-auto
      py-20
    ">
      <div className="text-green3 pb-16 text-4xl md:text-4.5xl lg:text-3.5xl text-center">
        <span className="font-gibson-semiBold">{t('benefit-title1')}</span>{t('benefit-title2')}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <BenefitBox
          title={t('benefit-title-1')}
          imageUrl="/images/benefit/app.webp"
          description={t('benefit-description-1')}
        />

        <BenefitBox
          title={t('benefit-title-2')}
          imageUrl="/images/benefit/multi-language.webp"
          description={t('benefit-description-2')}
        />

        <BenefitBox
          title={t('benefit-title-3')}
          imageUrl="/images/benefit/pay.webp"
          description={t('benefit-description-3')}
        />

        <BenefitBox
          title={t('benefit-title-4')}
          imageUrl="/images/benefit/support.webp"
          description={t('benefit-description-4')}
        />

        <BenefitBox
          title={t('benefit-title-5')}
          imageUrl="/images/benefit/social-network.webp"
          description={t('benefit-description-5')}
        />

        <BenefitBox
          title={t('benefit-title-6')}
          imageUrl="/images/benefit/discounts.webp"
          description={t('benefit-description-6')}
        />
      </div>
    </div>
    </div>
  );
};

export default Benefits;
