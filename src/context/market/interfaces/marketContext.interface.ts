import { MarketStateI } from "./marketState.interface";

export interface MarketContextI {
  marketState: MarketStateI;
  loadProducts: () => void;
  loadMyPorducts: (id: string) => Promise<void>;
}