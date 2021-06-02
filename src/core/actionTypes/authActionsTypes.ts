export const LOGIN = 'authActionTypes/LOGIN';

export interface LoginAction {
  type: typeof LOGIN;
  email: string;
  password: string;
}

export const LOGOUT = 'authActionTypes/LOGOUT';

export interface logoutAction {
  type: typeof LOGOUT
}

export const RESET = 'authActionTypes/RESET';

export interface resetAction {
  type: typeof RESET
}

export const LOGIN_REQUEST = 'authActionTypes/LOGIN_REQUEST';

export interface loginRequestAction {
  type: typeof LOGIN_REQUEST;
}

export const LOGIN_SUCCESS = 'authActionTypes/LOGIN_SUCCESS';

export interface loginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  token: string;
}

export const LOGIN_FAILURE = 'authActionTypes/LOGIN_FAILURE';

export interface loginFailureAction {
  type: typeof LOGIN_FAILURE;
  error: Error | string;
}

export type AuthAction =
  | resetAction
  | logoutAction
  | loginRequestAction
  | loginFailureAction
  | LoginAction
  | loginSuccessAction;
