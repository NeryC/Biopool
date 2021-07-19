import {
  faDiscord,
  faInstagram,
  faTelegramPlane,
  faTwitter,
  faYoutube,
  faFacebook,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Copyright from "./copyright";

const Footer = () => {
  return (
    <>
      <div className="py-10 bg-green4 font-gibson2">
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-3 lg:gap-3 pt-8 lg:pt-0">
          <div className="flex flex-col">
            <div className="mb-5 w-36"><img alt="BioPool Logo" src="images/BioPool-white.webp" /></div>
            <div className="flex mt-5 text-green1 text-base lg:text-sm">
              Gana dinero con el espacio en tu Disco Duro y haz parte de nuestro equipo de Granjeros. 
            </div>
          </div>

          <div className="pt-5 px-16 lg:flex justify-center hidden">
            <img alt="Coin Image" src="images/coin.webp" />
          </div>

          <div className="flex flex-col justify-center">
            <div className="text-green1 flex justify-start sm:justify-end whitespace-nowrap text-sm">
              by <div className="w-36"><img alt="Coin Image" src="images/chiaTKLogo.webp" /></div>
            </div>
            <div className="mb-5 mt-8 flex flex-wrap justify-end text-4xl sm:text-3xl">
              <a href="http://bit.ly/ChiatkTelegram" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faTelegramPlane}
                  className="mx-2 p-1 text-green1"
                />
              </a>
                
              <a href="http://bit.ly/ChiatkDiscord" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faDiscord}
                  className="mx-2 p-1 text-green1"
                />
              </a>

              <a href="http://bit.ly/ChiatkYoutube" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="mx-2 p-1 text-green1"
                />
              </a>

              <a href="https://twitter.com/Chiatoolkit" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="v p-1 text-green1"
                />
              </a>
              
              <a href="http://bit.ly/ChiatkInstagram" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="mx-2 p-1 text-green1"
                />
              </a>

              <a href="http://bit.ly/ChiatkFacebook" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="mx-2 p-1 text-green1"
                />
              </a>

              <a href="http://bit.ly/ChiatkLinkedin" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="p-1 text-green1"
                />
              </a>
            </div>
            <div className="text-green1 flex justify-start sm:justify-end whitespace-nowrap text-sm">
              <div className="pr-2">
                <a href="https://docs.google.com/document/d/1sBfCOoj3pn-_M4-x6EE737Kx6cpl4ilTgUGJ3EcxqYI/edit?usp=sharing">Términos y condiciones</a>
              </div>
              {/* |&nbsp; */}
              <div className="hidden">
                <a href="#">Política de privacidad</a>
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
