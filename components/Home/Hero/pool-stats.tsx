import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PoolStats = ({title, value}) => {

  return (
    <div className="flex justify-between font-gibson2 py-5 md:py-8 lg:py-3 text-xl md:text-3xl lg:text-xl">
      <div className="flex items-center ">
        <FontAwesomeIcon
          icon={faCircleNotch}
          className={`mx-1 text-white fa-spin text-lime1`}
        />
        <span className="ml-5">{title}</span>
      </div>
      <div className="text-lime1 lg:text-xl">{value}</div>
    </div>
  );
};

export default PoolStats;
