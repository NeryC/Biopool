import React from "react";
import MediaBlock from "./media_block";

const Media = () => {
  return (
    <div className="
      bg-green5       
      text-lg 
      font-gibson-light 
      font-bold 
    ">
      <div className="
        pt-48
        pb-8
        md:pt-20 
        md:pb-20
        lg:pb-17
        bg-ecosistema-back
        bg-media-md
        lg:bg-media-lg
        bg-no-repeat 
        bg-left 
        bg-promotion-size
      ">
        <div className="container mx-auto">
          <div className="
            flex flex-col lg:flex-row
          ">
            <div className="col-start-3 col-span-5 flex flex-col self-center text-right text-white">
              <div className="text-2xl md:text-3xl lg:text-2xl font-gibson-light leading-none">
                Si apenas llegas al
              </div>
              <div className="text-5xl md:text-6xl lg:text-5xl font-gibson-semiBold leading-tight mt-3 lg:mt-0">
                ecosistema chiatk
              </div>
              <div className="text-lg md:text-2xl lg:text-xl font-gibson-light leading-none">
                y deseas obtener más información puedes:
              </div>
              <div className="grid grid-cols-12 gap-4 flex items-center mt-8 md:mt-24 lg:mt-9 mb-7">
                <a
                  className={`
                  md:col-start-7
                  flex
                  items-center
                  justify-center
                  md:col-span-3 
                  col-span-6
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
                <div className="flex md:col-span-3 col-span-6">
                  <a href="https://play.google.com/store/apps/details?id=com.chiatk.apps.movil" target="_blank" rel="noreferrer">
                    <img alt="Play Store Logo" className="w-full" src="/images/playStore.webp" />
                  </a>
                </div>
              </div>
              <div className="text-xl md:text-2xl lg:text-lg font-gibson-light leading-none">
                o síguenos en nuestras redes sociales
              </div>
            </div>
            <div className="hidden lg:contents">
              <MediaBlock />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto lg:hidden block">
        <MediaBlock />
      </div>
    </div>
  );
};

export default Media;
