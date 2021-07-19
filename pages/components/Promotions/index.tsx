import PromotionItem from "./promotion_item";

const Promotion = () => {

  return (
    // bg-promotion-back bg-no-repeat bg-right bg-promotion-size
    <div className="bg-lime1 relative">
      <div className="mx-auto container py-16">
        <div className="
          grid 
          grid-cols-8 
          lg:grid-cols-11
          gap-4 
          row-span-4
        ">
          <div className="col-span-7 flex flex-col flex-none self-center">
            <div className="text-4xl lg:text-3.5xl font-gibson-bold text-green4">
              Promociones
            </div>
            <span className="text-green3 font-gibson-light pt-3">
              Nos encanta tenerte con nosotros, por eso pensamos en ti con estas ofertas de inicio
            </span>
            <div className="grid grid-cols-7 gap-4 text-center mt-12">
              <div className="col-span-2">
                <PromotionItem title="Fee 0%" description="el 1er mes"/>
              </div>
              <div className="col-span-2">
                <PromotionItem title="Fee 0.5%" description="el 2do mes"/>
              </div>
              <div className="col-span-2">
                <PromotionItem title="Fee 1%" description="a partir del 3er mes"/>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-4 text-center mt-6">
              <div className="col-span-6 border-2 border-green3 rounded-lg flex py-5 px-8 ">
                <span className="text-green3 font-gibson-semiBold2">Plan Empresarial.&nbsp;</span><span className="text-green3">Contáctate con nosotros</span> <a className="font-gibson-semiBold2 cursor-pointer"> &nbsp;aquí.</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden lg:absolute md:h-promotion lg:h-full lg:inset-y-0 lg:right-0 lg:w-promotion">
        <img alt="Promotion Background" className="lg:h-full md:w-full lg:object-right lg:object-cover" src="/images/promotionBack.webp" />
      </div>
    </div>
  );
};

export default Promotion;
