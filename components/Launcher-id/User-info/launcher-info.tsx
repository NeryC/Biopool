import { FC } from "react";

interface MyProps {
  description: string;
  value: string;
}

export const LauncherInfo: FC<MyProps> = ({ description, value  }) => {
  return (
    <div className="font-gibson-light border-2 border-lime1 rounded-lg flex flex-col py-7 px-4 justify-between text-2xl lg:text-base">
      <div className={`font-gibson2 text-lime1 text-3xl lg:text-2xl overflow-hidden overflow-ellipsis`}>
        <span>{value}</span>
      </div>
      <div className="justify-start">
        <span className="text-lg lg:text-sm text-green2 mt-1 lg:leading-tight">{description}</span>
      </div>
    </div>
  );
};

export default LauncherInfo;
