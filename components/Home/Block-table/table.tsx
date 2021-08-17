import { useContext } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Context } from '../../../context/globalStore';

const Table = () => {
  const { t } = useTranslation('block-table');
  const {state} = useContext(Context);
  const {poolBlocks} = state;
  const Rows= poolBlocks.map((block,index) => (
    <tr key={index} className="text-black text-center font-gibson2 font-bold bg-gray h-16">
      <td className="hidden lg:table-cell">{block.block}</td>
      <td className="hidden lg:table-cell text-left overflow-hidden overflow-ellipsis">{block.coin_hash}</td>
      <td className="overflow-hidden overflow-ellipsis py-5 px-2 md:py-8 lg:p-3 text-lime2 text-left"><Link href={`/launcher-id/${block.winner_launcher_id}`}>{block.winner_launcher_id}</Link></td>
      <td> {`${block.time} ${block.time <= 1 ? t('day') : t('days')} ${t('ago')}`}</td>
      <td className="hidden lg:table-cell">{block.amount}</td>
    </tr>
  ));

  return (
    <table className="customTable table-fixed bg-white w-full border-t-2 border-gray font-gibson2 ">
      <thead className="text-lime2 text-lg md:text-2xl lg:text-base">
        <tr>
          <th className="w-1/12 hidden lg:table-cell">{t('block')}</th>
          <th className="w-4/12 hidden lg:table-cell text-left">{t('hash')}</th>
          <th className="w-5/12 text-left p-4 lg:p-2 ">{t('launcher-id')}</th>
          <th className="w-2/12 md:w-1/12">{t('date')}</th>
          <th className="w-1/12 hidden lg:table-cell">{t('reward')}</th>
        </tr>
      </thead>
      <tbody className="text-base lg:text-xs tracking-wide">
        {Rows}
      </tbody>
    </table>
  );
};

export default Table;
