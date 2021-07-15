import React from "react";
import MediaItem from "./media_item";
import {
  faDiscord,
  faInstagram,
  faTelegramPlane,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Media = () => {
  return (
    <div className="
      py-20
      text-green1 
      text-lg 
      font-gibson-light 
      font-bold 
      bg-green5
      bg-ecosistema-back
      bg-no-repeat 
      bg-left 
      bg-promotion-size
    ">
      <div className="container mx-auto">
      <div className="
          grid 
          grid-cols-12
          gap-4 
        ">
          <div className="col-start-3 col-span-5 flex flex-col self-center text-right text-white">
            <div className="text-2xl font-gibson-light leading-none">
              Si apenas llegas al
            </div>
            <div className="text-5xl font-gibson-semiBold2 leading-tight">
              ecosistema chiatk
            </div>
            <div className="text-xl font-gibson-light leading-none">
              y deseas obtener más información puedes:
            </div>
            <div className="grid grid-cols-6 gap-4 flex items-center mt-9 mb-7">
              <a
                className={`
                col-start-3 
                flex
                items-center
                justify-center
                col-span-2
                text-center
                text-white
                bg-lime1 
                w-full 
                h-full
                rounded
                text-xs
                font-gibson2
              `}
                href="https://youtu.be/bUmPEnffN3k"
                target="_blank"
                rel="noreferrer"
              >
                INGRESAR 
              </a>
              <div className="flex col-span-2">
                <a href="https://play.google.com/store/apps/details?id=com.chiatk.apps.movil" target="_blank" rel="noreferrer">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Play Store Logo" className="w-full" src="/images/playStore.webp" />
                </a>
              </div>
            </div>
            <div className="text-lg font-gibson-light leading-none">
              o síguenos en nuestras redes sociales
            </div>
          </div>
          <div className="col-start-9 col-span-4 flex flex-col flex-none self-center">
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
        </div>
      </div>
    </div>
  );
};

export default Media;
