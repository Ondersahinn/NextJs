import {stockmarketName} from '../utils/index'

export const getAllStockMarket = async () => {
    const result = await stockmarketName();
    return result;
};

export default getAllStockMarket;