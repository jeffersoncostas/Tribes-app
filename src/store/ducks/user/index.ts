import { IUser, IUserState, UserStateTypes } from "./types";
import { action } from "typesafe-actions";
import { Reducer } from "redux";

const INITIAL_STATE: IUserState = {
  data: null,
  loading: false,
  error: false,
};

export const loadRequest = () => action(UserStateTypes.REQUEST);
export const loadSucess = (data: IUser) =>
  action(UserStateTypes.SUCESS, { data });
export const loadFailure = () => action(UserStateTypes.FAILURE);

const reducer: Reducer<IUserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserStateTypes.REQUEST:
      return { ...state, loading: true };

    case UserStateTypes.SUCESS:
      return { ...state, loading: false, data: action.payload.data };
    case UserStateTypes.FAILURE:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};
export default reducer;
