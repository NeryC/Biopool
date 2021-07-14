import React, { useContext } from "react";
import { Context } from '../context/globalStore';
import { faList, faChevronDown, faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Blocks from "../utils/Blocks.json";

const PoolInfo = () => {
  const {state} = useContext(Context);

  const CardMembers= Blocks.map((block,index) => (
      <tr key={index} className="text-black text-center font-gibson2 font-bold bg-gray h-16">
        <td className="p-3">{block.Block}</td>
        <td>{block.Header}</td>
        <td className="text-lime2">{block.Farm}</td>
        <td>{block.Luck}</td>
        <td>{block.Date}</td>
        <td>{block.Reward}</td>
      </tr>
    ));

  return (
    <div className="
      py-28"
    >
      <div className="
        container 
        mx-auto 
        "
      >
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <div className="text-green3 text-4xl">
              <span className="font-gibson-semiBold2">Tabla de bloques</span> con recompensa
            </div>
            <div className="text-green3 text-sm">
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
            <table className="customTable bg-white w-full border-t-2 border-gray font-gibson2 ">
              <thead className="text-lime2 text-lg">
                <tr>
                  <th className="w-1/12"># Block</th>
                  <th className="w-4/12">Header Hash</th>
                  <th className="w-4/12">Farm</th>
                  <th className="w-1/12">Luck</th>
                  <th className="w-1/12">Date</th>
                  <th className="w-1/12">Reward</th>
                </tr>
              </thead>
              <tbody className="text-xs tracking-wide">
                {CardMembers}
              </tbody>
            </table>
          </div>
          <div className="text-white text-sm flex justify-end pt-3">
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

export default PoolInfo;
