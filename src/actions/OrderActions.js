/* global fetch:false */
import {
  ORDER_FETCH_SUCCESS
} from './types';

export const orderFetch = () => {
  return (dispatch) => {
    fetch('http://teddychung.com/horeca/api/index.php?module=order&action=search', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${global.auth}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        page: 1,
        itemperpage: 100,
        status: '',
        startdate: '',
        enddate: ''
      }),
    })
    .then((response) => response.json())
    .then(responseJson => {
      // console.log('orderFetch', responseJson);
      if (responseJson.errorcode === '0') {
        dispatch({ type: ORDER_FETCH_SUCCESS, payload: responseJson.data });
      }
    })
    .catch((error) => {
      console.error(error);
    });
  };
};
