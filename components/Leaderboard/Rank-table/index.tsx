import { useContext } from "react";
import { Context } from "../../../context/globalStore";
import FarmersRankTable from "./farmers-rank-table";

const RankTable = () => {
  const {state} = useContext(Context);
  return (
    <div className="
      container 
      mx-auto 
      text-green3
      py-5
      md:pt-5
      md:pb-10
    ">
      <FarmersRankTable table={state.farmers} />
    </div>
  );
};

export default RankTable;
