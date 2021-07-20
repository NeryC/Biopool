import React, { useContext } from "react";
import { Context } from '../../context/globalStore';
import { faList, faChevronDown, faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Blocks from "../../data/Blocks.json";

const BlockTable = () => {
  const {state} = useContext(Context);

  const Rows= Blocks.map((block,index) => (
      <tr key={index} className="text-black text-center font-gibson2 font-bold bg-gray h-16">
        <td className="hidden lg:table-cell">{block.Block}</td>
        <td className="hidden lg:table-cell text-left">{block.Header}</td>
        <td className="overflow-hidden overflow-ellipsis py-5 px-2 lg:p-3 text-lime2 text-left text-sm md:text-xl lg:text-sm lg:pl-0">{block.Farm}</td>
        <td>{block.Luck}</td>
        <td>{block.Date}</td>
        <td className="hidden lg:table-cell">{block.Reward}</td>
      </tr>
    ));

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
            <div className="text-green3 text-4xl md:text-4.5xl lg:text-4xl">
              <span className="font-gibson-semiBold2">Tabla de bloques</span> con recompensa
            </div>
            <div className="text-green3 text-sm hidden lg:table-cell">
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
            <table className="customTable table-fixed bg-white w-full border-t-2 border-gray font-gibson2 ">
              <thead className="text-lime2 text-lg md:text-2xl lg:text-lg">
                <tr>
                  <th className="w-1/12 hidden lg:table-cell"># Block</th>
                  <th className="w-4/12 hidden lg:table-cell text-left">Header Hash</th>
                  <th className="w-6/12 md:w-4/12 text-left p-4 pl-2 lg:pl-0">Farmer</th>
                  <th className="w-1/12">Luck</th>
                  <th className="lg:w-1/12 w-2/12">Date</th>
                  <th className="w-1/12 hidden lg:table-cell">Reward</th>
                </tr>
              </thead>
              <tbody className="text-base lg:text-sm tracking-wide">
                {Rows}
              </tbody>
            </table>
          </div>
          <div className="text-white text-sm lg:flex justify-end pt-3 hidden">
            <button className="bg-gray2 hover:bg-gray-400 py-2 px-3 mr-1 ">
              <FontAwesomeIcon
                icon={faArrowUp}
              />
            </button>
            <button className="bg-lime1 hover:bg-gray-400 py-2 px-3">
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
