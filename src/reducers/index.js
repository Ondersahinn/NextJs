import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import stockMarketBarReducer from './stockMarketBarReducer';

export default combineReducers({
  stockMarket: stockMarketBarReducer,
  logger: (state = {}, { type }) => {
    if (window.logger) {
      window.logger.info(
        type,
      );
    }
    return state;
  },
  toastr: toastrReducer,
});
