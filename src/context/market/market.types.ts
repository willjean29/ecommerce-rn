import { ProductI } from "./interfaces/product.interface";

export const LOAD_MYPRODUCTS = "LOAD_MY_PRODUCTS";
export const LOAD_MYPRODUCTS_SUCCESS = "LOAD_MY_PRODUCTS_SUCCESS";
export const LOAD_MYPRODUCTS_ERROR = "LOAD_MY_PRODUCT_ERROR";

export interface MyMarketLoad {
  type: typeof LOAD_MYPRODUCTS,
  payload: boolean
}

export interface MyMarketLoadSuccess {
  type: typeof LOAD_MYPRODUCTS_SUCCESS,
  payload: ProductI[]
}

export interface MyMarketLoadError {
  type: typeof LOAD_MYPRODUCTS_ERROR,
  payload: boolean
}

export type MarketDispatchTypes = 
  | MyMarketLoad
  | MyMarketLoadSuccess
  | MyMarketLoadError;