import TableLayout from "./table-layout";

const BlocksTable = ({table}) => {

  const headers = (
    <tr>
      <th className="w-4/12 md:w-2/12 p-4 lg:p-2 pl-2 lg:pl-0">Fecha</th>
      <th className="w-4/12 md:w-6/12 p-4 lg:p-2 pl-2 lg:pl-0">Launcher Ganador</th>
      <th className="w-4/12 md:w-4/12 p-4 lg:p-2 pl-2 lg:pl-0">Bloque</th>
    </tr>
  )

  const rows= table.map((block,index) => (
    <tr key={index} className="text-black text-center font-gibson2 font-bold bg-gray h-14">
      <td className="">{block.timestamp}</td>
      <td className="overflow-hidden overflow-ellipsis">{block.winner_launcher_id}</td>
      <td className="overflow-hidden overflow-ellipsis text-base text-lime2">{block.block}</td>
    </tr>
  ));

  return (
    <TableLayout headers={headers} rows={rows} />
  );
};

export default BlocksTable;
