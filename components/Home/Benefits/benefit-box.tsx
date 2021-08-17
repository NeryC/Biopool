import { FC } from "react";

interface MyProps {
  title: string;
  imageUrl: string;
  description: string;
}

export const BenefitBox: FC<MyProps> = ({ title, imageUrl, description  }) => {
  return (
    <div className="
      bg-white
      font-gibson-light 
      flex 
      flex-col 
      py-10  
      text-2xl 
      shadow-md
      px-16
    ">
      <div className="flex pb-10 self-center flex-grow">
        <img className="w-24 lg:w-24 max-h-24 object-contain self-center" alt={title} src={imageUrl}/>
      </div>
      <div className="flex flex-col text-center">
        <span className="font-gibson-semiBold text-green4 lg:text-lg">{title}</span>
        <span className="text-lg lg:text-base text-green2 mt-2 lg:leading-tight">{description}</span>
      </div>
    </div>
  );
};

export default BenefitBox;
