import { FC } from "react";

interface MyProps {
  title: string;
  imageUrl: string;
  info:string;
}

export const Tool: FC<MyProps> = ({ title, children, imageUrl, info }) => {
  return (
    <div className="font-gibson-light border-2 border-lime1 rounded-lg flex flex-col py-5 px-8 justify-between text-base">
      <div className="justify-start">
        <div className="flex">
          <img className="w-10 mb-3 self-center" src={imageUrl} />
        </div>
        <div className="flex flex-col ">
          <span className="font-gibson-semiBold2 text-green4">{title}</span>
          <span className="text-sm text-green2 mt-1">{info}</span>
        </div>
      </div>
      <div className="pt-3 font-gibson2">
        {children}
      </div>
    </div>
  );
};

export default Tool;
