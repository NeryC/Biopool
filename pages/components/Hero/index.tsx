import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PoolInfo from "./pool-info";

export const Hero = () => {
  return (
    <div className="
      grid grid-rows-6 grid-flow-col gap-4 container 
      mx-auto
      h-hero-spacing
      mb-20
    ">
      <div className="
        grid 
        grid-cols-12
        gap-4 
        row-span-4
      ">
        <div className="col-span-6 flex flex-col flex-none self-center">
          <div className="text-black text-4xl">
            <span className="text-lime1 font-gibson-semiBold2">
              ¡Hola!,&nbsp;
            </span>
            <span>
              te damos la <br /> bienvenida a BioPool
            </span>
          </div>
          <div className="">
            <div>
              <span className="text-green3 font-gibson-light">
                Gana dinero con el espacio en tu Disco Duro y <br />
                haz parte de nuestro equipo de Granjeros.
              </span>
            </div>
            <div className="grid grid-cols-4 gap-4 flex items-center mt-12">
              <a
                className={`
                text-center
                py-2
                border 
                text-white-chia
                bg-lime1 
                w-full 
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
              <div className="flex">
                <a href="https://play.google.com/store/apps/details?id=com.chiatk.apps.movil" target="_blank" rel="noreferrer">
                  <img alt="Play Store Logo" className="w-full" src="/images/playStore.webp" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-11 col-span-5 flex flex-col self-center h-2/3 bg-green4 p-4 rounded">
          <div className="h-2/5 bg-lime1 mb-3 flex justify-between p-3">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col">
                <span className="text-green5 font-gibson-semiBold2text-lg">Resumen de la red</span>
                <span className="text-lime2 font-gibson2 text-sm">(MainNet)</span>
              </div>
              <span className="text-white font-gibson-semiBold2text-lg mt-2">Chia Network</span>
            </div>
            <div className="w-14">
              <img alt="Chia Logo" src="images/ChiaLogo.webp"/>
            </div>
          </div>
          <div className="h-3/5 bg-green3 flex flex-col justify-between p-4">
            <div className="flex justify-between font-gibson2 ">
              <div className="flex items-center ">
                <FontAwesomeIcon
                  icon={faCircleNotch}
                  className={`mx-1 text-white fa-spin text-lime1 `}
                />
                <span className="ml-5">Altura de bloque</span>
              </div>
              <div className="text-lime1 ">0.0%</div>
            </div>
            <div className="flex justify-between font-gibson2 ">
              <div className="flex items-center ">
                <FontAwesomeIcon
                  icon={faCircleNotch}
                  className={`mx-1 text-white fa-spin text-lime1 `}
                />
                <span className="ml-5">Precio Chia coin</span>
              </div>
              <div className="text-lime1 ">0.0%</div>
            </div>
            <div className="flex justify-between font-gibson2 ">
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
      <div className="grid grid-cols-4 gap-4">
        <PoolInfo
          title="Farmers"
          imageUrl="images/items/Farmers.webp"
          description="Número de farmers registrado"
          type="data"
          info="00.00"
        />

        <PoolInfo
          title="Pool"
          imageUrl="images/items/Farmers.webp"
          description="Espacio total del Pool"
          type="data"
          info="00.00"
        />

        <PoolInfo
          title="Bloques"
          imageUrl="images/items/Farmers.webp"
          description="Resumen de bloques con recompensa"
          type="ViewMore"
          info="Ver más"
        />

        <PoolInfo
          title="MainNet"
          imageUrl="images/items/Farmers.webp"
          description="Resumen de la red (MainNet) Chia Network"
          type="ViewMore"
          info="Ver más"
        />
      </div>
    </div>
  );
};

export default Hero;
