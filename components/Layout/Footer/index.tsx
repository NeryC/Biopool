import { useTranslation } from 'next-i18next';
import MediaBlock from "./media-block";
import Copyright from "./copyright";

const Footer = () => {
  const { t } = useTranslation('footer');
  return (
    <>
      <div className="bg-green4 font-gibson2 lg:bg-footer-back lg:bg-no-repeat lg:bg-footer-size lg:bg-center">
        <div className="container mx-auto pt-16 md:pt-20 md:pb-28 lg:pb-16">
          <div className="flex justify-between ">
            <div className="mb-5 w-5/12 md:w-4/12 lg:w-36 items-center"><img alt="BioPool Logo" src="/images/BioPool-white.svg"/></div>
            <div className="text-green1 flex justify-end whitespace-nowrap text-xl lg:text-base">
              By <div className="w-9/12 md:w-full lg:w-3/4"><img alt="Coin Image" src="/images/chiaTKLogo.svg" /></div>
            </div>
          </div>
          <div className="grid grid-row md:grid-cols-2 md:mt-12 lg:mt-0">
            <div className="flex mt-12 md:mt-2 lg:mt-5 text-green1 text-base lg:text-sm lg:w-1/2">
              {t('description')}
            </div>
            <div className="my-16 md:my-0 ">
              <MediaBlock/>
              <div className="text-green1 flex justify-start sm:justify-end whitespace-nowrap text-sm">
                <div className="">
                  <a href="https://docs.google.com/document/d/1sBfCOoj3pn-_M4-x6EE737Kx6cpl4ilTgUGJ3EcxqYI/edit?usp=sharing">{t('terms-and-conditions')}</a>
                </div>
                {/* |&nbsp;  */}
                <div className="hidden">
                  <a href="#">{t('terms-and-conditions')}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyright/>
    </>
  );
};

export default Footer;
