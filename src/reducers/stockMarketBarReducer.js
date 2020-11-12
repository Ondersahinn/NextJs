import * as StockMarketActions from '../types/stockMarketActionTypes';

const initialState = {
  stockMarket: [],
  stockMarketFetchCount: 0,
  stockMarketFetchState: StockMarketActions.StockMarketFetchStates.IDLE,
};

export default function stockMarketReducer(state = initialState, { type, payload }) {
  switch (type) {
    case StockMarketActions.START_FETCH_STOCK_MARKET:
      return {
        ...state,
        stockMarketFetchState: StockMarketActions.StockMarketFetchStates.FETCHING,
      };
    case StockMarketActions.FINISH_FETCH_STOCK_MARKET:
      return {
        ...state,
        stockMarketFetchState: StockMarketActions.StockMarketFetchStates.FETCHED,
        stockMarketFetchCount: state.stockMarketFetchCount + 1,
      };
    case StockMarketActions.ERROR_FETCH_STOCK_MARKET:
      return {
        ...state,
        stockMarketFetchState: StockMarketActions.StockMarketFetchStates.ERROR,
      };
    case StockMarketActions.LOAD_STOCK_MARKET:
      return {
        ...state,
        stockMarket: payload,
      };
    default:
      return state;
  }
}
