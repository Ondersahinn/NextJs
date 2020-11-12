import * as StockMarketActions from '../types/stockMarketActionTypes';
import { getAllStockMarket } from '../services/stockMarketService';

export function startFetchingStockMarket() {
  return {
    type: StockMarketActions.START_FETCH_STOCK_MARKET,
  };
}

export function finishFetchingStockMarket() {
  return {
    type: StockMarketActions.FINISH_FETCH_STOCK_MARKET,
  };
}

export function errorFetchingStockMarket() {
  return {
    type: StockMarketActions.ERROR_FETCH_STOCK_MARKET,
  };
}

export function loadStockMarket(stockMarket) {
  return {
    type: StockMarketActions.LOAD_STOCK_MARKET,
    payload: stockMarket,
  };
}

export const fetchStockMarket = () => (dispatch) => {
  dispatch(startFetchingStockMarket());
  getAllStockMarket().then((res) => {
    dispatch(loadStockMarket(res || []));
    dispatch(finishFetchingStockMarket());
  }).catch((/* err */) => {
    dispatch(errorFetchingStockMarket());
  });
};
