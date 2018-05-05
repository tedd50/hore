import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  FIRSTNAME_CHANGED,
  LASTNAME_CHANGED,
  EMAIL_CHANGED,
  NEWPASS_CHANGED,
  NEWPASS2_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  PROFILE_SAVE,
  PROFILE_SAVE_SUCCESS,
  PROFILE_SAVE_FAIL,
  PASSWORD_SAVE,
  PASSWORD_SAVE_SUCCESS,
  PASSWORD_SAVE_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  username: '',
  password: '',
  user: null,
  firstname: '',
  lastname: '',
  email: '',
  error: '',
  newpass: '',
  newpass2: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERNAME_CHANGED:
      return { ...state, username: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case FIRSTNAME_CHANGED:
      return { ...state, firstname: action.payload };
    case LASTNAME_CHANGED:
      return { ...state, lastname: action.payload };
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case NEWPASS_CHANGED:
      return { ...state, newpass: action.payload };
    case NEWPASS2_CHANGED:
      return { ...state, newpass2: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        email: action.payload.email
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: 'Authentication Failed.',
        password: '',
        username: '',
        loading: false
      };
    case PROFILE_SAVE:
      return { ...state, loading: true, error: '' };
    case PROFILE_SAVE_SUCCESS:
      return { ...state, loading: false, error: '' };
    case PROFILE_SAVE_FAIL:
      return {
        ...state,
        error: 'Save Profile Failed.',
        loading: false
      };
    case PASSWORD_SAVE:
      return { ...state, loading: true, error: '' };
    case PASSWORD_SAVE_SUCCESS:
      return { ...state, loading: false, error: '' };
    case PASSWORD_SAVE_FAIL:
      return {
        ...state,
        error: 'Save Password Failed.',
        loading: false
      };
    default:
      return state;
  }
};
