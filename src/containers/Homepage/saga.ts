import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchDriversDataRequest,
  fetchDriversDataSuccess,
  fetchDriversDataFailure,
  fetchDriverChatDataRequest,
  fetchDriverChatDataSuccess,
  fetchDriverChatDataFailure
} from "./reducer";
import { fetchDrivers, fetchDriver1Chat } from './services';

function* fetchDriversData(action: any) {
  try {
    const drivers = yield call(fetchDrivers);
    yield put(fetchDriversDataSuccess(drivers));
  } catch (e) {
    yield put(fetchDriversDataFailure(e.message));
    console.log(e);
  }
}

function* fetchDriverChatData(action: any) {
  try {
    const drivers = yield call(fetchDriver1Chat);
    yield put(fetchDriverChatDataSuccess(drivers));
  } catch (e) {
    yield put(fetchDriverChatDataFailure(e.message));
    console.log(e);
  }
}

function* mySaga() {
  yield takeLatest(fetchDriversDataRequest.type, fetchDriversData);
  yield takeLatest(fetchDriverChatDataRequest.type, fetchDriverChatData);
}

export default mySaga;
