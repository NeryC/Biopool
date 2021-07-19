import MediaItem from "./media_item";
import {
  faDiscord,
  faInstagram,
  faTelegramPlane,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const MediaBlock = () => {
  return (
    <div className="flex flex-col flex-none self-center lg:ml-36 w-full lg:w-auto py-4 lg:py-0">
      <div className="text-3.5xl font-gibson-bold text-green4 grid grid-cols-2 gap-4 ">
        <a href="http://bit.ly/ChiatkTelegram" target="_blank"rel="noreferrer">
          <MediaItem icon={faTelegramPlane} value="+3200" description="Usuarios en Telegram"/>
        </a>
        <a href="http://bit.ly/ChiatkDiscord" target="_blank"rel="noreferrer">
          <MediaItem icon={faDiscord} value="+5950" description="Usuarios en Discord"/>
        </a>
        <a href="http://bit.ly/ChiatkYoutube" target="_blank" rel="noreferrer">
          <MediaItem icon={faYoutube} value="+30000" description="Seguidores en YouTube"/>
        </a>
        <a href="http://bit.ly/ChiatkInstagram" target="_blank"rel="noreferrer">
          <MediaItem icon={faInstagram} value="+452" description="Seguidores en Instagram"/>
        </a>
      </div>
    </div>
  );
};

export default MediaBlock;