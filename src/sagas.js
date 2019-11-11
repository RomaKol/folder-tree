import { all } from 'redux-saga/effects';
import * as saga from './actions/sagas';

export default function* rootSaga() {
  yield all([
    saga.addFolder(),
  ]);
}
