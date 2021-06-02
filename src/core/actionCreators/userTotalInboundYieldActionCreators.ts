import * as actions from '../actionTypes/userTotalInboundYieldActionTypes';
import { IUserTotalInboundYield } from '../reducers/userTotalInboundYieldReducer';

export function getUserTotalInboundYield(): actions.GetUserTotalInboundYieldTypesAction {
  return {
    type: actions.GET_USER_TOTAL_INBOUND_YIELD
  };
}

export function getUserTotalInboundYieldRequest(): actions.GetUserTotalInboundYieldTypesRequestAction {
  return {
    type: actions.GET_USER_TOTAL_INBOUND_YIELD_REQUEST
  };
}

export function getUserTotalInboundYieldSuccess(
  userTotalInboundYield: IUserTotalInboundYield
): actions.GetUserTotalInboundYieldTypesSuccessAction {
  return {
    type: actions.GET_USER_TOTAL_INBOUND_YIELD_SUCCESS,
    userTotalInboundYield
  };
}

export function getUserTotalInboundYieldFailure(
  error: Error | string
): actions.GetUserTotalInboundYieldTypesFailureAction {
  return {
    type: actions.GET_USER_TOTAL_INBOUND_YIELD_FAILURE,
    error
  };
}
