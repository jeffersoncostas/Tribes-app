import { call, put } from "redux-saga/effects";
import api from "services/api";
import { loadSucess, loadFailure } from "./index";

export function* loadUser() {
  try {
    const response = yield call(api.get, "users/0");
    yield put(loadSucess(response.data));
  } catch (error) {
    yield put(loadFailure());
  }
}
