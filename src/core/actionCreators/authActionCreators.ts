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

export function logout(): actions.LogoutAction {
  return {
    type: actions.LOGOUT
  };
}

export function reset(): actions.ResetAction {
  return {
    type: actions.RESET
  };
}

export function loginRequest(): actions.LoginRequestAction {
  return {
    type: actions.LOGIN_REQUEST
  };
}

export function loginSuccess(
  token: string
): actions.LoginSuccessAction {
  return {
    type: actions.LOGIN_SUCCESS,
    token
  };
}

export function loginFailure(
  error: Error | string
): actions.LoginFailureAction {
  return {
    type: actions.LOGIN_FAILURE,
    error
  };
}
