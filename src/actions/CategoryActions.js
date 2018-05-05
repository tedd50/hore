/* global fetch:false */
import {
  CATEGORY_FETCH_SUCCESS
} from './types';

export const categoryFetch = () => {
  return (dispatch) => {
    fetch('http://teddychung.com/horeca/api/index.php?module=category1&action=listsubcategory', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${global.auth}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({}),
    })
    .then((response) => response.json())
    .then(responseJson => {
      // console.log('categoryFetch', responseJson);
      if (responseJson.errorcode === '0') {
        dispatch({ type: CATEGORY_FETCH_SUCCESS, payload: responseJson.data });
      } 
    })
    .catch((error) => {
      console.error(error);
    });
  };
};
