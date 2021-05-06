import { MarketStateI } from "context/market/interfaces/marketState.interface";

export interface MarketContextI {
  marketState: MarketStateI;
  loadAllProducts: () => Promise<void>;
  loadMyPorducts: (id: string) => Promise<void>;
}