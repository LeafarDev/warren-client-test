import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { fetchUser } from '../services/userServices';
import * as actionCreators from '../actionCreators/userActionCreators';
import * as actionTypes from '../actionTypes/userActionTypes';
import { toast } from 'react-toastify';

function* onLoadUser() {
  try {
    yield put(actionCreators.getUserRequest());
    const { data } = yield call(fetchUser);
    yield put(actionCreators.getUserSuccess(data));
  } catch (error) {
    toast.error(error.response.data.message);
    yield put(actionCreators.getUserFailure(error.response.data.error));
  }
}

function* watchOnLoadUser() {
  yield takeEvery(actionTypes.GET_USER, onLoadUser);
}

export default function* userSaga() {
  yield all([fork(watchOnLoadUser)]);
}
