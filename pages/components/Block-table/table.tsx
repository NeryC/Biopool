import Blocks from "../../data/Blocks.json";

const Table = () => {

  const Rows= Blocks.map((block,index) => (
    <tr key={index} className="text-black text-center font-gibson2 font-bold bg-gray h-16">
      <td className="hidden lg:table-cell">{block.Block}</td>
      <td className="hidden lg:table-cell text-left overflow-hidden overflow-ellipsis">{block.Header}</td>
      <td className="overflow-hidden overflow-ellipsis py-5 px-2 md:py-8 lg:p-3 text-lime2 text-left text-sm md:text-xl lg:text-base">{block.Farm}</td>
      <td>{block.Luck}</td>
      <td>{block.Date}</td>
      <td className="hidden lg:table-cell">{block.Reward}</td>
    </tr>
  ));

  return (
    <table className="customTable table-fixed bg-white w-full border-t-2 border-gray font-gibson2 ">
      <thead className="text-lime2 text-lg md:text-2xl ">
        <tr>
          <th className="w-1/12 hidden lg:table-cell"># Block</th>
          <th className="w-4/12 hidden lg:table-cell text-left">Header Hash</th>
          <th className="w-6/12 md:w-4/12 text-left p-4 pl-2 lg:pl-0">Farmer</th>
          <th className="w-1/12">Luck</th>
          <th className="md:w-1/12 w-2/12">Date</th>
          <th className="w-1/12 hidden lg:table-cell">Reward</th>
        </tr>
      </thead>
      <tbody className="text-base tracking-wide">
        {Rows}
      </tbody>
    </table>
  );
};

export default Table;
