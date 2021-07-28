import TableLayout from "../../utils/table-layout";

const PaymentTable = ({table}) => {
  
  const headers = (
    <tr>
      <th className="w-5/12 md:w-4/12 lg:w-2/12 p-4 lg:p-2 pl-2 lg:pl-0">Fecha</th>
      <th className="w-3/12 md:w-4/12 lg:w-6/12 p-4 lg:p-2 pl-2 lg:pl-0">Id de Moneda</th>
      <th className="w-4/12 md:w-4/12 lg:w-4/12 p-4 lg:p-2 pl-2 lg:pl-0">Cantidad</th>
    </tr>
  )

  const rows= table.map((payment,index) => (
    <tr key={index} className="text-black text-center font-gibson2 font-bold bg-gray h-14">
      <td className="overflow-hidden overflow-ellipsis pr-3 text-xs">{payment.time}</td>
      <td className="overflow-hidden overflow-ellipsis text-sm">{payment.puzzle_hash}</td>
      <td className="overflow-hidden overflow-ellipsis text-lime2 text-sm">{payment.amount}</td>
    </tr>
  ));


  return (
    <TableLayout headers={headers} rows={rows} />
  );
};

export default PaymentTable;
