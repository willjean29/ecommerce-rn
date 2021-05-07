import React, { useState, useReducer } from 'react';
import MarketContext from 'context/market/market.context';
import { MarketStateI } from 'context/market/interfaces/marketState.interface';
import MarketReducer from 'context/market/market.redurcer';
import { loadMyProductsAction, loadProductsAction, loadProductsCategoryAction } from 'context/market/market.actions';
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
  const loadAllProducts = () => loadProductsAction(dispatch);
  const loadProductsCategory = (category: number) => loadProductsCategoryAction(category, dispatch);
  return (  
    <MarketContext.Provider
      value={{
        marketState,
        loadAllProducts,
        loadMyPorducts,
        loadProductsCategory
      }}
    >
      {children}
    </MarketContext.Provider>
  );
}
 
export default MarketState;

