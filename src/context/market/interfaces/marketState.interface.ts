import { ProductI } from "./product.interface";

export interface MarketStateI {
  market: ProductI[] | null;
  myMarket: ProductI[] | null;
  isLoading : boolean;
  error : boolean | null;
}