import * as actions from '../actionTypes/userActionTypes';

export interface IAccount {
  id: string
  accountNumber: string
  balance: number
  createdAt: string
  updatedAt: string | null
}

export interface IUser {
  id: string
  name: string
  email: string
  accountId: string
  createdAt: string
  updatedAt: string | null
  account: IAccount
}

export interface UserState {
  user: IUser
}

const initialState: UserState = {
  user: {
    id: '',
    name: '',
    email: '',
    accountId: '',
    createdAt: '',
    updatedAt: null,
    account: {
      id: '',
      accountNumber: '',
      balance: 0,
      createdAt: '',
      updatedAt: ''
    }
  }
};

export default function userReducer(
  state: UserState = initialState,
  action: actions.UserAction
): UserState {
  switch (action.type) {
    case actions.SET_USER:
    case actions.GET_USER_SUCCESS:
      return {
        user: action.user
      };
    default:
      return state;
  }
}
