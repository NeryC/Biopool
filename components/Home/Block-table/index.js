import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import TableLayout from '../../utils/table-layout';
import { LABELS } from '../../utils/constants';
import useTableLogic from '../../hooks/useTableLogic'

const BlockTable = () => {
  const { t } = useTranslation('block-table');
  const [values, handleChangePage, handleChangeOrder] = useTableLogic(LABELS.BLOCKS_TABLE)

  let rows= values.blockChunks.length>0 && values.blockChunks[values.actualPage]?.map((block,index) => (
    <tr key={index} className="text-black text-center font-gibson2 font-bold bg-gray h-16">
      <td className="hidden lg:table-cell">{block.block}</td>
      <td className="hidden lg:table-cell text-left overflow-hidden overflow-ellipsis">{block.coin_hash}</td>
      <td className="overflow-hidden overflow-ellipsis py-5 px-2 md:py-8 lg:p-3 text-lime2 text-left"><Link href={`/launcher-id/${block.winner_launcher_id}`}>{block.winner_launcher_id}</Link></td>
      <td> {`${block.time} ${block.time <= 1 ? t('day') : t('days')} ${t('ago')}`}</td>
      <td className="hidden lg:table-cell">{block.amount}</td>
    </tr>
  ));

  const headers = (
    <tr>
      <th className="w-1/12 hidden lg:table-cell">{t('block')}</th>
      <th className="w-4/12 hidden lg:table-cell text-left">{t('hash')}</th>
      <th className="w-5/12 text-left p-4 lg:p-2 ">{t('launcher-id')}</th>
      <th className="w-2/12 md:w-1/12">{t('date')}</th>
      <th className="w-1/12 hidden lg:table-cell">{t('reward')}</th>
    </tr>
  )

  return (
    <div className="
      py-20 
      md:py-28"
    >
      <div className="
        container 
        mx-auto 
        "
      >
        <div className="flex flex-col">
          <div className="text-green3 w-3/4 md:w-auto text-4xl md:text-4.5xl lg:text-3.5xl absolute">
            <span className="font-gibson-semiBold">{t('title1')}</span>{t('title2')}
          </div>
          <div>
            <TableLayout 
              headers={headers} 
              rows={rows} 
              order={values.order}
              totalPages={values.totalPages} 
              actualPage={values.actualPage} 
              handleChangeOrder={handleChangeOrder}
              handleChangePage={handleChangePage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockTable;
