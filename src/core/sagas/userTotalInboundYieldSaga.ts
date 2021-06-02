import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { fetchUserTotalInboundYield } from '../services/userTotalInboundYieldServices';
import * as actionCreators from '../actionCreators/userTotalInboundYieldActionCreators';
import * as actionTypes from '../actionTypes/userTotalInboundYieldActionTypes';

function* onLoadUserTotalInboundYield() {
  try {
    yield put(actionCreators.getUserTotalInboundYieldRequest());
    const { data } = yield call(fetchUserTotalInboundYield);
    yield put(actionCreators.getUserTotalInboundYieldSuccess(data));
  } catch (error) {
    toast.error(error.response.data.message);
    yield put(actionCreators.getUserTotalInboundYieldFailure(error.response.data.error));
  }
}

function* watchOnLoadUserTotalInboundYield() {
  yield takeEvery(actionTypes.GET_USER_TOTAL_INBOUND_YIELD, onLoadUserTotalInboundYield);
}

export default function* userTotalInboundYieldSaga() {
  yield all([fork(watchOnLoadUserTotalInboundYield)]);
}
