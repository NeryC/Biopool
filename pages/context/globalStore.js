import React, {createContext, useReducer} from "react";

export const Context = createContext();

const initialState = {
  price: "0", 
  net_space:"0", 
  registers:"0",
  poolSize: "0"
};

const Reducer = (state, {type, payload}) => {
  switch (type) {
    case 'SET_PRICES_NETSPACE':
      return {
        ...state,
        price: payload.price,
        net_space: payload.net_space
      };
    case 'SET_REGISTERS_POOLSIZE':
      return {
        ...state,
        registers: payload.registers,
        poolSize: payload.poolSize
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