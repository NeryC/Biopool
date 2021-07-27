import TableLayout from "./table-layout";

const PartialsTable = ({table}) => {

  const headers = (
    <tr>
      <th className="w-4/12 md:w-2/12 p-4 lg:p-2 pl-2 lg:pl-0">Fecha</th>
      <th className="w-4/12 md:w-6/12 p-4 lg:p-2 pl-2 lg:pl-0">Dificultad</th>
      <th className="w-4/12 md:w-4/12 p-4 lg:p-2 pl-2 lg:pl-0">Valido</th>
    </tr>
  )

  const rows= table.map((partial,index) => (
    <tr key={index} className="text-black text-center font-gibson2 font-bold bg-gray h-14">
      <td className="">{partial.timestamp}</td>
      <td className="overflow-hidden overflow-ellipsis">{partial.difficulty}</td>
      <td className="overflow-hidden overflow-ellipsis text-base text-lime2">Verdadero</td>
    </tr>
  ));

  return (
    <TableLayout headers={headers} rows={rows} />
  );
};

export default PartialsTable;
