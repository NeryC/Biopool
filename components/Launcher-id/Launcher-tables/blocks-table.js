import { useTranslation } from 'next-i18next';
import TableLayout from "../../utils/table-layout";
import { LABELS } from '../../utils/constants';
import useTableLogic from '../../hooks/useTableLogic';

const BlocksTable = () => {
  const { t } = useTranslation('launcher-id');
  const [values, handleChangePage, handleChangeOrder] = useTableLogic(LABELS.WIN_BLOCKS_TABLE)

  const headers = (
    <tr>
      <th className="w-4/12 lg:w-2/12 p-4 lg:p-2 pl-2 lg:pl-0">{t('date')}</th>
      <th className="w-4/12 lg:w-4/12 p-4 lg:p-2 pl-2 lg:pl-0">{t('blocks')}</th>
    </tr>
  )

  const rows= values.blockChunks.length>0 && values.blockChunks[values.actualPage]?.map((block,index) => (
    <tr key={index} className="text-black text-center font-gibson2 font-bold bg-gray h-14">
      <td className="">{block.time}</td>
      <td className="overflow-hidden overflow-ellipsis text-base text-lime2">{block.block}</td>
    </tr>
  ));

  return (
    <TableLayout 
      headers={headers} 
      rows={rows} 
      order={values.order}
      totalPages={values.totalPages} 
      actualPage={values.actualPage} 
      handleChangeOrder={handleChangeOrder}
      handleChangePage={handleChangePage}
    />
  );
};

export default BlocksTable;
