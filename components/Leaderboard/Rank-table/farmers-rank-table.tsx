import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import TableLayout from "../../utils/table-layout";

const FarmersRankTable = ({table}) => {
  const { t } = useTranslation('leaderboard');
  
  const headers = (
    <tr className="text-base md:text-xl lg:text-base">
      <th className="w-2/12 md:w-1/12 p-4 lg:p-2 pl-2 lg:pl-0">#</th>
      <th className="w-4/12 md:w-5/12 p-4 lg:p-2 pl-2 lg:pl-0">{t('farmer')}</th>
      <th className="w-3/12 lg:w-1/12 p-4 lg:p-2 pl-2 lg:pl-0">{t('plot-size')}</th>
      <th className="w-1/12 hidden md:table-cell p-4 lg:p-2 pl-2 lg:pl-0 ">{t('difficulty')}</th>
      <th className="w-2/12 lg:w-1/12 p-4 lg:p-2 pl-2 lg:pl-0 ">{t('points')}</th>
    </tr>
  )

  const rows= table.map((farmer,index) => (
    <tr key={index} className="text-black text-center font-gibson2 font-bold bg-gray h-14">
      <td className="overflow-hidden overflow-ellipsis">{index+1}</td>
      <td className="overflow-hidden overflow-ellipsis text-lime2 text-sm text-left"><Link href={`/launcher-id/${farmer.launcher_id}`}>{farmer.launcher_id}</Link></td>
      <td className="overflow-hidden overflow-ellipsis">{farmer.plotSize}</td>
      <td className="overflow-hidden overflow-ellipsis hidden md:table-cell">{farmer.difficulty}</td>
      <td className="overflow-hidden overflow-ellipsis">{farmer.points}</td>
    </tr>
  ));


  return (
    <TableLayout headers={headers} rows={rows} />
  );
};

export default FarmersRankTable;
