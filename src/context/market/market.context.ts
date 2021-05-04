import { createContext } from 'react';
import { MarketContextI } from 'context/market/interfaces/marketContext.interface';

const MarketContext = createContext({} as MarketContextI);

export default MarketContext;