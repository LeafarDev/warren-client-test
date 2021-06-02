import * as actions from '../actionTypes/userActionTypes';
import { IUser } from '../reducers/userReducer';

export function setUser(user: IUser): actions.SetUserAction {
  return {
    type: actions.SET_USER,
    user
  };
}

export function getUser(): actions.GetUserAction {
  return {
    type: actions.GET_USER
  };
}

export function getUserRequest(): actions.GetUserRequestAction {
  return {
    type: actions.GET_USER_REQUEST
  };
}

export function getUserSuccess(
  user: IUser
): actions.GetUserSuccessAction {
  return {
    type: actions.GET_USER_SUCCESS,
    user
  };
}

export function getUserFailure(
  error: Error | string
): actions.GetUserFailureAction {
  return {
    type: actions.GET_USER_FAILURE,
    error
  };
}
