import { useTranslation } from 'next-i18next';
import MediaItem from "./media_item";
import {
  faDiscord,
  faInstagram,
  faTelegramPlane,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const MediaBlock = () => {
  const { t } = useTranslation('media');
  return (
    <div className="flex flex-col flex-none self-center lg:ml-10 xl:ml-36 w-full py-4 lg:py-0">
      <div className="text-3.5xl font-gibson-bold text-green4 grid md:grid-cols-2 gap-5 md:gap-5 ">
        <a href="http://bit.ly/ChiatkTelegram" target="_blank"rel="noreferrer">
          <MediaItem icon={faTelegramPlane} value="+3200" description={t('telegram-users')}/>
        </a>
        <a href="http://bit.ly/ChiatkDiscord" target="_blank"rel="noreferrer">
          <MediaItem icon={faDiscord} value="+5950" description={t('discord-users')}/>
        </a>
        <a href="http://bit.ly/ChiatkYoutube" target="_blank" rel="noreferrer">
          <MediaItem icon={faYoutube} value="+30000" description={t('youtube-users')}/>
        </a>
        <a href="http://bit.ly/ChiatkInstagram" target="_blank"rel="noreferrer">
          <MediaItem icon={faInstagram} value="+452" description={t('instagram-users')}/>
        </a>
      </div>
    </div>
  );
};

export default MediaBlock;