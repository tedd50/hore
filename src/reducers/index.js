import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProductReducer from './ProductReducer';
import CategoryReducer from './CategoryReducer';
import OrderReducer from './OrderReducer';
import OrderDetailReducer from './OrderDetailReducer';

export default combineReducers({
  auth: AuthReducer,
  product: ProductReducer,
  category: CategoryReducer,
  order: OrderReducer,
  orderDetail: OrderDetailReducer
});
