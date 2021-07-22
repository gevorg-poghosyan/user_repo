import { call, all } from "redux-saga/effects";
import { usersSagas } from "../../Saga/userSaga";

export default function* middleware() {
  yield all([call(usersSagas)]);
}