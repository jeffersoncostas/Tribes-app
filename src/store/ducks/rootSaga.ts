import { all, takeLatest } from "redux-saga/effects";
import { loadUser } from "./user/sagas";
import { loadFeed } from "./feed/sagas";
import { UserStateTypes } from "./user/types";
import { FeedStateTypes } from "./feed/types";

export default function* rootSaga() {
  return yield all([
    takeLatest(UserStateTypes.REQUEST, loadUser),
    takeLatest(FeedStateTypes.REQUEST, loadFeed),
  ]);
}
