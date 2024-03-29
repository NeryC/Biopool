import { useTranslation } from 'next-i18next';
import TableLayout from "../../utils/table-layout";
import { LABELS } from '../../utils/constants';
import useTableLogic from '../../hooks/useTableLogic';

const PaymentTable = () => {
  const { t } = useTranslation('launcher-id');
  const [values, handleChangePage, handleChangeOrder] = useTableLogic(LABELS.PAYMENT_TABLE)
  const headers = (
    <tr>
      <th className="w-5/12 md:w-4/12 lg:w-2/12 p-4 lg:p-2 pl-2 lg:pl-0">{t('date')}</th>
      <th className="w-3/12 md:w-4/12 lg:w-6/12 p-4 lg:p-2 pl-2 lg:pl-0">{t('coin-id')}</th>
      <th className="w-4/12 md:w-4/12 lg:w-4/12 p-4 lg:p-2 pl-2 lg:pl-0">{t('quantity')}</th>
    </tr>
  )

  const rows= values.blockChunks.length>0 && values.blockChunks[values.actualPage]?.map((payment,index) => (
    <tr key={index} className="text-black text-center font-gibson2 font-bold bg-gray h-14">
      <td className="overflow-hidden overflow-ellipsis pr-3 text-xs">{payment.time}</td>
      <td className="overflow-hidden overflow-ellipsis text-sm">{payment.puzzle_hash}</td>
      <td className="overflow-hidden overflow-ellipsis text-lime2 text-sm">{payment.amount}</td>
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

export default PaymentTable;
