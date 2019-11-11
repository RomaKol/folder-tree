import { put, takeLatest, call, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../constants';
import * as actions from './index';


export function* addFolder() {
  yield takeLatest(actionTypes.ADD_FOLDER, addFolderAsync);
}
function* addFolderAsync (action) {
  try {
      // yield call(() => {
      //     console.log("action.data", action.data);
      // });
      yield put(actions.addFolderSuccess(action.data));
  } catch (error) {
      console.log("--error reg--", error);
  }
}
