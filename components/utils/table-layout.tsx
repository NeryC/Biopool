import { faList, faChevronDown, faChevronUp, faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LABELS } from "./constants";

const TableLayout = (
  {
    headers, 
    rows, 
    totalPages, 
    actualPage, 
    handleChangePage, 
    handleChangeOrder, 
    order, 
  }:{
    headers, 
    totalPages, 
    actualPage, 
    handleChangePage, 
    handleChangeOrder, 
    order,
    rows?, 
  }) => {
    let disableUPButton = actualPage<=0;
    let disableDownButton = actualPage>=totalPages;
  
  return (
    <div >
      {order &&
        <div className="text-green3 text-sm hidden lg:flex justify-end pb-10">
          <button className="border border-gray hover:bg-gray-400 p-3 h-11 hidden">
            <FontAwesomeIcon
              icon={faList}
            />
          </button>
          <button className="border border-gray hover:bg-gray-400 p-3 h-11" onClick={handleChangeOrder}>
            <FontAwesomeIcon
              icon={order == LABELS.ASCE ? faChevronDown : faChevronUp }
            /> 
          </button>
        </div>
      }
      <table className="customTable table-fixed bg-white w-full border-t-2 border-gray font-gibson2 ">
        <thead className="text-lime2 text-lg md:text-xl lg:text-base">
          {headers}
        </thead>
        <tbody className="text-base lg:text-xs tracking-wide">
          {rows}
        </tbody>
      </table>
      <div className="text-white text-sm  justify-end pt-3 lg:flex">
        <button 
          className={`bg-gray2 py-3 px-4 mr-1 focus:outline-none focus:shadow-outline ${disableUPButton && 'bg-opacity-50'}`}
          onClick={()=>{handleChangePage(-1)}} 
          disabled={disableUPButton}
        >
          <FontAwesomeIcon
            icon={faArrowUp}
          />
        </button>
        <button 
          className={`bg-lime1 py-3 px-4 focus:outline-none focus:shadow-outline ${disableDownButton && 'bg-opacity-50'}`}
          onClick={()=>{handleChangePage(1)}} 
          disabled={disableDownButton}
        >
          <FontAwesomeIcon
            icon={faArrowDown}
          /> 
        </button>
      </div>
    </div>
  );
};

export default TableLayout;
