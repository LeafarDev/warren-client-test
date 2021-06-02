import { ITransaction } from '../reducers/transactionsReducer';

export const GET_TRANSACTIONS = 'transactionsActionTypes/GET_TRANSACTIONS';

export interface GetTransactionsAction {
  type: typeof GET_TRANSACTIONS;
}

export const SAVE_TRANSACTION = 'transactionsActionTypes/SAVE_TRANSACTION';

export interface SaveTransactionAction {
  type: typeof SAVE_TRANSACTION;
  transaction: ITransaction
}

export const GET_TRANSACTIONS_REQUEST = 'transactionsActionTypes/GET_TRANSACTIONS_REQUEST';

export interface GetTransactionsRequestAction {
  type: typeof GET_TRANSACTIONS_REQUEST;
}

export const SAVE_TRANSACTION_REQUEST = 'transactionsActionTypes/SAVE_TRANSACTION_REQUEST';

export interface SaveTransactionRequestAction {
  type: typeof SAVE_TRANSACTION_REQUEST;
}

export const GET_TRANSACTIONS_SUCCESS = 'transactionsActionTypes/GET_TRANSACTIONS_SUCCESS';

export interface GetTransactionsSuccessAction {
  type: typeof GET_TRANSACTIONS_SUCCESS;
  transactions: ITransaction[];
}

export const SAVE_TRANSACTION_SUCCESS = 'transactionsActionTypes/SAVE_TRANSACTION_SUCCESS';

export interface SaveTransactionSuccessAction {
  type: typeof SAVE_TRANSACTION_SUCCESS;
  transaction: ITransaction | null;
}

export const CURRENT_CREATING_TRANSACTION_TYPE = 'transactionsActionTypes/CURRENT_CREATING_TRANSACTION_TYPE';

export interface CurrentCreatingTransactionTypeAction {
  type: typeof CURRENT_CREATING_TRANSACTION_TYPE;
  currentCreatingTransactionType: 'withdraw' | 'deposit' | 'payment';
}

export const GET_TRANSACTIONS_FAILURE = 'transactionsActionTypes/GET_TRANSACTIONS_FAILURE';

export interface GetTransactionsFailureAction {
  type: typeof GET_TRANSACTIONS_FAILURE;
  error: Error | string;
}

export const SAVE_TRANSACTION_FAILURE = 'transactionsActionTypes/ SAVE_TRANSACTION_FAILURE';

export interface SaveTransactionFailureAction {
  type: typeof SAVE_TRANSACTION_FAILURE;
  error: Error | string;
}

export type TransactionsAction =
  | CurrentCreatingTransactionTypeAction
  | SaveTransactionAction
  | SaveTransactionRequestAction
  | SaveTransactionSuccessAction
  | SaveTransactionFailureAction
  | GetTransactionsAction
  | GetTransactionsRequestAction
  | GetTransactionsSuccessAction
  | GetTransactionsFailureAction;
