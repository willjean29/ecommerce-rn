import React, { useState, useReducer } from 'react';
import MarketContext from 'context/market/market.context';
import { MarketStateI } from 'context/market/interfaces/marketState.interface';
import MarketReducer from 'context/market/market.redurcer';
import { loadMyProductsAction } from 'context/market/market.actions';
export interface MarketStateProps {
  children: React.ReactNode
}
 
const MarketState: React.FC<MarketStateProps> = ({children}) => {
  const marketInitialState : MarketStateI = {
    market: null,
    myMarket: null,
    isLoading: false,
    error: null
  }
  const [marketState, dispatch] = useReducer(MarketReducer, marketInitialState);

  const loadMyPorducts = (id: string) => loadMyProductsAction(id,dispatch);

  return (  
    <MarketContext.Provider
      value={{
        marketState,
        loadProducts: () => {},
        loadMyPorducts
      }}
    >
      {children}
    </MarketContext.Provider>
  );
}
 
export default MarketState;

