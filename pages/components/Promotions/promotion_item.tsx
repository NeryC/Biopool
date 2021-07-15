import { FC } from "react";

interface MyProps {
  title: string;
  description:string;
}

export const PromotionItem: FC<MyProps> = ({ title, description }) => {
  return (
    <div className="font-gibson-light bg-green3 rounded-lg flex flex-col py-2 px-3 justify-between text-base">
        <div className="flex flex-col ">
          <span className="font-gibson-semiBold2 text-lime1 text-2xl">{title}</span>
          <span className="text-sm font-gibson-light">{description}</span>
        </div>
    </div>
  );
};

export default PromotionItem;
