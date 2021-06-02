import { IUser } from '../reducers/userReducer';

export const SET_USER = 'userActionTypes/SET_USER';

export interface SetUserAction {
  type: typeof SET_USER;
  user: IUser
}

export const GET_USER = 'userActionTypes/GET_USER';

export interface GetUserAction {
  type: typeof GET_USER;
}

export const GET_USER_REQUEST = 'userActionTypes/GET_USER_REQUEST';

export interface GetUserRequestAction {
  type: typeof GET_USER_REQUEST;
}

export const GET_USER_SUCCESS = 'userActionTypes/GET_USER_SUCCESS';

export interface GetUserSuccessAction {
  type: typeof GET_USER_SUCCESS;
  user: IUser
}

export const GET_USER_FAILURE = 'userActionTypes/GET_USER_FAILURE';

export interface GetUserFailureAction {
  type: typeof GET_USER_FAILURE;
  error: Error | string;
}

export type UserAction =
  | SetUserAction
  | GetUserAction
  | GetUserRequestAction
  | GetUserSuccessAction
  | GetUserFailureAction;
