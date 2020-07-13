import { call, put } from "redux-saga/effects";
import api from "services/api";
import { loadSucess, loadFailure } from ".";

export function* loadFeed() {
  try {
    const response = yield call(api.get, "topics");
    yield put(loadSucess(response.data));
  } catch (error) {
    yield put(loadFailure());
  }
}
