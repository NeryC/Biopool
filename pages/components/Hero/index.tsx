import PoolBlock from "./pool-block";
import StatsBlock from "./stats-block";

export const Hero = () => {
  return (
    <div className="
      flex flex-col
      container 
      mx-auto
      mb-20
    ">
      <div className="
        mt-20 md:mt-32 lg:mt-20 mb-14 md:mb-20 lg:grid lg:grid-cols-12 lg:gap-4
      ">
        <div className="col-span-6 flex flex-col flex-none self-center">
          <div className="text-black text-4xl md:text-5xl font-gibson2">
            <span className="text-lime1 font-gibson-semiBold">
              ¡Hola!,&nbsp;
            </span>
            te damos la <br /> bienvenida a BioPool
          </div>
          <div className="mt-5">
            <span className="text-green3 font-gibson2 text-xll md:text-3xl lg:text-2xl">
              Gana dinero con el espacio en tu Disco Duro y <br />
              haz parte de nuestro equipo de Granjeros.
            </span>
            <div className="grid grid-cols-11 gap-4 flex items-center mt-16 md:mt-20">
              <a
                className={`
                text-center
                py-2
                border 
                text-white
                bg-lime1 
                w-full 
                h-full
                rounded-lg
                lg:text-xs
                text-base
                font-gibson2
                flex
                items-center
                justify-center
                md:col-span-3
                col-span-5
              `}
                href="https://app.chiatk.com/"
                target="_blank"
                rel="noreferrer"
              >
                INGRESAR 
              </a>
              <div className="flex md:col-span-3 col-span-5">
                <a href="https://play.google.com/store/apps/details?id=com.chiatk.apps.movil" target="_blank" rel="noreferrer">
                  <img alt="Play Store Logo" className="w-full" src="/images/playStore.webp" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <StatsBlock />
      </div>
      <PoolBlock />
    </div>
  );
};

export default Hero;
