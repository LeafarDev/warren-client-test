export const LOGIN = 'authActionTypes/LOGIN';

export interface LoginAction {
  type: typeof LOGIN;
  email: string;
  password: string;
}

export const LOGOUT = 'authActionTypes/LOGOUT';

export interface LogoutAction {
  type: typeof LOGOUT
}

export const RESET = 'authActionTypes/RESET';

export interface ResetAction {
  type: typeof RESET
}

export const LOGIN_REQUEST = 'authActionTypes/LOGIN_REQUEST';

export interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
}

export const LOGIN_SUCCESS = 'authActionTypes/LOGIN_SUCCESS';

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  token: string;
}

export const LOGIN_FAILURE = 'authActionTypes/LOGIN_FAILURE';

export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  error: Error | string;
}

export type AuthAction =
  | ResetAction
  | LogoutAction
  | LoginRequestAction
  | LoginFailureAction
  | LoginAction
  | LoginSuccessAction;
