import { ProductI } from "./interfaces/product.interface";

export const LOAD_MYPRODUCTS = "LOAD_MY_PRODUCTS";
export const LOAD_MYPRODUCTS_SUCCESS = "LOAD_MY_PRODUCTS_SUCCESS";
export const LOAD_MYPRODUCTS_ERROR = "LOAD_MY_PRODUCT_ERROR";

export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const LOAD_PRODUCTS_SUCCESS = "LOAD_PRODUCTS_SUCCESS";
export const LOAD_PRODUCTS_ERROR = "LOAD_PRODUCTS_ERROR";

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
export interface MarketLoad {
  type: typeof LOAD_PRODUCTS,
  payload: boolean
}
export interface MarketLoadSuccess {
  type: typeof LOAD_PRODUCTS_SUCCESS,
  payload: ProductI[]
}
export interface MarketLoadError {
  type: typeof LOAD_PRODUCTS_ERROR,
  payload: boolean
}

export type MarketDispatchTypes = 
  | MyMarketLoad
  | MyMarketLoadSuccess
  | MyMarketLoadError
  | MarketLoad
  | MarketLoadSuccess
  | MarketLoadError;