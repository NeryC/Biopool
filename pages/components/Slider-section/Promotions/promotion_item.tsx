import { FC } from "react";

interface MyProps {
  title: string;
  description:string;
}

export const PromotionItem: FC<MyProps> = ({ title, description }) => {
  return (
    <div className="font-gibson-light bg-green3 rounded-lg flex flex-col py-5 lg:py-2 px-0 justify-between text-base">
        <div className="flex flex-col ">
          <span className="font-gibson-semiBold text-lime1 text-4xl lg:text-2xl">{title}</span>
          <span className="text-xl lg:text-base font-gibson-light">{description}</span>
        </div>
    </div>
  );
};

export default PromotionItem;
