import {
  ORDER_DETAIL_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  data: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ORDER_DETAIL_FETCH_SUCCESS:
      return { data: action.payload };
    default:
      return state;
  }
};
