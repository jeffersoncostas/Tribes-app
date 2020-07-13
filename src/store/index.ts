import { createStore, Store, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./ducks/rootReducer";
import { IUserState } from "./ducks/user/types";
import rootSaga from "./ducks/rootSaga";
import { IFeedState } from "./ducks/feed/types";

export interface ApplicationState {
  user: IUserState;
  feed: IFeedState;
}
const w: any = window as any;
const composeEnhancers = w.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
