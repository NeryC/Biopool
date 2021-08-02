import { useTranslation } from 'next-i18next';
import TableLayout from "../../utils/table-layout";

const BlocksTable = ({table}) => {
  const { t } = useTranslation('launcher-id');
  const headers = (
    <tr>
      <th className="w-4/12 lg:w-2/12 p-4 lg:p-2 pl-2 lg:pl-0">{t('date')}</th>
      <th className="w-4/12 lg:w-4/12 p-4 lg:p-2 pl-2 lg:pl-0">{t('blocks')}</th>
    </tr>
  )

  const rows= table.map((block,index) => (
    <tr key={index} className="text-black text-center font-gibson2 font-bold bg-gray h-14">
      <td className="">{block.timestamp}</td>
      <td className="overflow-hidden overflow-ellipsis text-base text-lime2">{block.block}</td>
    </tr>
  ));

  return (
    <TableLayout headers={headers} rows={rows} />
  );
};

export default BlocksTable;
