import { IFeedState, FeedStateTypes } from "./types";
import { Reducer } from "redux";
import { action } from "typesafe-actions";
import { ITopic } from "components/Topic/Model";

const INITIAL_STATE: IFeedState = {
  data: null,
  loading: false,
  error: false,
};

export const loadRequest = () => action(FeedStateTypes.REQUEST);
export const loadSucess = (data: ITopic[]) =>
  action(FeedStateTypes.SUCESS, { data });
export const loadFailure = () => action(FeedStateTypes.FAILURE);

const reducer: Reducer<IFeedState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FeedStateTypes.REQUEST:
      return { ...state, loading: true };

    case FeedStateTypes.SUCESS:
      return { ...state, loading: false, data: action.payload.data };
    case FeedStateTypes.FAILURE:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};

export default reducer;
