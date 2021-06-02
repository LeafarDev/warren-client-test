import * as actions from '../actionTypes/transactionsActionTypes';

export interface ITransaction {
  id: string | null
  sourceAccountNumber: string
  targetAccountNumber: string | null
  amount: number
  type: 'withdraw' | 'deposit' | 'payment'
  createdAt: string | null
  updatedAt: string | null
}

export interface TransactionsState {
  transactions: ITransaction[];
  lastCreatedTransaction: ITransaction | null;
  currentCreatingTransactionType: 'withdraw' | 'deposit' | 'payment';
}

const initialState: TransactionsState = {
  transactions: [],
  currentCreatingTransactionType: 'deposit',
  lastCreatedTransaction: null
};

export default function transactionsReducer(
  state: TransactionsState = initialState,
  action: actions.TransactionsAction
): TransactionsState {
  switch (action.type) {
    case actions.CURRENT_CREATING_TRANSACTION_TYPE:
      return {
        ...state,
        currentCreatingTransactionType: action.currentCreatingTransactionType
      };
    case actions.SAVE_TRANSACTION_SUCCESS:
      return {
        ...state,
        lastCreatedTransaction: action.transaction
      };
    case actions.GET_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        transactions: action.transactions
      };
    default:
      return state;
  }
}
