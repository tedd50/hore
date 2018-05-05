/* global fetch:false */
import {
  ORDER_DETAIL_FETCH_SUCCESS
} from './types';

export const orderDetailFetch = ({ orderheaderid }) => {
  // console.log('Call orderDetailFetch with orderheaderid', orderheaderid);
  return (dispatch) => {
    fetch('http://teddychung.com/horeca/api/index.php?module=order&action=detail', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${global.auth}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        orderheaderid
      }),
    })
    .then((response) => response.json())
    .then(responseJson => {
      // console.log('orderDetailFetch', responseJson);
      if (responseJson.errorcode === '0') {
        dispatch({ type: ORDER_DETAIL_FETCH_SUCCESS, payload: responseJson.data });
      }
    })
    .catch((error) => {
      console.error(error);
    });
  };
};
