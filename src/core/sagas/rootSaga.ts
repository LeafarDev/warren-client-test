import { all, fork } from 'redux-saga/effects';
import AuthSaga from './authSaga';
import TransactionSaga from './transactionsSaga';
import UserSaga from './userSaga';
import UserTotalInboundYieldReducer from './userTotalInboundYieldSaga';

export default function* rootSaga() {
  yield all([fork(AuthSaga), fork(TransactionSaga), fork(UserSaga), fork(UserTotalInboundYieldReducer)]);
}
