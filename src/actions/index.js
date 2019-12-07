import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from './types';
import Firebase from 'firebase';

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};
export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};
export const loginUser = (email, password) => {
  console.log('amad');
  console.log(email);
  console.log(password);

  return dispatch => {
    dispatch({type: LOGIN_USER});

    Firebase.auth()
      .signInWithEmailAndPassword(email.trim(), password.trim())
      .then(user => loginUserSuccess(dispatch, user))
      .catch(err => {
        Firebase.auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};
const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });
};
const loginUserFail = dispatch => {
  dispatch({type: LOGIN_USER_FAIL});
};
