import { faList, faChevronDown, faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "./table";

const BlockTable = () => {

  return (
    <div className="
      py-20 
      md:py-28"
    >
      <div className="
        container 
        mx-auto 
        "
      >
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <div className="text-green3 text-4xl md:text-4.5xl lg:text-3.5xl">
              <span className="font-gibson-semiBold">Tabla de bloques</span> con recompensa
            </div>
            <div className="text-green3 text-sm hidden ">
              {/* lg:table-cell */}
              <button className="border border-gray hover:bg-gray-400 p-3 h-11">
                <FontAwesomeIcon
                  icon={faList}
                />
              </button>
              <button className="border border-gray hover:bg-gray-400 p-3 h-11">
                <FontAwesomeIcon
                  icon={faChevronDown}
                /> 
              </button>
            </div>
          </div>
          <div className="pt-12">
            <Table />
          </div>
          <div className="text-white text-sm  justify-end pt-3 hidden">
            {/* lg:flex */}
            <button className="bg-gray2 hover:bg-gray-400 py-3 px-4 mr-1 ">
              <FontAwesomeIcon
                icon={faArrowUp}
              />
            </button>
            <button className="bg-lime1 hover:bg-gray-400 py-3 px-4">
              <FontAwesomeIcon
                icon={faArrowDown}
              /> 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockTable;
