import PoolBlock from "./pool-block";
import PoolStats from "./pool-stats";

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
          <div className="text-black text-4xl md:text-5xl lg:text-4xl font-gibson2">
            <span className="text-lime1 font-gibson-semiBold2">
              ¡Hola!,&nbsp;
            </span>
            te damos la <br /> bienvenida a BioPool
          </div>
          <div className="mt-5 lg:mt-2">
            <span className="text-green3 font-gibson-light text-xll md:text-3xl lg:text-xl">
              Gana dinero con el espacio en tu Disco Duro y <br />
              haz parte de nuestro equipo de Granjeros.
            </span>
            <div className="grid grid-cols-12 gap-4 flex items-center mt-16 md:mt-20">
              <a
                className={`
                text-center
                py-2
                border 
                text-white
                bg-lime1 
                w-full 
                h-full
                rounded
                lg:text-xs
                text-base
                font-gibson2
                flex
                items-center
                justify-center
                lg:col-span-4
                md:col-span-3
                col-span-5
              `}
                href="https://youtu.be/bUmPEnffN3k"
                target="_blank"
                rel="noreferrer"
              >
                INGRESAR 
              </a>
              <div className="flex lg:col-span-4 md:col-span-3 col-span-5">
                <a href="https://play.google.com/store/apps/details?id=com.chiatk.apps.movil" target="_blank" rel="noreferrer">
                  <img alt="Play Store Logo" className="w-full" src="/images/playStore.webp" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 lg:mt-0 lg:ml-11 lg:col-span-5 flex flex-col self-center bg-green4 p-4 rounded">
          <div className="bg-lime1 mb-3 flex justify-between p-5 lg:p-3">
            <div className="flex flex-col justify-between text-base md:text-3xl lg:text-sm">
              <div className="flex flex-col">
                <span className="text-green5 font-gibson-semiBold2">Resumen de la red</span>
                <span className="text-lime2 font-gibson2">(MainNet)</span>
              </div>
              <span className="text-white font-gibson-semiBold mt-6 lg:mt-2">Chia Network</span>
            </div>
            <div className="w-16 md:w-24 lg:w-14">
              <img alt="Chia Logo" src="images/ChiaLogo.webp"/>
            </div>
          </div>
          <div className="bg-green3 flex flex-col justify-between px-5 lg:px-4">
            <PoolStats title="Altura de bloque" value="0.0%"/>
            <PoolStats title="Precio Chia coin" value="0.0%"/>
            <PoolStats title="Espacio total" value="0.0%"/>
          </div>
        </div>
      </div>
      <PoolBlock />
    </div>
  );
};

export default Hero;
