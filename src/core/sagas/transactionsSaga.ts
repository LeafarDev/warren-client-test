import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { fetchTransactions, saveTransaction } from '../services/transactionsServices';
import * as actionCreators from '../actionCreators/transactionsActionCreators';
import * as actionTypes from '../actionTypes/transactionsActionTypes';

function* onLoadTransactions() {
  try {
    yield put(actionCreators.getTransactionsRequest());
    const { data } = yield call(fetchTransactions);
    yield put(actionCreators.getTransactionsSuccess(data));
  } catch (error) {
    toast.error(error.response.data.message);
    yield put(actionCreators.getTransactionsFailure(error.response.data.error));
  }
}

function* onSaveTransaction(newTransactionData: any) {
  try {
    yield put(actionCreators.saveTransactionRequest());
    const { data } = yield call(saveTransaction, newTransactionData.transaction);
    toast.success('Transaction successfully created');
    yield put(actionCreators.saveTransactionSuccess(data));
  } catch (error) {
    toast.error(error.response.data.message);
    yield put(actionCreators.saveTransactionFailure(error.response.data.error));
  }
}

function* watchOnLoadTransactions() {
  yield takeEvery(actionTypes.GET_TRANSACTIONS, onLoadTransactions);
}

function* watchOnSaveTransaction() {
  yield takeEvery(actionTypes.SAVE_TRANSACTION, onSaveTransaction);
}

export default function* transactionsSaga() {
  yield all([fork(watchOnLoadTransactions), fork(watchOnSaveTransaction)]);
}
