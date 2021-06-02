import * as actions from '../actionTypes/transactionsActionTypes';
import { ITransaction } from '../reducers/transactionsReducer';

export function getTransactions(): actions.GetTransactionsAction {
  return {
    type: actions.GET_TRANSACTIONS
  };
}

export function saveTransaction(transaction: ITransaction): actions.SaveTransactionAction {
  return {
    type: actions.SAVE_TRANSACTION,
    transaction
  };
}

export function getTransactionsRequest(): actions.GetTransactionsRequestAction {
  return {
    type: actions.GET_TRANSACTIONS_REQUEST
  };
}

export function saveTransactionRequest(): actions.SaveTransactionRequestAction {
  return {
    type: actions.SAVE_TRANSACTION_REQUEST
  };
}

export function getTransactionsSuccess(
  transactions: ITransaction[]
): actions.GetTransactionsSuccessAction {
  return {
    type: actions.GET_TRANSACTIONS_SUCCESS,
    transactions
  };
}

export function saveTransactionSuccess(
  transaction: ITransaction | null
): actions.SaveTransactionSuccessAction {
  return {
    type: actions.SAVE_TRANSACTION_SUCCESS,
    transaction
  };
}

export function currentCreatingTransaction(
  currentCreatingTransactionType: 'withdraw' | 'deposit' | 'payment'
): actions.CurrentCreatingTransactionTypeAction {
  return {
    type: actions.CURRENT_CREATING_TRANSACTION_TYPE,
    currentCreatingTransactionType
  };
}

export function getTransactionsFailure(
  error: Error | string
): actions.GetTransactionsFailureAction {
  return {
    type: actions.GET_TRANSACTIONS_FAILURE,
    error
  };
}

export function saveTransactionFailure(
  error: Error | string
): actions.SaveTransactionFailureAction {
  return {
    type: actions.SAVE_TRANSACTION_FAILURE,
    error
  };
}
