import React, {createContext, useReducer} from "react";

export const Context = createContext();

const initialState = {
  BusinessModalIsOpen: false,
  VideoModalIsOpen: false,
  price: "0.0", 
  net_space:"0.0 EiB", 
  activeUsers:"0",
  poolSize: "0.0 PiB",
  poolBlocks: [],
  poolPoints: "0",
  farmers: [],
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
        activeUsers: payload.activeUsers,
        poolSize: payload.poolSize,
        poolBlocks: payload.poolBlocks,
        poolPoints: payload.poolPoints
      };
    case 'SET_LAUNCHER_INFO':
      return {
        ...state,
        launcher_info:{
          ...payload
        }
      };
    case 'SET_LEADERBOARD_INFO':
      return {
        ...state,
        net_space: payload.net_space,
        poolSize: payload.poolSize,
        poolPoints: payload.poolPoints,
        farmers: payload.farmers
      };
    case 'SET_BUSINESS_MODAL_STATE':
      return {
        ...state,
        BusinessModalIsOpen: payload.BusinessModalIsOpen,
      };
    case 'SET_VIDEO_MODAL_STATE':
      return {
        ...state,
        VideoModalIsOpen: payload.VideoModalIsOpen,
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