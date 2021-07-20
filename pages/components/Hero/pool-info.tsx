import { FC } from "react";

interface MyProps {
  title: string;
  imageUrl: string;
  description: string;
  info: string;
  type: string;
}

export const PoolInfo: FC<MyProps> = ({ title, type, imageUrl, description, info  }) => {
  return (
    <div className="font-gibson-light border-2 border-lime1 rounded-lg flex flex-col py-5 pl-8 pr-36 lg:pr-16 justify-between text-2xl lg:text-base">
      <div className="justify-start">
        <div className="flex w-16 lg:w-10 mb-3 self-center">
          <img alt={title} src={imageUrl}/>
        </div>
        <div className="flex flex-col ">
          <span className="font-gibson-semiBold text-green4">{title}</span>
          <span className="text-lg lg:text-sm text-green2 mt-1">{description}</span>
        </div>
      </div>
      <div className="pt-3 font-gibson2 text-lime1 text-3xl lg:text-base">
        {type === "data" ? <span>{info}</span> : <a href="#">{info}</a>}
      </div>
    </div>
  );
};

export default PoolInfo;
