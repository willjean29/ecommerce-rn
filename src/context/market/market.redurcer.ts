import { MarketStateI } from "context/market/interfaces/marketState.interface";
import { 
  LOAD_MYPRODUCTS,
  LOAD_MYPRODUCTS_SUCCESS,
  LOAD_MYPRODUCTS_ERROR,
  MarketDispatchTypes 
} from "context/market/market.types";

const MarketReducer = (state: MarketStateI, action: MarketDispatchTypes) => {
  switch (action.type) {

  case LOAD_MYPRODUCTS:
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
  case LOAD_MYPRODUCTS_ERROR:
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
