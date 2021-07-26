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

export const MediaBlock = () => {

  return (
    <div className="mb-1 md:mt-2 flex flex-wrap md:justify-end text-4xl sm:text-3xl">
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
  );
};

export default MediaBlock;
