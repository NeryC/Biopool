import { useTranslation } from 'next-i18next';
import TableLayout from "../../utils/table-layout";
import { LABELS } from '../../utils/constants';
import useTableLogic from '../../hooks/useTableLogic';

const PartialsTable = () => {
  const { t } = useTranslation('launcher-id');
  const [values, handleChangePage, handleChangeOrder] = useTableLogic(LABELS.PARTIALS_TABLE)

  const headers = (
    <tr>
      <th className="w-6/12 md:w-4/12 lg:w-2/12 p-4 lg:p-2 pl-2 lg:pl-0">{t('date')}</th>
      <th className="w-3/12 md:w-4/12 lg:w-6/12 p-4 lg:p-2 pl-2 lg:pl-0">{t('difficulty')}</th>
    </tr>
  )

  const rows= values.blockChunks.length>0 && values.blockChunks[values.actualPage]?.map((partial,index) => (
    <tr key={index} className="text-black text-center font-gibson2 font-bold bg-gray h-14">
      <td className="">{partial.time}</td>
      <td className="overflow-hidden overflow-ellipsis">{partial.difficulty}</td>
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

export default PartialsTable;
