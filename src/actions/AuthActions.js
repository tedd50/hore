/* global fetch:false */
import { Actions } from 'react-native-router-flux';
import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  FIRSTNAME_CHANGED,
  LASTNAME_CHANGED,
  EMAIL_CHANGED,
  NEWPASS_CHANGED,
  NEWPASS2_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  PROFILE_SAVE,
  PROFILE_SAVE_SUCCESS,
  PROFILE_SAVE_FAIL,
  PASSWORD_SAVE,
  PASSWORD_SAVE_SUCCESS,
  PASSWORD_SAVE_FAIL
} from './types';

export const usernameChanged = (text) => {
  return {
    type: USERNAME_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const firstnameChanged = (text) => {
  return {
    type: FIRSTNAME_CHANGED,
    payload: text
  };
};

export const lastnameChanged = (text) => {
  return {
    type: LASTNAME_CHANGED,
    payload: text
  };
};

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const newpassChanged = (text) => {
  return {
    type: NEWPASS_CHANGED,
    payload: text
  };
};

export const newpass2Changed = (text) => {
  return {
    type: NEWPASS2_CHANGED,
    payload: text
  };
};

export const loginUser = ({ username, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    fetch('http://teddychung.com/horeca/api/index.php?module=login&action=login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // username,
        // password
        username: 'user1',
        password: 'user1'
      }),
    })
    .then((response) => response.json())
    .then(responseJson => {
      console.log('loginUser', responseJson, username, password);
      // console.log(responseJson.errorcode);
      // console.log(responseJson.message);
      // console.log(responseJson.data[0]);
      if (responseJson.errorcode === '0' && responseJson.data[0].level === '0') {
        // global.auth = base64.encode(`${username}:${password}`);
        global.auth = base64.encode('user1:user1');
        // console.log(global.auth);
        loginUserSuccess(dispatch, responseJson.data[0]);
      } else loginUserFail(dispatch);
    })
    .catch((error) => {
      loginUserFail(dispatch);
      console.error(error);
    });
  };
};

export const profileSave = ({ firstname, lastname, email }) => {
  return (dispatch) => {
    dispatch({ type: PROFILE_SAVE });

    fetch('http://teddychung.com/horeca/api/index.php?module=mobileuser&action=updateprofile', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${global.auth}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email
      }),
    })
    .then((response) => response.json())
    .then(responseJson => {
      // console.log('profileSave', responseJson, firstname, lastname, email);
      if (responseJson.errorcode === '0') profileSaveSuccess(dispatch);
      else profileSaveFail(dispatch);
    })
    .catch((error) => {
      profileSaveFail(dispatch);
      console.error(error);
    });
  };
};

export const passwordSave = ({ newpass, newpass2 }) => {
  return (dispatch) => {
    dispatch({ type: PASSWORD_SAVE });

    fetch('http://teddychung.com/horeca/api/index.php?module=mobileuser&action=changepass', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${global.auth}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        newpass,
        newpass2
      }),
    })
    .then((response) => response.json())
    .then(responseJson => {
      // console.log('passwordSave', responseJson, newpass, newpass2);
      if (responseJson.errorcode === '0') passwordSaveSuccess(dispatch);
      else passwordSaveFail(dispatch);
    })
    .catch((error) => {
      passwordSaveFail(dispatch);
      console.error(error);
    });
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  // Actions.main();
  Actions.main();
};

const profileSaveFail = (dispatch) => {
  dispatch({ type: PROFILE_SAVE_FAIL });
};

const profileSaveSuccess = (dispatch) => {
  dispatch({ type: PROFILE_SAVE_SUCCESS });

  Actions.pop();
};

const passwordSaveFail = (dispatch) => {
  dispatch({ type: PASSWORD_SAVE_FAIL });
};

const passwordSaveSuccess = (dispatch) => {
  dispatch({ type: PASSWORD_SAVE_SUCCESS });

  Actions.pop();
};

const base64 = require('base-64');
