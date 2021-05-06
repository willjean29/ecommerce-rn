import { MarketStateI } from "context/market/interfaces/marketState.interface";
import { 
  LOAD_MYPRODUCTS,
  LOAD_MYPRODUCTS_SUCCESS,
  LOAD_MYPRODUCTS_ERROR,
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_ERROR,
  MarketDispatchTypes 
} from "context/market/market.types";

const MarketReducer = (state: MarketStateI, action: MarketDispatchTypes) => {
  switch (action.type) {

  case LOAD_MYPRODUCTS:
  case LOAD_PRODUCTS:
    return {
      ...state,
      isLoading: action.payload
    }
  case LOAD_MYPRODUCTS_SUCCESS:
    return {
      ...state,
      myMarket: action.payload,
      isLoading: false
    }
  case  LOAD_PRODUCTS_SUCCESS:
    return {
      ...state,
      market: action.payload,
      isLoading: false
    }
  case LOAD_MYPRODUCTS_ERROR:
  case LOAD_PRODUCTS_ERROR:
    return {
      ...state,
      error: action.payload,
      isLoading: false
    }
  default:
    return state
  }
};

export default MarketReducer;
