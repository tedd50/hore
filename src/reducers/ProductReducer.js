import {
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_ADD,
  ORDER_ADD,
  ORDER_ADD_SUCCESS,
  ORDER_ADD_FAIL,
  KEYWORD_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  data: null,
  cart: [],
  error: '',
  loading: false,
  keyword: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCT_FETCH_SUCCESS:
      return { ...state, data: action.payload };
    case PRODUCT_ADD:
      // console.log('ProductReducer', action.payload);
      return {
        ...state,
        cart: action.payload
      };
    case ORDER_ADD:
      return { ...state, loading: true, error: '' };
    case ORDER_ADD_SUCCESS:
      return { ...state, ...INITIAL_STATE };
    case ORDER_ADD_FAIL:
      return {
        ...state,
        error: 'Order Placement Failed.',
        loading: false
      };
    case KEYWORD_CHANGED:
      return { ...state, keyword: action.payload };
    default:
      return state;
  }
};
