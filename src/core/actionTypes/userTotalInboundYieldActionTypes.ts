import { IUserTotalInboundYield } from '../reducers/userTotalInboundYieldReducer';

export const GET_USER_TOTAL_INBOUND_YIELD = 'userTotalInboundYieldActionTypes/GET_USER_TOTAL_INBOUND_YIELD';

export interface GetUserTotalInboundYieldTypesAction {
  type: typeof GET_USER_TOTAL_INBOUND_YIELD;
}

export const GET_USER_TOTAL_INBOUND_YIELD_REQUEST = 'userTotalInboundYieldActionTypes/GET_USER_TOTAL_INBOUND_YIELD_REQUEST';

export interface GetUserTotalInboundYieldTypesRequestAction {
  type: typeof GET_USER_TOTAL_INBOUND_YIELD_REQUEST;
}

export const GET_USER_TOTAL_INBOUND_YIELD_SUCCESS = 'userTotalInboundYieldActionTypes/GET_USER_TOTAL_INBOUND_YIELD_SUCCESS';

export interface GetUserTotalInboundYieldTypesSuccessAction {
  type: typeof GET_USER_TOTAL_INBOUND_YIELD_SUCCESS;
  userTotalInboundYield: IUserTotalInboundYield;
}

export const GET_USER_TOTAL_INBOUND_YIELD_FAILURE = 'userTotalInboundYieldActionTypes/GET_USER_TOTAL_INBOUND_YIELD_FAILURE';

export interface GetUserTotalInboundYieldTypesFailureAction {
  type: typeof GET_USER_TOTAL_INBOUND_YIELD_FAILURE;
  error: Error | string;
}

export type UserTotalInboundYieldTypesAction =
  | GetUserTotalInboundYieldTypesAction
  | GetUserTotalInboundYieldTypesRequestAction
  | GetUserTotalInboundYieldTypesSuccessAction
  | GetUserTotalInboundYieldTypesFailureAction;
