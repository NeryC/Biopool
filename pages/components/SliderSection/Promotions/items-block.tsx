import PromotionItem from "./promotion_item";

export const ItemsBlock = () => {
  return (
    <div className="grid md:grid-cols-7 gap-4 text-center mt-12 w-2/3 md:w-full">
      <div className="md:col-span-2">
        <PromotionItem title="Fee 0%" description="el 1er mes"/>
      </div>
      <div className="md:col-span-2">
        <PromotionItem title="Fee 0.5%" description="el 2do mes"/>
      </div>
      <div className="md:col-span-2">
        <PromotionItem title="Fee 1%" description="a partir del 3er mes"/>
      </div>
    </div>
  );
};

export default ItemsBlock;