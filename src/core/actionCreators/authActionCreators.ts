import * as actions from '../actionTypes/authActionsTypes';

export function login(
  email: string,
  password: string
): actions.LoginAction {
  return {
    type: actions.LOGIN,
    email,
    password
  };
}

export function logout(): actions.logoutAction {
  return {
    type: actions.LOGOUT
  };
}

export function reset(): actions.resetAction {
  return {
    type: actions.RESET
  };
}

export function loginRequest(): actions.loginRequestAction {
  return {
    type: actions.LOGIN_REQUEST
  };
}

export function loginSuccess(
  token: string
): actions.loginSuccessAction {
  return {
    type: actions.LOGIN_SUCCESS,
    token
  };
}

export function loginFailure(
  error: Error | string
): actions.loginFailureAction {
  return {
    type: actions.LOGIN_FAILURE,
    error
  };
}
