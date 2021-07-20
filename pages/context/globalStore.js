import React, {createContext, useReducer} from "react";

export const Context = createContext();

const initialState = {
  modalIsOpen: false
};

const Reducer = (state, {type, payload}) => {
  switch (type) {
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