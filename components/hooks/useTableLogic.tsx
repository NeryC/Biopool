import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/globalStore";
import { chunkArray, orderArray } from "../utils";
import { LABELS } from '../utils/constants';

export default function useTableLogic(tableArrayLabel) {
  const {state} = useContext(Context);

  const [values, setValues] = useState({
    blockChunks: [] as any,
    totalPages: 0,
    actualPage: 0,
    order: LABELS.ASCE,
  });
  useEffect(()=>{
    let pages = chunkArray(obtainArray(tableArrayLabel))
    setValues({
      ...values,
      blockChunks: pages,
      totalPages: pages.length-1
    })
  },[state])

  const handleChangePage = (direction) => {
    setValues({
      ...values,
      actualPage: values.actualPage+direction
    })
  }

  const handleChangeOrder = () => {
    let newOrder = values.order == LABELS.ASCE ? LABELS.DESC : LABELS.ASCE
    let orderedArray = orderArray(obtainArray(tableArrayLabel), newOrder)
    setValues({
      ...values,
      blockChunks: chunkArray(orderedArray),
      order: newOrder,
      actualPage: 0
    })
  }

  const obtainArray = (tableArrayLabel) => {
    switch (tableArrayLabel) {
      case LABELS.BLOCKS_TABLE:
        return state.poolBlocks

      case LABELS.PAYMENT_TABLE:
        return state.launcher_info.payments

      case LABELS.PARTIALS_TABLE:
        return state.launcher_info.partials

      case LABELS.WIN_BLOCKS_TABLE:
        return state.launcher_info.blocks

      case LABELS.RANK_TABLE:
        return state.farmers
    
      default: 
        return [];
    }
  }

  return [values, handleChangePage, handleChangeOrder];
}