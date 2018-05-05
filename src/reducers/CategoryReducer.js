import {
  CATEGORY_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = { data: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CATEGORY_FETCH_SUCCESS:
      // console.log('CategoryReducer', action.payload);
      return { data: action.payload };
    default:
      return state;
  }
};
