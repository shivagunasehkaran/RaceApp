import {put, takeEvery} from 'redux-saga/effects';
import {
  FETCHING_DATA,
  FETCHING_DATA_FAILURE,
  FETCHING_DATA_SUCCESS,
} from './constants';
import {getRacesDetails} from './services/Services';

function* fetchData() {
  try {
    const data = yield getRacesDetails();
    yield put({type: FETCHING_DATA_SUCCESS, data});
  } catch (e) {
    yield put({type: FETCHING_DATA_FAILURE});
  }
}

function* dataSaga() {
  yield takeEvery(FETCHING_DATA, fetchData);
}

export default dataSaga;
