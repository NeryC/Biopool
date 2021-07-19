import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PoolInfo from "./pool-info";

export const Hero = () => {
  return (
    <div className="
      flex flex-col
      container 
      mx-auto
      mb-20
    ">
      <div className="
        my-20
        lg:grid
        lg:grid-cols-12
        lg:gap-4 
      ">
        <div className="col-span-6 flex flex-col flex-none self-center">
          <div className="text-black text-5xl lg:text-4xl">
            <span className="text-lime1 font-gibson-semiBold2">
              ¡Hola!,&nbsp;
            </span>
            <span>
              te damos la <br /> bienvenida a BioPool
            </span>
          </div>
          <div className="mt-5 lg:mt-2">
            <span className="text-green3 font-gibson-light text-2xl lg:text-xl">
              Gana dinero con el espacio en tu Disco Duro y <br />
              haz parte de nuestro equipo de Granjeros.
            </span>
            <div className="grid grid-cols-4 gap-4 flex items-center mt-12">
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
              `}
                href="https://youtu.be/bUmPEnffN3k"
                target="_blank"
                rel="noreferrer"
              >
                INGRESAR 
              </a>
              <div className="flex">
                <a href="https://play.google.com/store/apps/details?id=com.chiatk.apps.movil" target="_blank" rel="noreferrer">
                  <img alt="Play Store Logo" className="w-full" src="/images/playStore.webp" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:mt-12 lg:mt-0 lg:ml-11 lg:col-span-5 flex flex-col self-center bg-green4 p-4 rounded">
          <div className="bg-lime1 mb-3 flex justify-between p-5 lg:p-3">
            <div className="flex flex-col justify-between text-2xl lg:text-sm">
              <div className="flex flex-col">
                <span className="text-green5 font-gibson-semiBold2">Resumen de la red</span>
                <span className="text-lime2 font-gibson2">(MainNet)</span>
              </div>
              <span className="text-white font-gibson-semiBold2 mt-2">Chia Network</span>
            </div>
            <div className="w-24 lg:w-14">
              <img alt="Chia Logo" src="images/ChiaLogo.webp"/>
            </div>
          </div>
          <div className="bg-green3 flex flex-col justify-between px-5 lg:px-4">
            <div className="flex justify-between font-gibson2 py-7 lg:py-3 text-2xl lg:text-xl">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faCircleNotch}
                  className={`mx-1 text-white fa-spin text-lime1 `}
                />
                <span className="ml-5">Altura de bloque</span>
              </div>
              <div className="text-lime1 ">0.0%</div>
            </div>
            <div className="flex justify-between font-gibson2 py-7 lg:py-3 text-2xl lg:text-xl">
              <div className="flex items-center ">
                <FontAwesomeIcon
                  icon={faCircleNotch}
                  className={`mx-1 text-white fa-spin text-lime1 `}
                />
                <span className="ml-5">Precio Chia coin</span>
              </div>
              <div className="text-lime1 ">0.0%</div>
            </div>
            <div className="flex justify-between font-gibson2 py-7 lg:py-3 text-2xl lg:text-xl">
              <div className="flex items-center ">
                <FontAwesomeIcon
                  icon={faCircleNotch}
                  className={`mx-1 text-white fa-spin text-lime1 `}
                />
                <span className="ml-5">Espacio total</span>
              </div>
              <div className="text-lime1 ">0.0%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <PoolInfo
          title="Farmers"
          imageUrl="images/items/Farmers.webp"
          description="Número de farmers registrado"
          type="data"
          info="00.00"
        />

        <PoolInfo
          title="Pool"
          imageUrl="images/items/Pool.webp"
          description="Espacio total del Pool"
          type="data"
          info="00.00"
        />

        <PoolInfo
          title="Bloques"
          imageUrl="images/items/Bloques.webp"
          description="Resumen de bloques con recompensa"
          type="ViewMore"
          info="Ver más"
        />

        <PoolInfo
          title="MainNet"
          imageUrl="images/items/MainNet.webp"
          description="Resumen de la red (MainNet) Chia"
          type="ViewMore"
          info="Ver más"
        />
      </div>
    </div>
  );
};

export default Hero;
