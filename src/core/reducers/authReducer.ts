import * as actions from '../actionTypes/authActionsTypes';

export interface AuthState {
  token: string;
}

const initialState: AuthState = {
  token: ''
};

export default function authReducer(
  state: AuthState = initialState,
  action: actions.AuthAction
): AuthState {
  switch (action.type) {
    case actions.RESET:
    case actions.LOGOUT:
      return initialState;
    case actions.LOGIN_SUCCESS:
      return {
        token: action.token
      };
    default:
      return state;
  }
}
