import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

interface MyProps {
  icon: IconDefinition;
  value: string;
  description: string;
}

const MediaItem: FC<MyProps> = ({ icon, value, description }) => {
  return (
    <div className="font-gibson-light text-2xl lg:text-xl bg-green6 rounded-lg flex lg:flex-col p-16 lg:p-5 h-full">
      <FontAwesomeIcon
        size="2x"
        icon={icon}
        className="text-white"
      />
      <div className="flex flex-col ml-10 lg:ml-0">
        <span className="font-gibson2 text-lime1 text-2xl lg:text-xl">{value}</span>
        <span className="text-base lg:text-xs leading-4 text-green1 font-gibson-light">{description}</span>
      </div>
    </div>
  );
};

export default MediaItem;