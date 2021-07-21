import { toast } from 'react-toastify';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const PoolBanner = () => {

  let copyLink = () =>{
    toast.success('📋 Link copiado!', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide,
      pauseOnFocusLoss: false
    });
  }

  return (
    <div className="bg-green4 relative">
      <div className="lg:absolute inset-y-0 lg:h-full md:w-3/4 lg:w-auto">
        <img alt="BioPool Background" className="lg:h-full object-left object-cover" src="/images/poolBannerBack.webp" />
      </div>
      <div className="mx-auto container pt-14 pb-32 md:py-20 lg:py-28 h-full">
        <div className="
          grid 
          grid-cols-10
          gap-4 
          row-span-4
        ">
          <div className="col-span-10 lg:col-start-6 lg:col-span-5 flex flex-col flex-none self-center">
            <div className="text-4.5xl md:text-5xl lg:text-6xl font-gibson-semiBold">
              Ya puedes <span className="text-lime1">Farmear </span> en
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-2/5 mt-5">
              <img alt="BioPool Logo" className="" src="/images/BioPool-white.webp" />
            </div>
            <span className="pt-10 text-2xl md:text-3xl lg:text-4xl">
              Ingresa el link <CopyToClipboard text="https://api.biopool.tk" ><span className="text-lime1 cursor-pointer" onClick={copyLink}>https://api.biopool.tk</span></CopyToClipboard>
            </span>
            <span className="text-xl md:text-2xl lg:text-3xl">
              en el cliente de Chia y comienza a Farmear
            </span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/2 md:w-2/5 lg:w-1/5">
        <img alt="BioPool coins" className="object-right object-cover" src="/images/biopool-coins.webp" />
      </div>
    </div>
  );
};

export default PoolBanner;
