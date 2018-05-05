/* global fetch:false */
import { Actions } from 'react-native-router-flux';
import Moment from 'moment';
import {
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_ADD,
  ORDER_ADD,
  ORDER_ADD_SUCCESS,
  ORDER_ADD_FAIL
} from './types';

export const productFetch = ({ categoryid }) => {
  return (dispatch) => {
    fetch('http://teddychung.com/horeca/api/index.php?module=barang&action=search', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${global.auth}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        page: 1,
        itemperpage: 100,
        search: '',
        categoryid
      }),
    })
    .then((response) => response.json())
    .then(responseJson => {
      // console.log('productFetch', responseJson, categoryid);
      if (responseJson.errorcode === '0') {
        dispatch({ type: PRODUCT_FETCH_SUCCESS, payload: responseJson.data });
      }
    })
    .catch((error) => {
      console.error(error);
    });
  };
};

export const productAdd = (cart, barangid, amount, harga, picture) => {
  // console.log('productAdd', cart, barangid, amount, price, image);
  const newcart = [...cart];
  // console.log('(newcart[barangid]) = ', newcart[barangid]);
  const found = cart.some((item) => {
    return item.barangid === barangid;
  });
  // console.log('productAdd found = ', found);
  if (!found) {
    newcart.push({
      barangid,
      amount: 1,
      harga,
      picture
    });
  } else {
    let idx = -1;
    for (let i = 0; i < cart.length; i++) {
      if (newcart[i].barangid === barangid) idx = i;
    }
    newcart[idx].amount += amount;
    if (newcart[idx].amount === 0) newcart.splice(idx, 1);
  }
  return {
    type: PRODUCT_ADD,
    payload: newcart
  };
};

export const orderAdd = (cart) => {
  // console.log('cart = ', cart);
  const listbarang = [];
  cart.forEach((item) => {
    listbarang.push({
      barangid: item.barangid,
      amount: item.amount
    });
  });
  // console.log('listbarang = ', listbarang);
  return (dispatch) => {
    dispatch({ type: ORDER_ADD });

    fetch('http://teddychung.com/horeca/api/index.php?module=order&action=add', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${global.auth}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        orderdate: Moment().format('YYYY-MM-DD'),
        listbarang
      }),
    })
    .then((response) => response.json())
    .then(responseJson => {
      //console.log('orderAdd', responseJson, cart);
      if (responseJson.errorcode === '0') orderAddSuccess(dispatch);
      else orderAddFail(dispatch);
    })
    .catch((error) => {
      orderAddFail(dispatch);
      console.error(error);
    });
  };
};

const orderAddFail = (dispatch) => {
  dispatch({ type: ORDER_ADD_FAIL });
};

const orderAddSuccess = (dispatch) => {
  dispatch({ type: ORDER_ADD_SUCCESS });

  Actions.main();
};
