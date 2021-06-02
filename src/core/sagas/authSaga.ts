import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actionTypes/authActionsTypes';
import * as actionCreators from '../actionCreators/authActionCreators';
import { login } from '../services/authService';
import api from '../services/utils/http';
import history from '../services/utils/history';
import { toast } from 'react-toastify';

function* onLogin({
  email,
  password
}: actionTypes.LoginAction) {
  try {
    yield put(actionCreators.loginRequest());
    const { data } = yield call(login, email, password);
    toast.success('Successfully logged in');
    yield put(actionCreators.loginSuccess(data.token));
    api.defaults.headers.Authorization = `${data.token}`;
    history.push('/');
  } catch (error) {
    toast.error(error.response.data.message);
    yield put(actionCreators.loginFailure(error.response.data.error));
  }
}

function* onLogout() {
  yield put(actionCreators.reset());
  history.push('/login');
}

function* watchOnLogin() {
  yield takeEvery(actionTypes.LOGOUT, onLogout);
}

function* watchOnLogout() {
  yield takeLatest(actionTypes.LOGIN, onLogin);
}

export default function* AuthSaga() {
  yield all([fork(watchOnLogin), fork(watchOnLogout)]);
}
