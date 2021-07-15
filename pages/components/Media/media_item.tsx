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
    <div className="font-gibson-light bg-green6 rounded-lg flex flex-col p-4 text-base">
      <FontAwesomeIcon
        size="2x"
        icon={icon}
        className="text-white"
      />
      <span className="font-gibson2 text-lime1 text-xl">{value}</span>
      <span className="text-xs leading-4 text-green1 font-gibson-light">{description}</span>
    </div>
  );
};

export default MediaItem;