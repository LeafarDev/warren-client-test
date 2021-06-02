import * as actions from '../actionTypes/userTotalInboundYieldActionTypes';

export interface IUserTotalInboundYield {
  total: number
}

export interface UserTotalInboundYieldState {
  userTotalInboundYield: IUserTotalInboundYield;
}

const initialState: UserTotalInboundYieldState = {
  userTotalInboundYield: {
    total: 0
  }
};

export default function userTotalInboundYieldReducer(
  state: UserTotalInboundYieldState = initialState,
  action: actions.UserTotalInboundYieldTypesAction
): UserTotalInboundYieldState {
  switch (action.type) {
    case actions.GET_USER_TOTAL_INBOUND_YIELD_SUCCESS:
      return {
        userTotalInboundYield: action.userTotalInboundYield
      };
    default:
      return state;
  }
}
