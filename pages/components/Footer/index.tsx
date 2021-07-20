import MediaBlock from "./media-block";
import Copyright from "./copyright";

const Footer = () => {
  return (
    <>
      <div className="bg-green4 font-gibson2 lg:bg-footer-back lg:bg-no-repeat lg:bg-footer-size lg:bg-center">
        <div className="container mx-auto pt-16 lg:pt-12 md:pb-16 lg:pt-0">
          <div className="flex justify-between ">
            <div className="mb-5 w-36 items-center"><img alt="BioPool Logo" src="images/BioPool-white.webp" /></div>
            <div className="text-green1 flex justify-start sm:justify-end whitespace-nowrap text-sm">
              by <div className="w-36"><img alt="Coin Image" src="images/chiaTKLogo.webp" /></div>
            </div>
          </div>
          <div className="grid grid-row md:grid-cols-2">
            <div className="flex mt-5 text-green1 text-base lg:text-sm lg:w-1/2">
              Gana dinero con el espacio en tu Disco Duro y haz parte de nuestro equipo de Granjeros. 
            </div>
            <div className="my-16 md:my-0 ">
              <MediaBlock/>
              <div className="text-green1 flex justify-start sm:justify-end whitespace-nowrap text-sm">
                <div className="">
                  <a href="https://docs.google.com/document/d/1sBfCOoj3pn-_M4-x6EE737Kx6cpl4ilTgUGJ3EcxqYI/edit?usp=sharing">Términos y condiciones</a>
                </div>
                {/* |&nbsp;  */}
                <div className="hidden">
                  <a href="#">Política de privacidad</a>
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
