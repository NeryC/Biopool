import React, {createContext, useReducer} from "react";

export const Context = createContext();

const initialState = {
  modalIsOpen: false,
  price: "0.0", 
  net_space:"0.0 EiB", 
  registers:"0",
  poolSize: "0.0 PiB",
  launcher_info: {
    space: "0",
    difficulty:"0",
    points:"0",
    blocks:[],
    chias_pagadas:"0",
    partials:[],
    payments:[]
  }
};

const Reducer = (state, {type, payload}) => {
  switch (type) {
    case 'SET_POOL_INFO':
      return {
        ...state,
        price: payload.price,
        net_space: payload.net_space,
        registers: payload.registers,
        poolSize: payload.poolSize
      };
    case 'SET_LAUNCHER_INFO':
      return {
        ...state,
        launcher_info:{
          ...payload
        }
      };
    case 'SET_MODAL_STATE':
      return {
        ...state,
        modalIsOpen: payload.modalIsOpen,
      };
    default:
      return state;
  }
};

const GlobalStore = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
      <Context.Provider value={{ dispatch, state }}>
        {children}
      </Context.Provider>
    )
};

export const State = () => useContext(Context)
export default GlobalStore;